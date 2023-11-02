import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const register = (email, password) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photo) => {
    setSpinner(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const login = (name, email) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, name, email);
  };
  const logout = () => {
    setSpinner(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || users?.email;
      const loggedUser = { email: currentUser?.email };
      setUsers(currentUser);
      setSpinner(false);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((data) => console.log(data.data));
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((data) => console.log(data.data));
      }
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    register,
    updateUser,
    login,
    users,
    logout,
    spinner,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { users, spinner } = useContext(AuthContext);
  const location = useLocation();
  if (spinner) {
    return (
      <div className="flex justify-center mt-20 min-h-screen">
        <span className="loading loading-spinner text-center text-secondary"></span>
      </div>
    );
  }
  if (users?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;

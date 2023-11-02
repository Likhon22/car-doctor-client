import { useContext } from "react";
import RegisterImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, updateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    register(email, password)
      .then((res) => {
        updateUser(name, photo).then().catch();
        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Sign Up",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={RegisterImg} alt="" />
          <div className="text-center lg:text-left"></div>
          <div className="flex lg:flex-row gap-12 flex-shrink-0 rounded-2xl lg:w-2/3 md:h-[700px]  items-center justify-center shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <h1 className="text-5xl font-bold text-center mb-8">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Your Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#FF3811] border-none text-white"
                >
                  Register
                </button>
              </div>
              <p className="text-center mt-4">
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:border-b hover:border-black"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

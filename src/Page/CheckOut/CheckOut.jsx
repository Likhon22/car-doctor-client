import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { users: user } = useContext(AuthContext);
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const dueAmount = form.price.value;
    const date = form.date.value;
    const order = {
      customerName: name,
      email,
      dueAmount,
      service_id: checkOutData._id,
      service: checkOutData.title,
      date,
      img: checkOutData.img,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const checkOutData = useLoaderData();
  return (
    <div className="py-24">
      <h2 className="text-3xl font-black text-center">{checkOutData.title}</h2>
      <div className="md:w-4/6 mx-auto bg-[#F3F3F3] py-8 rounded-lg mt-8 ">
        <form
          className="card-body mx-4 md:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-6"
          onSubmit={handleCheckout}
        >
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Due Amount"
              name="price"
              defaultValue={"$" + checkOutData.price}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control col-span-2 mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-block bg-[#FF3811] text-white hover:bg-orange-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

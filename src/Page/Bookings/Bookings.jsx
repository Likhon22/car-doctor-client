import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../Login/useAxiosSecure";
const Bookings = () => {
  const { users } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url = `http://localhost:5000/bookings?email=${users?.email}`;
  const url = `/bookings?email=${users?.email}`;
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBooking(data);
    //     console.log(data);
    //   });
    axiosSecure.get(url).then((res) => setBooking(res.data));
  }, [url,axiosSecure]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              const remaining = booking.filter((cart) => cart._id !== id);
              setBooking(remaining);

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleBookingUpdate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              console.log(data);
              const remaining = booking.filter((cart) => cart._id !== id);
              const updatedOne = booking.find((cart) => cart._id === id);
              updatedOne.status = "confirm";
              const newCart = [updatedOne, ...remaining];
              setBooking(newCart);
              console.log(newCart);

              Swal.fire("Confirm!", "Your cart has been Confirmed.", "success");
            }
          });
      }
    });
  };
  return (
    <div className={` py-24 min-h-screen`}>
      {booking.length > 0 && (
        <div className="mt-12 lg:w-5/6 mx-12  lg:mx-auto grid grid-cols-1 md:grid-cols-2  gap-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((cart) => (
                  <BookingRow
                    key={cart._id}
                    cart={cart}
                    handleDelete={handleDelete}
                    handleBookingUpdate={handleBookingUpdate}
                  ></BookingRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;

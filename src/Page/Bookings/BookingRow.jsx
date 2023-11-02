import { useEffect, useState } from "react";

const BookingRow = ({ cart, handleDelete, handleBookingUpdate,  }) => {
  const { _id, date, service, dueAmount: price, img, status } = cart;

  return (
    <tr>
      <th>
        <button
          className="btn btn-square btn-sm btn-outline"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt={service} />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td> {price}</td>
      <th>
        {status === "confirm" ? (
          <span className=" text-violet-800">Confirmed</span>
        ) : (
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => handleBookingUpdate(_id)}
          >
            Confirm Please
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;

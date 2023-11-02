import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-28 ">
      <div className="text-center">
        <h2 className="text-2xl font-medium text-orange-600">Service</h2>
        <h2 className="text-5xl text-black font-bold my-3">Our Service Area</h2>
        <p className="text-[#737373] text-lg mt-4">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {services.map((service) => (
            <div key={service._id}>
              <div className="card w-96 bg-base-100 border">
                <figure>
                  <img
                    className="w-full h-[200px] px-8 pt-8"
                    src={service.img}
                    alt={service.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold text-black">
                    {service.title}
                  </h2>
                  <p className="text-lg font-medium text-orange-600 text-start">
                    Price : ${service.price}
                  </p>
                  <div className="card-actions justify-end ">
                    <Link to={`/checkout/${service._id}`}>
                      <button className=" btn btn-circle  text-[#FF3811] text-xl ">
                        ❯
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn  btn-outline hover:bg-[#FF3811] border-orange-500 text-[#FF3811] hover:border-none   hover:text-white mt-12">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;

import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const AboutSection = () => {
  return (
    <div>
      <div className=" mt-16 ">
        <div className=" flex mx-8 p-16 justify-between gap-28   flex-col lg:flex-row">
          <div className="relative lg:w-1/2 ">
            <img
              src={person}
              className=" rounded-lg shadow-2xl w-[460px] h-[473px]"
            />
            <img
              className="w-[327px] h-[332px] absolute top-1/2 left-48 border-4 border-white   rounded-lg shadow-2xl"
              src={parts}
              alt=""
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-[#FF3811] text-xl font-medium mb-4">About Us</h2>

            <h2 className="text-5xl font-bold w-[376px] text-black">
              We are qualified & of experience in this field
            </h2>
            <div className="text-[#737373] w-[489px] text-lg space-y-2 mt-7">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </p>
              <p>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
            </div>

            <button className="btn btn-error bg-[#FF3811] border-none text-white mt-7">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

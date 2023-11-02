import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  const bannerText = (
    <>
      <div className="absolute flex justify-start   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full      bottom-0 ">
        <div className="space-y-7 flex flex-col justify-center pl-20">
          <h2 className="text-6xl font-bold text-white lg:w-[436px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white text-lg md:w-[522px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="mt-8 flex gap-6">
            <button className="btn btn-error bg-[#FF3811] border-none text-white">
              Discover More
            </button>
            <button className="btn btn-outline border-white text-gray-100">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full  " />
        {bannerText}
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide6"
            className="btn btn-circle mr-5 bg-[#FFFFFF4C] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FFFFFF4C]"
          >
            ❮
          </a>

          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        {bannerText}
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide1"
            className="btn btn-circle mr-5 bg-[#FFFFFF4C] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FFFFFF4C]"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        {bannerText}
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide2"
            className="btn btn-circle mr-5 bg-[#FFFFFF4C] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FFFFFF4C]"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        {bannerText}
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide3"
            className="btn btn-circle mr-5 bg-[#FFFFFF4C] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FFFFFF4C]"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-[#FF3811] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        {bannerText}
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-[#FFFFFF4C] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FFFFFF4C]"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-[#FF3811] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        {bannerText}
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide5"
            className="btn btn-circle mr-5 bg-[#FFFFFF4C] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FFFFFF4C]"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] text-white border-none w-[60px] h-[60px] text-lg hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

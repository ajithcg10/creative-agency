import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ServicesCard from "./Ui/ServicesCard";

export default function Services() {
  return (
    <div className="relative bg-services-hero   hero-base h-[100vh] rounded-[40px]  p-10">
      <div className="absolute inset-0 bg-black/90 h-[70%] rounded-[40px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#c9f31d] rounded-b-[40px]"></div>

      <div className="flex justify-between ">
        {/* background dim overlay */}

        <div className=" z-10">
          <h2 className="text-[16px] text-light font-kanit">
            <div className="text-[16px] mr-[5px] inline-block mb-[10px] font-kanit text-[#ff3d00]">
              //
            </div>
            OUR SERVICE
          </h2>
          <h3 className="text-[48px] font-montserrat leading-none text-light font-[800]">
            Offering versatile{" "}
            <span className="font-[500]">digital services</span>{" "}
          </h3>
        </div>

        <div className="z-10">
          <p className="text-[20px] font-sans w-[70%] text-light font-[400]">
            Mouno provide best digital product design for firms who are
            launching new products. We have best 3D artists here to serve best
            outputs.
          </p>
        </div>

        <div className=" z-10 flex gap-5">
          <div className="text-light hover:bg-white hover:text-black cursor-pointer text-[30px] w-10 h-10 border border-dashed border-light flex items-center justify-center rounded-full">
            <IoIosArrowRoundBack />
          </div>
          <div className="text-light w-10 h-10 hover:bg-white hover:text-black  text-[30px] border border-dashed border-light flex items-center justify-center rounded-full">
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
      <div>
        <ServicesCard />
      </div>
    </div>
  );
}

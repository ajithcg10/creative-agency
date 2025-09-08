import { IoIosArrowRoundForward } from "react-icons/io";

export default function ServicesCard() {
  return (
    <div className="text-[#000] absolute  px-10 bottom-[300px] gap-2  grid grid-cols-3  left-[50%] translate-x-[-50%] w-[100%] ">
      <div className=" bg-light py-[70px] px-[30px]  backdrop-blur-md border border-light/20 rounded-[20px]">
        <span>hello</span>
        <h3>Database Design</h3>
        <p>
          {" "}
          Mouno’s objective is to reach the firm in such a level from where we
          can create opportunity for young professionals.…
        </p>
        <div className="flex items-center ">
          <h5>Learn More </h5>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className=" bg-black/70 p-10  backdrop-blur-md border border-light/20 rounded-[20px]">
        <span>hello</span>
        <h3>Database Design</h3>
        <p>
          {" "}
          Mouno’s objective is to reach the firm in such a level from where we
          can create opportunity for young professionals.…
        </p>
        <div className="flex items-center ">
          <h5>Learn More </h5>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className=" bg-black/70 p-10  backdrop-blur-md border border-light/20 rounded-[20px]">
        <span>hello</span>
        <h3>Database Design</h3>
        <p>
          {" "}
          Mouno’s objective is to reach the firm in such a level from where we
          can create opportunity for young professionals.…
        </p>
        <div className="flex items-center ">
          <h5>Learn More </h5>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  );
}

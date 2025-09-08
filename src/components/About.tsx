import Image1 from "../assets/image1.webp";

export default function About() {
  return (
    <div className="py-16 px-10 bg-[#f9f3ee]">
      <div className="flex flex-col md:flex-row     items-center md:items-start gap-8 ">
        {/* Left Side Images */}
        <div className="flex flex-col gap-4 md:w-1/2 relative">
          <div className="w-full h-[400px] bg-[#dbd5d2] top-[15px] left-[15px] rounded-[190px] absolute "></div>
          <div className="w-full h-[400px]  rounded-[190px]  z-10   shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src={Image1}
              alt="Main"
              className="w-full h-full object-cover rounded-[190px]"
            />
          </div>
          <div className="absolute top-[-35px] right-0 w-[200px] z-10 h-[200px] rounded-full bg-white flex items-center justify-center shadow-lg">
            {/* Rotating text */}
            <div className="absolute w-full h-full rotating-text">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin-slow"
              >
                <defs>
                  <path id="circle" d="M 100 20 A 80 80 0 1 1 99.99 20" />
                </defs>
                <text className="fill-gray-600 text-xs font-montserrat font-bold tracking-wider">
                  <textPath href="#circle" startOffset="0%">
                    MOUNO AGENCY • CREATIVE DESIGN • MOUNO AGENCY • CREATIVE
                    DESIGN •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Icon + Title */}
          <div className="flex items-center gap-1">
            <div className="text-[16px] font-kanit text-[#ff3d00]">//</div>
            <h2 className="text-[16px] font-kanit text-[#4b4b4b]">
              About Studio
            </h2>
          </div>

          {/* H3 */}
          <h3 className="text-lg font-semibold">
            Innovative full-service Creative Studio, expertise in web
            development
          </h3>

          {/* H5 + Paragraph */}
          <div className="flex flex-col gap-2">
            <h5 className="text-md font-medium">
              Explore portfolio to learn more
            </h5>
            <p className="text-gray-600  font-sans font-[400]">
              Mouno’s objective is to reach the firm in such a level from where
              we can create opportunity for young new professionals to excel
              learning more about the web designing world
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[98%] mx-auto h-[2px] bg-black mt-12 mb-8" />
      <div className="flex justify-between gap-8 flex-col md:flex-row">
        <div className="w-[100%] underline">
          <ul className="flex flex-col gap-2 cursor-pointer ">
            <li className="font-montserrat text-[22px] font-[500]">
              UI/UX Design & Development
            </li>
            <li className="font-montserrat text-[22px] font-[500]">
              Website Designing Requirement
            </li>
            <li className="font-montserrat text-[22px] font-[500]">
              Software Development Database
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-montserrat text-[22px] font-[500]">
            Our Mission
          </h3>
          <p className=" text-[16px] font-sans font-[400] text-[#5f5f5f]">
            Mouno’s objective is to reach the firm in such a level from where we
            can create opportunity for young new professionals to excel learning
            more about the web designing world
          </p>
        </div>
        <div>
          <h3 className="font-montserrat text-[22px] font-[500]">
            Our Mission
          </h3>
          <p className="font-sans  text-[16px] font-[400] text-[#5f5f5f]">
            Mouno’s objective is to reach the firm in such a level from where we
            can create opportunity for young new professionals to excel learning
            more about the web designing world
          </p>
        </div>
      </div>
    </div>
  );
}

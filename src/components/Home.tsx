import { useEffect, useState } from "react";
import Header from "./Ui/Header";
import blur from "../assets/blur-1.png";
import { MdArrowOutward } from "react-icons/md";
import AnimatedImage from "./Ui/AnimatedImage";
import { heroimagedata } from "../data/homeData";
import type { HeroImage } from "../types/type";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroImageObj, setHeroImageObj] = useState<HeroImage | null>(null);
  console.log(heroImageObj);

  useEffect(() => {
    // Force a reflow to ensure smooth animations
    document.body.offsetHeight;

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); // Reduced delay for faster initial trigger
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-home-bg w-full">
      <Header />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-10">
        {/* Left Side Content */}
        <div className="flex-1 ">
          <div className="space-y-6">
            <h2
              className={`text-light font-montserrat font-[300] text-[20px] transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: "100ms",
                willChange: "opacity, transform",
              }}
            >
              Hi, WE ARE MOUNO DIGITAL AGENCY
            </h2>

            <h4
              className={`text-light font-montserrat text-[80px] font-[800] transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: "200ms",
                willChange: "opacity, transform",
              }}
            >
              <span
                className={`inline-block transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: "400ms",
                  willChange: "opacity, transform",
                }}
              >
                CREATIVITY
              </span>
              <br />
              <span
                className={`font-[100] inline-block transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: "600ms",
                  willChange: "opacity, transform",
                }}
              >
                INNOVATION &
              </span>
              <br />
              <span
                className={`inline-block transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: "800ms",
                  willChange: "opacity, transform",
                }}
              >
                USER EXPERIENCE
              </span>
            </h4>

            <div className="flex items-start space-x-4 mt-6">
              <div className="flex-shrink-0">
                <div className="rounded-full flex items-center justify-center">
                  <MdArrowOutward
                    className={`text-[100px] text-light transition-all duration-1200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] transform ${
                      isLoaded
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-45 scale-75"
                    } hover:scale-110 hover:rotate-12`}
                    style={{
                      transitionDelay: "1000ms",
                      willChange: "opacity, transform",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              <p
                className={`text-light font-montserrat w-[70%] text-base leading-relaxed transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: "1200ms",
                  willChange: "opacity, transform",
                }}
              >
                We appreciate your trust on us. We feel responsible to deliver
                best outcome in every projects we do as an agency.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 max-w-lg ml-12 relative">
          {/* Blur image behind */}
          <img
            src={heroImageObj?.blur_image || blur}
            alt="blur"
            className={`absolute bottom-[130px] left-[59%] transform -translate-x-1/2 transition-all duration-1500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              transitionDelay: "600ms",
              willChange: "opacity, transform",
            }}
          />

          {/* Main image on top */}
          <div
            className={`transition-all flex duration-1200 items-center ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{
              transitionDelay: "800ms",
              willChange: "opacity, transform",
            }}
          >
            <AnimatedImage image={heroImageObj?.image} />
            <div>
              {heroimagedata.map((item: HeroImage, index: number) => {
                const isSelected =
                  heroImageObj?.id === item.id ||
                  (!heroImageObj && index === 0);

                return (
                  <div
                    key={item.id}
                    className={`flex items-center mb-4 justify-center p-3 rounded-full
          ${isSelected ? "border border-light" : "hover:border border-light"}
                transition-all duration-300`} // added transition
                    onClick={() => setHeroImageObj(item)}
                  >
                    <div className="h-1 w-1 bg-light rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

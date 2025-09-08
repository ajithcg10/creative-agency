import React from "react";
import VirtualRealityImage from "../../assets/virtual-reality.png"; // adjust path

type AnimatedImageProps = {
  image?: string;
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({ image }) => {
  return (
    <div className=" rounded-lg  h-[100vh] flex items-center justify-center z-50  overflow-hidden">
      <img
        src={image || VirtualRealityImage}
        alt="Virtual Reality"
        className="rounded-lg  animate-updown"
      />
    </div>
  );
};

export default AnimatedImage;

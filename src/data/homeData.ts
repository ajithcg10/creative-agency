import robot from "../assets/robot-ai.png";
import virtual_reality from "../assets/virtual-reality.png";
import astronaut from "../assets/astronaut.png";
import blur1 from "../assets/blur-1.png";
import blur2 from "../assets/blur-2.png";
import blur3 from "../assets/blur-3.png";
import type { HeroImage } from "../types/type";

export const heroimagedata: HeroImage[] = [
  {
    id: 1,
    image: virtual_reality,
    blur_image: blur1,
  },
  {
    id: 2,
    image: astronaut,
    blur_image: blur2,
  },
  {
    id: 3,
    image: robot,
    blur_image: blur3,
  },
];

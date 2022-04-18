import config from "../../../content/config.yaml";

import HeroLogo from "./HeroLogo.react";
import HeroImage from "./HeroImage.react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[75vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        <HeroImage />
      </div>
      <div className="flex flex-col items-center z-10 space-y-8">
        <HeroLogo />
        <a
          className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-4 px-8 transition-colors text-xl"
          href={config.fromTheRestaurant}
          target="_blank"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}

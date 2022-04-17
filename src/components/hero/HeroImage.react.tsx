import { StaticImage } from "gatsby-plugin-image";

export default function HeroImage() {
  return (
    <StaticImage
      className="absolute top-0 left-0 brightness-50 w-full pointer-events-none h-full"
      src="../../images/hero.jpg"
      alt="Pho hero image"
      placeholder="blurred"
      loading="eager"
      layout="fullWidth"
    />
  );
}

import { StaticImage } from "gatsby-plugin-image";

export default function HeroImage() {
  return (
    <StaticImage
      className="brightness-50 w-full h-full pointer-events-none"
      src="../../images/hero.jpg"
      alt="Pho hero image"
      placeholder="blurred"
      loading="eager"
      layout="fullWidth"
    />
  );
}

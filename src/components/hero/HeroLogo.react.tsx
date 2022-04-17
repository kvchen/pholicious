import { StaticImage } from "gatsby-plugin-image";

export default function Logo() {
  return (
    <StaticImage
      className="pointer-events-none"
      width={280}
      src="../../images/logo.png"
      alt="Pholicious logo"
      placeholder="none"
      loading="eager"
    />
  );
}

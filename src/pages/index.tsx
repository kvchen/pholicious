import "../css/index.css";
import config from "../../content/config.yaml";

import { useStaticQuery, graphql } from "gatsby";

import HeroSection from "../components/hero/HeroSection.react";
import LocationSection from "../components/location/LocationSection.react";
import FooterSection from "../components/footer/FooterSection.react";
import BannerSection from "../components/hero/BannerSection.react";

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <title>{data.site.siteMetadata.title}</title>
      {config?.banner?.message != null && <BannerSection message={config.banner.message} />}
      <HeroSection />
      <LocationSection />
      <FooterSection />
    </main>
  );
}

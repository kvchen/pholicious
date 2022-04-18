import "../css/index.css";

import HeroSection from "../components/hero/HeroSection.react";
import LocationSection from "../components/location/LocationSection.react";
import FooterSection from "../components/footer/FooterSection.react";
import { useStaticQuery, graphql } from "gatsby";

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
      <HeroSection />
      <LocationSection />
      <FooterSection />
    </main>
  );
}

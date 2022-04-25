import "../css/index.css";

import { useStaticQuery, graphql } from "gatsby";

import HeroSection from "../components/hero/HeroSection.react";
import LocationSection from "../components/location/LocationSection.react";
import FooterSection from "../components/footer/FooterSection.react";
import GallerySection from "../components/gallery/GallerySection.react";
import RemodelBannerSection from "../components/hero/RemodelBannerSection.react";

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
      <RemodelBannerSection />
      <HeroSection />
      <LocationSection />
      {/* <GallerySection /> */}
      <FooterSection />
    </main>
  );
}

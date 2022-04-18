import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pholicious Noodle Bar`,
    siteUrl: `https://www.photungcafe.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
  ],
  jsxRuntime: "automatic",
};

export default config;

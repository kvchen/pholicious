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
    // {
    //   resolve: "gatsby-plugin-google-fonts",
    //   options: {
    //     fonts: [
    //       `limelight`,
    //       `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
  ],
  jsxRuntime: "automatic",
};

export default config;

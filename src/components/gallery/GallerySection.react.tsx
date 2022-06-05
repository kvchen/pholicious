import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export default function GallerySection() {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "gallery" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const imageFiles = data.allFile.nodes;
  return (
    <section className="md:container mx-auto py-0 md:py-16 text-lg">
      <div className="grid grid-cols-3 gap-8 mx-auto">
        {imageFiles
          .map(getImage)
          .filter(Boolean)
          .map((image: IGatsbyImageData) => (
            <GatsbyImage className="rounded-lg" image={image} alt="testing" />
          ))}
      </div>
    </section>
  );
}

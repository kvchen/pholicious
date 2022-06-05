export default function GalleryImage() {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile {
        nodes {
          title
        }
      }
    }
  `);

  return (
    <section className="md:container mx-auto py-0 md:py-16 text-lg">
      <div>test</div>
    </section>
  );
}

import config from "../../../content/config.yaml";

export default function LocationSection() {
  return (
    <section className="md:container mx-auto py-0 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
      <iframe
        className="w-full border-0"
        src={config.googleMaps.embeddedMap}
        height="300"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col items-center justify-center gap-8 pb-12 md:pb-0">
        <p className="text-2xl text-center">
          <p className="text-4xl font-bold mb-2">Lake Forest</p>
          {config.business.address.map((line: string) => (
            <p>{line}</p>
          ))}
        </p>
        <a
          className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-4 px-8 transition-colors text-xl text-center"
          href={config.googleMaps.directions}
          target="_blank"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}

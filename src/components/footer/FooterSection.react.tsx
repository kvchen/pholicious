import config from "../../../content/config.yaml";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <section className="bg-red-500 text-white px-12 py-12 text-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-8">
          <p className="text-xl font-bold">Business Hours</p>
          <ul className="list-none space-y-1">
            {config.business.hours.map((hours: string) => (
              <li>{hours}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <p className="text-xl font-bold">Contact Us</p>
          <p className="space-y-1">
            {config.business.address.map((line: string) => (
              <p>{line}</p>
            ))}
            <p>{config.business.phoneNumber}</p>
          </p>
        </div>
        <div className="space-y-8">
          <p className="text-xl font-bold">Social Media</p>
          <a
            className="flex items-center gap-2"
            href={config.yelp}
            target="_blank"
          >
            <FontAwesomeIcon icon={faYelp} />
            Yelp
          </a>
        </div>
      </div>
    </section>
  );
}

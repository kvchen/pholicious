type Props = {
  message: string;
}

export default function BannerSection({ message }: Props) {
  return (
    <section className="bg-red-500 sticky py-4 px-4">
      <div className="container mx-auto text-lg text-white space-y-2">
        <p className="text-xl">Dear customer,</p>
        <p>
          {message}
        </p>
      </div>
    </section>
  );
}

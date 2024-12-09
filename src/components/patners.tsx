import Image from "next/image";

export function Partners() {
  return (
    <section className="my-16">
      <h2 className="mb-12 text-center text-3xl font-bold">We work with the best people</h2>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
        <div className="flex items-center justify-center">
          <Image
            src="/.menu-logo-1.png"
            alt="Partner 1"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/.menu-logo-2.png"
            alt="Partner 2"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/.menu-logo-3.png"
            alt="Partner 3"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/.menu-logo-4.png"
            alt="Partner 4"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/.menu-logo-5.png"
            alt="Partner 5"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/.menu-logo-6.png"
            alt="Partner 6"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

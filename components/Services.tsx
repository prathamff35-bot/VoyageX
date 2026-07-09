import { Plane, Hotel, Ship, Headphones } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Private Jets",
    description: "Fly in unmatched luxury with our premium private jet experiences.",
  },
  {
    icon: Hotel,
    title: "Luxury Hotels",
    description: "Stay at handpicked 5-star hotels and exclusive resorts worldwide.",
  },
  {
    icon: Ship,
    title: "Yacht Cruises",
    description: "Explore breathtaking coastlines aboard luxury yachts.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Our travel experts are always ready to assist you.",
  },
];

export default function Services() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest">
            Premium Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Why Choose VoyageX?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We create unforgettable luxury travel experiences with
            personalized services and world-class destinations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:bg-white/10"
            >

              <service.icon
                size={42}
                className="text-amber-400"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-white/70">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
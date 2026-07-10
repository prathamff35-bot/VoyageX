const testimonials = [
  {
    name: "Sophia Williams",
    country: "United Kingdom",
    review:
      "VoyageX planned the most incredible vacation I've ever had. Every detail was perfect.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "James Anderson",
    country: "Canada",
    review:
      "Luxury from start to finish. The hotels, flights, and experiences exceeded expectations.",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Emma Johnson",
    country: "Australia",
    review:
      "Professional service, beautiful destinations, and unforgettable memories. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=47",
  },
];

export default function Testimonials() {
  return (
    <section
  id="testimonials"
  className="bg-white py-24"
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-amber-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What Our Travelers Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Thousands of happy travelers trust VoyageX to create unforgettable
            luxury experiences around the world.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <p className="text-gray-500">{person.country}</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600">
                "{person.review}"
              </p>

              <div className="mt-6 text-xl text-amber-500">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
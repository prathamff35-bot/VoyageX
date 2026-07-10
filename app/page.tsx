import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Navbar from '@/components/Navbar';
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import DestinationCard from '@/components/DestinationCard';
export default function HomePage() {
  return (
    <>
      <Navbar />
     <Hero />
      <section className="bg-gray-100 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="mb-12 text-center text-5xl font-bold">
      Featured Destinations
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <DestinationCard
        title="Maldives"
        location="Indian Ocean"
        price="$2,499"
        image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900"
      />

      <DestinationCard
        title="Switzerland"
        location="Swiss Alps"
        price="$3,299"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900"
      />

      <DestinationCard
        title="Dubai"
        location="United Arab Emirates"
        price="$1,999"
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900"
      />

    </div>
  </div>
</section>



<Services />
<Testimonials />
<Contact />

    </>
  );
}

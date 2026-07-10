
'use client';

import { useState } from "react";
import DestinationModal from "./DestinationModal";
type DestinationCardProps = {
  title: string;
  location: string;
  price: string;
  image: string;
};

export default function DestinationCard({
  title,
  location,
  price,
  image,
}: DestinationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="space-y-2 p-6">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-gray-500">{location}</p>

        <div className="flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-amber-500">
            {price}
          </span>

          <button
  onClick={() => setIsOpen(true)}
  className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
>
  View Details
</button>
        </div>
      </div>
    </div>
<DestinationModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title={title}
  location={location}
  price={price}
  image={image}
/>
    </>
   
  );
}
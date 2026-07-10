'use client';

import { useEffect, useRef } from 'react';
import { X, MapPin, Calendar, Plane, Hotel, Car, Star, Clock } from 'lucide-react';

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  location: string;
  price: string;
  image: string;
}

export default function DestinationModal({
  isOpen,
  onClose,
  title,
  location,
  price,
  image,
}: DestinationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 shadow-2xl animate-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-all duration-300 hover:bg-black/70 hover:scale-110 hover:rotate-90"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden md:h-96">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-sm text-zinc-300">{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm text-white">4.9</span>
                <span className="text-sm text-zinc-400">(2,456 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">About This Destination</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Experience the ultimate luxury getaway at {title}, a premier destination known for its 
                  stunning landscapes, world-class amenities, and unforgettable experiences. 
                  Indulge in the finest accommodations, exquisite dining, and breathtaking views 
                  that will leave you in awe.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Whether you're seeking relaxation, adventure, or cultural immersion, {title} offers 
                  the perfect blend of luxury and authenticity. Our expert team ensures every detail 
                  is crafted to perfection for an unparalleled travel experience.
                </p>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">Included Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Clock, label: '7 Days / 6 Nights' },
                    { icon: Plane, label: 'Flights Included' },
                    { icon: Hotel, label: 'Luxury Hotel' },
                    { icon: Car, label: 'Airport Pickup' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-zinc-800/30 p-3 transition-all duration-300 hover:border-amber-400/30 hover:bg-zinc-800/50"
                      >
                        <Icon className="h-4 w-4 text-amber-400" />
                        <span className="text-sm text-zinc-300">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking */}
            <div className="space-y-6">
              <div className="rounded-xl border border-zinc-800/50 bg-zinc-800/30 p-6">
                <div className="mb-4 flex items-baseline justify-between border-b border-zinc-800/50 pb-4">
                  <span className="text-sm text-zinc-400">From</span>
                  <span className="text-2xl font-bold text-amber-400">{price}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Duration</span>
                    <span className="text-sm text-white">7 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Group Size</span>
                    <span className="text-sm text-white">Up to 8 people</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Language</span>
                    <span className="text-sm text-white">English</span>
                  </div>
                </div>

                <button
  onClick={() => {
    onClose();

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-6 w-full rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 hover:scale-[1.02] active:scale-[0.98]"
>
                  Book This Trip
                </button>

                <p className="mt-3 text-center text-xs text-zinc-500">
                  ✦ Free cancellation up to 7 days before
                </p>
              </div>

              {/* Quick Info */}
              <div className="rounded-xl border border-zinc-800/50 bg-zinc-800/30 p-4">
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-white">4.9/5</span>
                  <span className="text-xs text-zinc-500">• 2,456 reviews</span>
                </div>
                <p className="mt-1 text-center text-xs text-zinc-500">
                  ⭐ "Absolutely incredible experience!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
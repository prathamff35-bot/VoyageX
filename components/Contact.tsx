'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Plane, 
  Compass,
  Send,
  User,
  MessageSquare,
  Calendar,
  Users,
  DollarSign,
  CheckCircle
} from 'lucide-react';

interface BookingFormData {
  fullName: string;
  email: string;
  destination: string;
  travelDate: string;
  travelers: string;
  budget: string;
  specialRequests: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const destinations = [
    'Select a destination',
    'Maldives',
    'Switzerland',
    'Dubai',
    'Bali',
    'Japan',
    'Paris',
  ];

  const travelerOptions = [
    'Select travelers',
    '1 Traveler',
    '2 Travelers',
    '3 Travelers',
    '4 Travelers',
    '5+ Travelers',
  ];

  const budgetOptions = [
    'Select budget range',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000 - $50,000',
    '$50,000+',
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.destination || formData.destination === 'Select a destination') {
      newErrors.destination = 'Please select a destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required';
    }

    if (!formData.travelers || formData.travelers === 'Select travelers') {
      newErrors.travelers = 'Please select number of travelers';
    }

    if (!formData.budget || formData.budget === 'Select budget range') {
      newErrors.budget = 'Please select a budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        destination: '',
        travelDate: '',
        travelers: '',
        budget: '',
        specialRequests: '',
      });
      
      // Reset success message after 6 seconds
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-amber-400">
              Plan Your Journey
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Book Your <span className="text-amber-400">Luxury</span> Escape
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Fill in your details below and our travel experts will craft your perfect getaway.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-10">
              <h3 className="mb-6 text-xl font-semibold text-white flex items-center gap-2">
                <Plane className="h-5 w-5 text-amber-400" />
                Booking Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-zinc-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-zinc-700'} bg-zinc-800/50 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-zinc-700'} bg-zinc-800/50 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="mb-2 block text-sm font-medium text-zinc-300">
                    Destination *
                  </label>
                  <div className="relative">
                    <Compass className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full appearance-none rounded-lg border ${errors.destination ? 'border-red-500' : 'border-zinc-700'} bg-zinc-800/50 py-3 pl-11 pr-10 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200`}
                    >
                      {destinations.map((dest) => (
                        <option key={dest} value={dest} className="bg-zinc-900">
                          {dest}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.destination && (
                    <p className="mt-1 text-sm text-red-400">{errors.destination}</p>
                  )}
                </div>

                {/* Travel Date */}
                <div>
                  <label htmlFor="travelDate" className="mb-2 block text-sm font-medium text-zinc-300">
                    Travel Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full rounded-lg border ${errors.travelDate ? 'border-red-500' : 'border-zinc-700'} bg-zinc-800/50 py-3 pl-11 pr-4 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200`}
                    />
                  </div>
                  {errors.travelDate && (
                    <p className="mt-1 text-sm text-red-400">{errors.travelDate}</p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Number of Travelers */}
                  <div>
                    <label htmlFor="travelers" className="mb-2 block text-sm font-medium text-zinc-300">
                      Travelers *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className={`w-full appearance-none rounded-lg border ${errors.travelers ? 'border-red-500' : 'border-zinc-700'} bg-zinc-800/50 py-3 pl-11 pr-10 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200`}
                      >
                        {travelerOptions.map((option) => (
                          <option key={option} value={option} className="bg-zinc-900">
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.travelers && (
                      <p className="mt-1 text-sm text-red-400">{errors.travelers}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">
                      Budget Range *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full appearance-none rounded-lg border ${errors.budget ? 'border-red-500' : 'border-zinc-700'} bg-zinc-800/50 py-3 pl-11 pr-10 text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200`}
                      >
                        {budgetOptions.map((option) => (
                          <option key={option} value={option} className="bg-zinc-900">
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="mb-2 block text-sm font-medium text-zinc-300">
                    Special Requests
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 resize-none"
                      placeholder="Any special requirements, dietary needs, or preferences..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Trip
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-start gap-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 animate-in fade-in slide-in-from-top-4">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-emerald-400">
                        ✅ Thank you! Your booking request has been received. We'll contact you shortly.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information - Right Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-8">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm shadow-xl">
                <h3 className="mb-6 text-xl font-semibold text-white flex items-center gap-2">
                  <Phone className="h-5 w-5 text-amber-400" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Visit Us</p>
                      <p className="text-sm text-zinc-400">
                        123 Luxury Avenue<br />
                        Beverly Hills, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email Us</p>
                      <a 
                        href="mailto:hello@voyagex.com" 
                        className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                      >
                        hello@voyagex.com
                      </a>
                      <br />
                      <a 
                        href="mailto:support@voyagex.com" 
                        className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                      >
                        support@voyagex.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Call Us</p>
                      <a 
                        href="tel:+18005551234" 
                        className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                      >
                        +1 (800) 555-1234
                      </a>
                      <br />
                      <span className="text-sm text-zinc-500">
                        24/7 Concierge Service
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Working Hours</p>
                      <p className="text-sm text-zinc-400">
                        Mon - Fri: 9:00 AM - 9:00 PM
                      </p>
                      <p className="text-sm text-zinc-400">
                        Sat - Sun: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Travel Illustration */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3 text-amber-400 transition-colors hover:bg-amber-500/20">
                      <Plane className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-zinc-400">Private Jets</span>
                  </div>
                  <div className="h-12 w-px bg-zinc-800" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3 text-amber-400 transition-colors hover:bg-amber-500/20">
                      <Compass className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-zinc-400">Bespoke Tours</span>
                  </div>
                  <div className="h-12 w-px bg-zinc-800" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3 text-amber-400 transition-colors hover:bg-amber-500/20">
                      <Clock className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-zinc-400">24/7 Support</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-zinc-500">
                  ✦ Creating unforgettable journeys since 2010
                </p>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3 backdrop-blur-sm">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-zinc-400">
                  Rated 4.9/5 by 2,500+ travelers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
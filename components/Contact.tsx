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
  MessageSquare
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const destinations = [
    'Select a destination',
    'Paris, France',
    'Maldives',
    'Bali, Indonesia',
    'Santorini, Greece',
    'Dubai, UAE',
    'Maui, Hawaii',
    'Amalfi Coast, Italy',
    'Kyoto, Japan',
    'Bora Bora',
    'Cape Town, South Africa',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-sm font-medium uppercase tracking-widest text-amber-500">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Plan Your <span className="text-amber-400">Luxury</span> Escape
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Let our travel experts craft your perfect journey. Reach out and let the adventure begin.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 md:p-10">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name Input */}
                  <div className="relative">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white/50 py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white/50 py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone Input */}
                  <div className="relative">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white/50 py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Destination Select */}
                  <div className="relative">
                    <label htmlFor="destination" className="mb-2 block text-sm font-medium text-gray-700">
                      Dream Destination
                    </label>
                    <div className="relative">
                      <Compass className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white/50 py-3 pl-11 pr-10 text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                      >
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 bg-white/50 py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your dream vacation..."
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
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      '✓ Message Sent!'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </button>

                {isSubmitted && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 animate-in fade-in">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thank you! Our team will reach out within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white p-8 border border-amber-100 shadow-lg">
                <h3 className="mb-6 text-xl font-semibold text-gray-900">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-amber-100 p-2.5 text-amber-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Visit Us</p>
                      <p className="text-sm text-gray-600">
                        123 Luxury Avenue<br />
                        Beverly Hills, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-amber-100 p-2.5 text-amber-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <a 
                        href="mailto:hello@voyagex.com" 
                        className="text-sm text-gray-600 transition-colors hover:text-amber-500"
                      >
                        hello@voyagex.com
                      </a>
                      <br />
                      <a 
                        href="mailto:support@voyagex.com" 
                        className="text-sm text-gray-600 transition-colors hover:text-amber-500"
                      >
                        support@voyagex.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-amber-100 p-2.5 text-amber-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <a 
                        href="tel:+18005551234" 
                        className="text-sm text-gray-600 transition-colors hover:text-amber-500"
                      >
                        +1 (800) 555-1234
                      </a>
                      <br />
                      <span className="text-sm text-gray-500">
                        24/7 Concierge Service
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-amber-100 p-2.5 text-amber-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Working Hours</p>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 9:00 AM - 9:00 PM
                      </p>
                      <p className="text-sm text-gray-600">
                        Saturday - Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Travel Illustration */}
              <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/50 to-white p-6 shadow-md">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                      <Plane className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Private Jets</span>
                  </div>
                  <div className="h-12 w-px bg-amber-200" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                      <Compass className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Bespoke Tours</span>
                  </div>
                  <div className="h-12 w-px bg-amber-200" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">24/7 Support</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-gray-500">
                  ✦ Creating unforgettable journeys since 2010
                </p>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-3 border border-gray-200">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600">
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
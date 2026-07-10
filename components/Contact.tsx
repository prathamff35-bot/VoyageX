'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Plane, 
  Compass,
  User,
  MessageSquare,
  Calendar,
  Users,
  DollarSign,
  CheckCircle,
  Send,
  Star
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
    { value: '', label: 'Select your dream destination' },
    { value: 'maldives', label: '🏝️ Maldives' },
    { value: 'switzerland', label: '⛰️ Switzerland' },
    { value: 'dubai', label: '🏙️ Dubai' },
    { value: 'bali', label: '🌺 Bali' },
    { value: 'paris', label: '🗼 Paris' },
    { value: 'japan', label: '🗾 Japan' },
  ];

  const travelerOptions = [
    { value: '', label: 'Select number of travelers' },
    { value: '1', label: '1 Traveler' },
    { value: '2', label: '2 Travelers' },
    { value: '3', label: '3 Travelers' },
    { value: '4', label: '4 Travelers' },
    { value: '5', label: '5 Travelers' },
    { value: '6', label: '6+ Travelers' },
  ];

  const budgetOptions = [
    { value: '', label: 'Select your budget range' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-20000', label: '$10,000 - $20,000' },
    { value: '20000-50000', label: '$20,000 - $50,000' },
    { value: '50000', label: '$50,000+' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required';
    } else {
      const selectedDate = new Date(formData.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.travelDate = 'Travel date cannot be in the past';
      }
    }

    if (!formData.travelers) {
      newErrors.travelers = 'Please select number of travelers';
    }

    if (!formData.budget) {
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
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.focus();
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
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
    <section id="booking" className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-amber-400">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              Luxury Booking
              <Star className="h-3.5 w-3.5 fill-amber-400" />
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Book Your{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Dream Escape
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-50 blur-sm" />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Let our travel experts craft your perfect getaway. Fill in the details below and begin your journey.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50 sm:p-8 md:p-10">
              {/* Form Header */}
              <div className="mb-8 flex items-center gap-3 border-b border-zinc-800/50 pb-4">
                <div className="rounded-full bg-amber-500/10 p-2">
                  <Plane className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Booking Details
                </h3>
                <span className="ml-auto text-xs text-zinc-500">* Required fields</span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-zinc-300">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative group">
                    <User className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-200 ${errors.fullName ? 'text-red-400' : 'text-zinc-500 group-hover:text-amber-400'}`} />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border-2 ${errors.fullName ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700/50 focus:border-amber-400'} bg-zinc-800/30 py-3.5 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-2 flex items-center gap-1 text-sm text-red-400 animate-in slide-in-from-top-2">
                      <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative group">
                    <Mail className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-200 ${errors.email ? 'text-red-400' : 'text-zinc-500 group-hover:text-amber-400'}`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border-2 ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700/50 focus:border-amber-400'} bg-zinc-800/30 py-3.5 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 flex items-center gap-1 text-sm text-red-400 animate-in slide-in-from-top-2">
                      <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="mb-2 block text-sm font-medium text-zinc-300">
                    Destination <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative group">
                    <Compass className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-200 ${errors.destination ? 'text-red-400' : 'text-zinc-500 group-hover:text-amber-400'}`} />
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full appearance-none rounded-lg border-2 ${errors.destination ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700/50 focus:border-amber-400'} bg-zinc-800/30 py-3.5 pl-11 pr-10 text-white outline-none transition-all duration-200 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50`}
                    >
                      {destinations.map((dest) => (
                        <option key={dest.value} value={dest.value} className="bg-zinc-900">
                          {dest.label}
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
                    <p className="mt-2 flex items-center gap-1 text-sm text-red-400 animate-in slide-in-from-top-2">
                      <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
                      {errors.destination}
                    </p>
                  )}
                </div>

                {/* Travel Date */}
                <div>
                  <label htmlFor="travelDate" className="mb-2 block text-sm font-medium text-zinc-300">
                    Travel Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative group">
                    <Calendar className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-200 ${errors.travelDate ? 'text-red-400' : 'text-zinc-500 group-hover:text-amber-400'}`} />
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full rounded-lg border-2 ${errors.travelDate ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700/50 focus:border-amber-400'} bg-zinc-800/30 py-3.5 pl-11 pr-4 text-white outline-none transition-all duration-200 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[0.7] [&::-webkit-calendar-picker-indicator]:hover:invert-[0.9]`}
                    />
                  </div>
                  {errors.travelDate && (
                    <p className="mt-2 flex items-center gap-1 text-sm text-red-400 animate-in slide-in-from-top-2">
                      <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
                      {errors.travelDate}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Number of Travelers */}
                  <div>
                    <label htmlFor="travelers" className="mb-2 block text-sm font-medium text-zinc-300">
                      Travelers <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative group">
                      <Users className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-200 ${errors.travelers ? 'text-red-400' : 'text-zinc-500 group-hover:text-amber-400'}`} />
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className={`w-full appearance-none rounded-lg border-2 ${errors.travelers ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700/50 focus:border-amber-400'} bg-zinc-800/30 py-3.5 pl-11 pr-10 text-white outline-none transition-all duration-200 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50`}
                      >
                        {travelerOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-zinc-900">
                            {option.label}
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
                      <p className="mt-2 flex items-center gap-1 text-sm text-red-400 animate-in slide-in-from-top-2">
                        <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
                        {errors.travelers}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">
                      Budget Range <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative group">
                      <DollarSign className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-200 ${errors.budget ? 'text-red-400' : 'text-zinc-500 group-hover:text-amber-400'}`} />
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full appearance-none rounded-lg border-2 ${errors.budget ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-700/50 focus:border-amber-400'} bg-zinc-800/30 py-3.5 pl-11 pr-10 text-white outline-none transition-all duration-200 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50`}
                      >
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-zinc-900">
                            {option.label}
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
                      <p className="mt-2 flex items-center gap-1 text-sm text-red-400 animate-in slide-in-from-top-2">
                        <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
                        {errors.budget}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="mb-2 block text-sm font-medium text-zinc-300">
                    Special Requests
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500 transition-colors duration-200 group-hover:text-amber-400" />
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-lg border-2 border-zinc-700/50 bg-zinc-800/30 py-3.5 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-amber-400 focus:shadow-lg focus:shadow-amber-400/5 hover:border-zinc-600/50 resize-none"
                      placeholder="Any special requirements, dietary needs, or preferences..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Booking...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Booked Successfully!
                      </>
                    ) : (
                      <>
                        Book My Trip
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                        ✅ Thank you! Your booking request has been received. We'll contact you within 24 hours.
                      </p>
                      <p className="mt-1 text-xs text-emerald-400/70">
                        A confirmation email has been sent to your inbox.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information - Right Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-zinc-700/50">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                  <Phone className="h-5 w-5 text-amber-400" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:scale-110">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Visit Us</p>
                      <p className="text-sm text-zinc-400">
                        123 Luxury Avenue<br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:scale-110">
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
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:scale-110">
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
                      <span className="text-xs text-zinc-500">
                        24/7 Concierge Service
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 rounded-full bg-amber-500/10 p-2.5 text-amber-400 transition-all duration-300 group-hover:bg-amber-500/20 group-hover:scale-110">
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
              <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3 text-amber-400 transition-all duration-300 hover:bg-amber-500/20 hover:scale-110">
                      <Plane className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-zinc-400">Private Jets</span>
                  </div>
                  <div className="h-12 w-px bg-zinc-800" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3 text-amber-400 transition-all duration-300 hover:bg-amber-500/20 hover:scale-110">
                      <Compass className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-zinc-400">Bespoke Tours</span>
                  </div>
                  <div className="h-12 w-px bg-zinc-800" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3 text-amber-400 transition-all duration-300 hover:bg-amber-500/20 hover:scale-110">
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
              <div className="flex items-center justify-center gap-2 rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-3 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-zinc-300">
                  4.9/5
                </span>
                <span className="text-sm text-zinc-500">
                  (2,500+ reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
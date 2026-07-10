 'use client';
 
 import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
 <section
  id="home"
  className="relative flex min-h-screen items-center justify-center overflow-hidden pt-8"
>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              ✦ Luxury Travel Since 2010
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Explore
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                The World
              </span>
              <br />
              In Style
            </h1>
            
            {/* Subtitle */}
            <p className="max-w-xl text-base text-white/80 sm:text-lg md:text-xl">
              Discover unforgettable destinations with premium travel experiences 
              designed for modern explorers.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
  size="lg"
  onClick={() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="bg-amber-500 text-black hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
>
  Start Your Journey
</Button>
  <Button
  size="lg"
  onClick={() => {
    document.getElementById("destinations")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="border border-white bg-transparent text-white hover:bg-white/10"
>
  View Tours
</Button>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4">
              {[
                { value: '120+', label: 'Destinations' },
                { value: '15+', label: 'Years Experience' },
                { value: '2500+', label: 'Happy Travelers' },
                { value: '98%', label: 'Customer Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-bold text-amber-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <div className="h-10 w-5 rounded-full border-2 border-white/20 p-1">
              <div className="mx-auto h-2 w-1.5 animate-pulse rounded-full bg-amber-400/60" />
            </div>
          </div>
        </div>
      </section>
       );
}
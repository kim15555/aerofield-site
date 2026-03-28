"use client";

import HeroBanner from "@/components/HeroBanner";
import PropertyCard from "@/components/PropertyCard";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [properties, setProperties] = useState<any[]>([]);

  // Fetch properties from Supabase
  useEffect(() => {
    async function fetchProperties() {
      const { data, error } = await supabase.from("properties").select("*");
      if (!error) setProperties(data || []);
    }
    fetchProperties();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        <img
          src="https://via.placeholder.com/1600"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold tracking-wide mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg mb-6">Luxury properties across the UK</p>
          <a
            href="/properties"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3"
          >
            View Properties
          </a>
        </div>
      </section>

      {/* PROPERTY GRID */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
import PropertyCard from "@/components/PropertyCard";
import { supabase } from "@/lib/supabaseClient";

export default async function Properties() {
  const { data: properties } = await supabase
    .from("properties")
    .select("*");

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        All Properties
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
import { supabase } from "../../../lib/supabase";

export default async function PropertyPage({ params }: any) {
  const { id } = await params; // ✅ FIX for Next.js 16

  const { data: property } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();

  if (!property) {
    return <p className="p-10">Property not found</p>;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {property.images?.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            className="w-full h-64 object-cover rounded"
          />
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-blue-700 text-2xl font-semibold mb-6">
        £{property.price}
      </p>

      <p className="text-gray-700">{property.description}</p>
    </section>
  );
}
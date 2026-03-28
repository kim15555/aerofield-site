"use client";

import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-105">

      {/* Property Image */}
      <img
        src={property.images?.[0] || "https://via.placeholder.com/400"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      {/* Property Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-700 mb-1">{property.location}</p>
        <p className="text-blue-600 font-semibold mb-3 text-lg">£{property.price}</p>

        {/* VIEW DETAILS BUTTON */}
        <Link href={`/property/${property.id}`}>
          <span className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition">
              View Details
            </button>
          </span>
        </Link>
      </div>

    </div>
  );
}
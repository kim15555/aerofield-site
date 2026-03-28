export default function PropertyCard({ property }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img
          src={property.images?.[0] || "https://via.placeholder.com/400"}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{property.title}</h2>
          <p className="text-gray-700 mb-1">{property.location}</p>
          <p className="text-blue-700 font-semibold">£{property.price}</p>
        </div>
      </div>
    );
  }
export default function HeroBanner() {
    return (
      <section className="relative h-[80vh] w-full">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Luxury Home"
          className="absolute w-full h-full object-cover"
        />
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            Aerofield Homes
          </h1>
          <p className="text-xl mb-6">
            Luxury Homes Across the UK
          </p>
  
          <a
            href="/properties"
            className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            View Properties
          </a>
        </div>
      </section>
    );
  }
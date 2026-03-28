export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">
          Aerofield Homes
        </h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-700">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700">Contact</a>
        </div>
      </nav>
    );
  }
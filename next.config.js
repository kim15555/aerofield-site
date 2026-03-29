import Image from 'next/image';

const propertyImages = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
];

export default function PropertyGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {propertyImages.map((url, index) => (
        <Image
          key={index}
          src={url}
          width={600} // adjust to your design
          height={400} // adjust to your design
          alt={`Property image ${index + 1}`}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}
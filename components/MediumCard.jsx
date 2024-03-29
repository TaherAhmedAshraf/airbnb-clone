import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="hover:scale-105 transition duration-300">
      <div className="relative h-80 w-80 rounded-xl">
        <Image src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;

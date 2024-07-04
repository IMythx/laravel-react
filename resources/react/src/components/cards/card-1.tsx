import { Link } from "react-router-dom";

const ProductCard = ({
  name,
  src,
  price,
  category,
}: {
  name: string;
  src: string;
  category: string;
  price: number;
}) => {
  return (
    <Link
      to={"/product/1"}
      className="block p-4 w-full border rounded-lg hover:shadow-lg cursor-pointer transition-all duration-300 group"
    >
      <div className="relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block group-hover:scale-105 transition-all duration-300"
          src={src || "https://dummyimage.com/420x260"}
          width={420}
          height={260}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

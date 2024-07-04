import ProductCard from "@/components/cards/card-1";

const ProductsGrid = ({ columns, rows }: { columns: number; rows: number }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1rem",
        paddingInline: "1rem",
      }}
    >
      {Array.from({ length: columns * rows }, (k, v) => v).map((k) => (
        <ProductCard
          key={k}
          name="Product Name"
          src="https://via.placeholder.com/150"
          price={100}
          category="Product Category"
        />
      ))}
    </div>
  );
};

export default ProductsGrid;

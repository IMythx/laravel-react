import { ComponentConfig } from "@measured/puck";
import ProductsGridComponent from "@/components/store/productsGrid";

export type ProductsGridProps = {
  columns: number;
  rows: number;
};

export const ProductsGrid: ComponentConfig<ProductsGridProps> = {
  label: "Products Grid",
  fields: {
    columns: { type: "number" },
    rows: { type: "number" },
  },
  render: ({ ...props }) => <ProductsGridComponent {...props} />,
  defaultProps: {
    columns: 4,
    rows: 2,
  },
};

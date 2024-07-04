import { ComponentConfig } from "@measured/puck";
import ProductCard from "../../../components/cards/card-1";

export type CardProps = {
  src: string;
  name: string;
  category: string;
  price: number;
};
export const Card: ComponentConfig<CardProps> = {
  fields: {
    name: { type: "text" },
    src: {
      placeholder: "Source",
      mapProp: (item) => item.url,
      showSearch: true,
      type: "external",
      fetchList: async ({ query }) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?q=${query}`,
        );
        const data = await res.json();

        return data.map((photo: { thumbnailUrl: string }) => ({
          url: photo.thumbnailUrl,
        }));
      },
    },
    price: { type: "number" },
    category: {
      placeholder: "Category",
      mapProp: (item) => item.name,
      showSearch: true,
      type: "external",
      fetchList: async ({ query }) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?q=${query}`,
        );
        const data = await res.json();
        return data.map((user: { name: string }) => ({ name: user.name }));
      },
    },
  },

  defaultProps: {
    name: "Product Name",
    src: "https://via.placeholder.com/150",
    price: 100,
    category: "Product Category",
  },
  render: ({ ...props }) => <ProductCard {...props} />,
};

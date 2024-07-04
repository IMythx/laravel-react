import ProductInfoSection from "@/components/productPage";
import { ComponentConfig } from "@measured/puck";

export type InfoSectionProps = {};

export const InfoSection: ComponentConfig<InfoSectionProps> = {
  render: () => <ProductInfoSection />,
};

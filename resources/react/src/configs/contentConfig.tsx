import { DefaultRootProps, Render, type Config } from "@measured/puck";
import { LayoutConfig, LayoutConfigProps } from "./layoutConfig";
import { getLayoutData } from "../lib/getLayoutData";
import { Columns, ColumnsProps } from "./blocks/columns/index";
import { CardProps, Card } from "./blocks/cards";
import { VerticalSpaceProps, VerticalSpace } from "./blocks/verticalSpace";
import { InfoSectionProps, InfoSection } from "./blocks/product/infoSection";
import { HeadingProps, Heading } from "./blocks/heading";
import { TextProps, Text } from "./blocks/text";
import { ProductsGridProps, ProductsGrid } from "./blocks/product/grid";

type Props = {
  Card: CardProps;
  Columns: ColumnsProps;
  "Vertical space": VerticalSpaceProps;
  "Product info section": InfoSectionProps;
  Heading: HeadingProps;
  Text: TextProps;
  "Products grid": ProductsGridProps;
};

type RootProps = {
  children: React.ReactNode;
} & DefaultRootProps;

export type UserConfig = Config<
  Props,
  RootProps,
  "Layout" | "Cards" | "Product" | "Typography"
>;

export const contentConfig = ({
  activeLayout = 0,
}: {
  activeLayout?: number;
}): UserConfig => ({
  categories: {
    Layout: {
      components: ["Columns", "Vertical space", "Products grid"],
    },
    Cards: {
      components: ["Card"],
      defaultExpanded: false,
    },
    Product: {
      components: ["Product info section"],
      defaultExpanded: false,
    },
    Typography: {
      components: ["Heading", "Text"],
      defaultExpanded: false,
    },
  },
  components: {
    Columns,
    Card,
    "Vertical space": VerticalSpace,
    "Product info section": InfoSection,
    Heading,
    Text,
    "Products grid": ProductsGrid,
  },
  root: {
    render: ({ children }) => {
      return (
        <>
          {/* @ts-expect-error-next-line */}
          <Render<LayoutConfigProps>
            config={LayoutConfig()}
            data={getLayoutData("header", activeLayout)}
          />
          {children}
          {/* @ts-expect-error-next-line */}
          <Render<LayoutConfigProps>
            config={LayoutConfig()}
            data={getLayoutData("footer", activeLayout)}
          />
        </>
      );
    },
  },
});

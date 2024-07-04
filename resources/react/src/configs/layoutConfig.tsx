import { Config, DefaultRootProps } from "@measured/puck";
import FooterOne from "../components/footers/footer-1";
import HeaderOne from "../components/headers/header-1";
import { useLocation } from "react-router-dom";
import FooterTwo from "@/components/footers/footer-2";
import Headertwo from "@/components/headers/header-2";

type Props = {
  "header-1": {
    iconSrc: string;
    title: string;
    navItems: { title: string; redirectTo: string }[];
    buttonContent: string;
  };
  "header-2": {
    iconSrc: string;
    title: string;
    navItems: { title: string; redirectTo: string }[];
    buttonContent: string;
  };
  "footer-1": {
    iconSrc: string;
    title: string;
  };
  "footer-2": {
    iconSrc: string;
    title: string;
  };
};

export type LayoutConfigProps = Config<
  Props,
  DefaultRootProps,
  "Headers" | "Footers"
>;

export const LayoutConfig = (): LayoutConfigProps => {
  const { pathname } = useLocation();
  return {
    categories: {
      Headers: {
        components: ["header-1", "header-2"],
        defaultExpanded: true,
      },
      Footers: {
        components: ["footer-1", "footer-2"],
        defaultExpanded: false,
      },
    },
    components: {
      "header-1": {
        fields: {
          iconSrc: { type: "text" },
          title: { type: "text" },
          navItems: {
            type: "array",
            arrayFields: {
              title: { type: "text" },
              redirectTo: {
                type: "text",
                label: "Redirect to",
              },
            },
          },
          buttonContent: { type: "text" },
        },
        defaultProps: {
          iconSrc: "https://via.placeholder.com/150",
          title: "Tailblocks",
          navItems: [
            { title: "First Link", redirectTo: "#" },
            { title: "Second Link", redirectTo: "#" },
            { title: "Third Link", redirectTo: "#" },
            { title: "Fourth Link", redirectTo: "#" },
          ],
          buttonContent: "Button",
        },
        render: ({ ...props }) => (
          <div>
            <HeaderOne {...props} />
            {pathname === "/add-layout" && (
              <div className="bg-white flex items-center justify-center py-40 border-t">
                <p className="text-4xl">CONTENT WILL BE HERE</p>
              </div>
            )}
          </div>
        ),
      },
      "header-2": {
        fields: {
          iconSrc: { type: "text" },
          title: { type: "text" },
          navItems: {
            type: "array",
            arrayFields: {
              title: { type: "text" },
              redirectTo: {
                type: "text",
                label: "Redirect to",
              },
            },
          },
          buttonContent: { type: "text" },
        },
        defaultProps: {
          iconSrc: "https://via.placeholder.com/150",
          title: "Tailblocks",
          navItems: [
            { title: "First Link", redirectTo: "#" },
            { title: "Second Link", redirectTo: "#" },
            { title: "Third Link", redirectTo: "#" },
            { title: "Fourth Link", redirectTo: "#" },
          ],
          buttonContent: "Button",
        },
        render: ({ ...props }) => (
          <div>
            <Headertwo {...props} />
            {pathname === "/add-layout" && (
              <div className="bg-white flex items-center justify-center py-40 border-t">
                <p className="text-4xl">CONTENT WILL BE HERE</p>
              </div>
            )}
          </div>
        ),
      },
      "footer-1": {
        fields: {
          iconSrc: { type: "text" },
          title: { type: "text" },
        },
        defaultProps: {
          iconSrc: "https://via.placeholder.com/150",
          title: "Tailblocks",
        },
        render: ({ ...props }) => <FooterOne {...props} />,
      },
      "footer-2": {
        fields: {
          iconSrc: { type: "text" },
          title: { type: "text" },
        },
        defaultProps: {
          iconSrc: "https://via.placeholder.com/150",
          title: "Tailblocks",
        },
        render: ({ ...props }) => <FooterTwo {...props} />,
      },
    },
  };
};

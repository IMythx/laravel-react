import { ComponentConfig } from "@measured/puck";

export type HeadingProps = {
  align: "left" | "center" | "right";
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size: "48px" | "36px" | "28px" | "24px" | "21px" | "18px" | "16";
  padding?: string;
};

const sizeOptions = [
  { value: "48px", label: "48" },
  { value: "36px", label: "36" },
  { value: "28px", label: "28" },
  { value: "24px", label: "24" },
  { value: "21px", label: "21" },
  { value: "18px", label: "18" },
  { value: "16px", label: "16" },
];

const levelOptions = [
  { label: "", value: "" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];

export const Heading: ComponentConfig<HeadingProps> = {
  fields: {
    text: { type: "text" },
    size: {
      type: "select",
      options: sizeOptions,
    },
    level: {
      type: "select",
      options: levelOptions,
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    padding: { type: "text" },
  },
  defaultProps: {
    align: "left",
    text: "Heading",
    padding: "24px",
    size: "24px",
    level: 1,
  },
  render: ({ align, text, size, level, padding }) => {
    const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return (
      <Tag
        style={{
          paddingTop: padding,
          paddingBottom: padding,
          fontSize: size,
        }}
      >
        <span
          className="px-4 block w-full font-bold"
          style={{
            textAlign: align,
          }}
        >
          {text}
        </span>
      </Tag>
    );
  },
};

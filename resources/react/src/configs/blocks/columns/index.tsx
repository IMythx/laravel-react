import { ComponentConfig, DropZone } from "@measured/puck";

export type ColumnsProps = {
  distribution: "auto" | "manual";
  columns: { span?: number }[];
};
export const Columns: ComponentConfig<ColumnsProps> = {
  resolveFields: (data) => ({
    distribution: {
      type: "radio",
      options: [
        {
          value: "auto",
          label: "Auto",
        },
        {
          value: "manual",
          label: "Manual",
        },
      ],
    },
    columns: {
      type: "array",
      arrayFields:
        data.props.distribution === "auto"
          ? {}
          : {
              span: { type: "number" },
            },
    },
  }),
  defaultProps: {
    distribution: "auto",
    columns: [{}, {}, {}],
  },
  render: ({ columns, distribution }) => {
    return (
      <div
        className="grid px-4"
        style={{
          gridTemplateColumns:
            distribution === "manual"
              ? `repeat(12, 1fr)`
              : `repeat(${columns.length}, 1fr)`,
          gap: "1rem",
        }}
      >
        {columns.map((column, i) => (
          <div
            style={{
              gridColumn:
                column.span && distribution === "manual"
                  ? `span ${column.span}`
                  : "auto",
            }}
          >
            <DropZone key={i} zone={`column-${i}`} />
          </div>
        ))}
      </div>
    );
  },
};

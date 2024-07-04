import { Data, Puck } from "@measured/puck";
import { LayoutConfig, LayoutConfigProps } from "../../configs/layoutConfig";
import { useNavigate } from "react-router-dom";
import { OverridesPlugin } from "../../plugin";

const LayoutEditor = () => {
  const navigate = useNavigate();

  const saveLAyoutData = (data: Data<LayoutConfigProps>) => {
    const headerData = JSON.parse(
      localStorage.getItem("layout-header") || "[]",
    );

    const footerData = JSON.parse(
      localStorage.getItem("layout-footer") || "[]",
    );

    headerData?.push({
      ...data,
      content: data.content.filter((content) =>
        content.type.includes("header"),
      ),
    });

    footerData?.push({
      ...data,
      content: data.content.filter((content) =>
        content.type.includes("footer"),
      ),
    });

    localStorage.setItem("layout-header", JSON.stringify(headerData));

    localStorage.setItem("layout-footer", JSON.stringify(footerData));

    navigate("/");
  };
  return (
    // @ts-expect-error-next-line
    <Puck<LayoutConfigProps>
      config={LayoutConfig()}
      // data={getLayoutData("layout", 0)}
      data={{}}
      onPublish={saveLAyoutData}
      plugins={[OverridesPlugin({})]}
      headerTitle="Add new layout"
      headerPath=""
    />
  );
};

export default LayoutEditor;

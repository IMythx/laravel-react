export const getLayoutData = (
  type: "layout" | "header" | "footer" = "layout",
  activeLayout: number = 0,
) => {
  const headerData =
    JSON.parse(localStorage.getItem("layout-header") || "[]")?.[activeLayout] ||
    {};

  const footerData =
    JSON.parse(localStorage.getItem("layout-footer") || "[]")?.[activeLayout] ||
    {};

  if (type === "header") return headerData;

  if (type === "footer") return footerData;

  const layoutData = {
    ...headerData,
    content: headerData?.content?.concat(footerData.content),
  };
  return headerData?.content ? layoutData : {};
};

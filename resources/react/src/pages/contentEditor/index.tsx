import { contentConfig } from "@/configs/contentConfig";
import getCurrentPagePathInEditor from "@/lib/getCurrentPagePAthInEditor";
import { OverridesPlugin } from "@/plugin";
import { Puck, Data } from "@measured/puck";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContentEditor = () => {
  const navigate = useNavigate();

  const contentData = JSON.parse(localStorage.getItem("content") || "{}");

  const { pathname } = useLocation();

  const currentPage = getCurrentPagePathInEditor(pathname);

  const [activeLayout, setActiveLayout] = useState<number>(0);

  const onPublish = (data: Data) => {
    contentData[`${currentPage}`] = data;
    localStorage.setItem("content", JSON.stringify(contentData));

    navigate(currentPage === "/" ? "/" : `/${currentPage}`);
  };

  return (
    // @ts-expect-error-next-line
    <Puck<UserConfig>
      key={currentPage}
      config={contentConfig({ activeLayout })}
      data={contentData?.[currentPage] || {}}
      onPublish={onPublish}
      plugins={[OverridesPlugin({ activeLayout, setActiveLayout })]}
      headerTitle="Editing"
      headerPath={pathname === "/edit" ? "/" : pathname.split("/")[1]}
    />
  );
};

export default ContentEditor;

import { Render } from "@measured/puck";
import { useLocation, useNavigate } from "react-router-dom";
import { contentConfig, UserConfig } from "@/configs/contentConfig";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const currentPage = pathname?.split("/")?.[1] || "/";

  const contentData = JSON.parse(localStorage.getItem("content") || "{}");

  return (
    <div className="grid">
      <div className="flex items-center justify-end gap-2 px-4 py-2">
        <Button
          onClick={() =>
            navigate(currentPage === "/" ? "/edit" : `/${currentPage}/edit`)
          }
          variant={"outline"}
        >
          Edit content
        </Button>
        <Button onClick={() => navigate("/add-layout")} variant={"outline"}>
          Add layout
        </Button>
      </div>
      {/* @ts-expect-error-next-line */}
      <Render<UserConfig>
        config={contentConfig({})}
        data={contentData?.[currentPage] || {}}
      />
    </div>
  );
};

export default Home;

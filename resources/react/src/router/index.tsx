import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ContentEditor from "../pages/contentEditor";
import LayoutEditor from "../pages/layoutEditor";

const Router = () => {
  return (
    <Routes>
      <Route path="/:id?/:pId?" element={<Home />} />
      <Route path=":id?/edit" element={<ContentEditor />} />
      <Route path="/add-layout" element={<LayoutEditor />} />
    </Routes>
  );
};

export default Router;

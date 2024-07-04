import { BrowserRouter } from "react-router-dom";
import "@measured/puck/puck.css";
import "./index.css";
import Router from "./router";

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;

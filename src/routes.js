import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Character from "./pages/Character";
import Header from "./pages/components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element = { <Home /> }/>
                <Route path="/character/:id" element = { <Character /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Character from "./pages/Character";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element = { <Home /> }/>
                <Route path="/character/:id" element = { <Character /> }/>
                <Route path="/favorites" element = { <Favorites /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Character from "./pages/Character";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

import Error from "./pages/Error";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element = { <Home /> }/>
                <Route path="/character/:id" element = { <Character /> }/>
                <Route path="/favorites" element = { <Favorites /> }/>

                <Route path="*" element = { <Error /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
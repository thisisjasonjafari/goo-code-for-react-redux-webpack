import React from "react";
import { Route } from 'react-router-dom'
import HomePage from "./home/Home.jsx";
import AboutPage from "./about/About.jsx";
import Header from "./common/Header.jsx";

const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Route
                exact path="/"
                component={HomePage}
            />
            <Route
                path="/about    "
                component={AboutPage}
            />
        </div>
    );
};

export default App;
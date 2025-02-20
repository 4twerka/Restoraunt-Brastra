import React from "react";
import { Header } from "../components/header/Header";
import { Welcome } from "../components/welcome/Welcome";
import { About } from "../components/about/About";
import { Recomend } from "../components/recomend/Recomend";

function HomePage() {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
            <Recomend />
        </div>
    );
}

export { HomePage };
import React from "react";
import { Header } from "../components/header/Header";
import { Welcome } from "../components/welcome/Welcome";
import { About } from "../components/about/About";
import { Recomend } from "../components/recomend/Recomend";
import { Cheff } from "../components/cheff/Cheff";

function HomePage() {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
            <Recomend />
            <Cheff />
        </div>
    );
}

export { HomePage };
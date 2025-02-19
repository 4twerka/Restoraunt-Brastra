import React from "react";
import { Header } from "../components/header/Header";
import { Welcome } from "../components/welcome/Welcome";
import { About } from "../components/about/About";

function HomePage() {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
        </div>
    );
}

export { HomePage };
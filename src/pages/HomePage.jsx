import React from "react";
import { Header } from "../components/header/Header";
import { Welcome } from "../components/welcome/Welcome";

function HomePage() {
    return (
        <div>
            <Header />
            <Welcome />
        </div>
    );
}

export { HomePage };
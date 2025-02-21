import React from "react";
import { Header } from "../components/header/Header";
import { Welcome } from "../components/welcome/Welcome";
import { About } from "../components/about/About";
import { Recomend } from "../components/recomend/Recomend";
import { Chef } from "../components/cheff/Chef";
import { Upcoming } from "../components/upcoming/Upcoming";
import { Footer } from "../components/footer/Footer";

function HomePage() {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
            <Recomend />
            <Chef />
            <Upcoming />
            <Footer />
        </div>
    );
}

export { HomePage };
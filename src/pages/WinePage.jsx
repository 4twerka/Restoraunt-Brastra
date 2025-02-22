import React from "react";
import { Wine } from "../components/wine/wine";
import { WineMenu } from "../components/wineMenu/wineMenu";

function WinePage() {
    return(
        <div>
            <Wine />
            <WineMenu />
        </div>
    );
}

export { WinePage }
import { useRef } from "react";
import { Wine } from "../components/wine/wine";
import { WineMenu } from "../components/wineMenu/wineMenu";

function WinePage() {
    const wineMenuRef = useRef(null);

    const scrollToWineMenu = () => {
        if (wineMenuRef.current) {
            wineMenuRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div>
            <Wine scrollToWineMenu={scrollToWineMenu}/>
            <WineMenu wineMenuRef={wineMenuRef}/>
        </div>
    );
}

export { WinePage }
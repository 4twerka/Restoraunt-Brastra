import React from "react";
import searchIcon from "../../assets/icons/search.png"
import logo from "../../assets/icons/logo.png"

function Header() {
    return (
        <header className="bg-black flex items-center justify-between p-3">
            <div>
                <img src={logo} alt="logo"/>
            </div>

            <ul className="flex gap-5 items-center text-white">
                <li className="activeHeader cursor-pointer">Home</li>
                <li className="cursor-pointer">Restoraunt Menu</li>
                <li className="cursor-pointer">Wines</li>
            </ul>

            <div className="flex items-center">
                <input className="text-white bg-black border-2 p-3 rounded-3xl outline-none" type="text" placeholder="Find Great Food"/>
                <button className="text-white">
                    <img src={searchIcon} alt="search" />
                </button>
            </div>
        </header>
    );
}

export { Header }
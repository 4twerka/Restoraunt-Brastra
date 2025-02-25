import React from "react";
import { Link } from "react-router-dom";
import searchButton from "../../assets/icons/search.png";

function BurgerMenu({ setIsOpen }) {
    const items = [
        { name: "Home", path: "/" },
        { name: "Restaurant Menu", path: "/menu" },
        { name: "Wines", path: "/wine" }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-backgroundColor text-white flex items-center justify-center p-4">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-5xl">
                &times;
            </button>
            <ul className="space-y-6 flex flex-col text-2xl text-center">
                {items.map((item) => (
                    <li key={item.name}>
                        <Link 
                            to={item.path} 
                            onClick={() => setIsOpen(false)} 
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { BurgerMenu };
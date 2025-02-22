import React, { useState } from "react";
import searchButton from "../../assets/icons/search.png";

function BurgerMenu({ setIsOpen }) {
    const items = [
        { name: "Home", isActive: true },
        { name: "Restaurant Menu", isActive: false },
        { name: "Wines", isActive: false }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-backgroundColor text-white flex items-center justify-center p-4">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-5xl">
                &times;
            </button>
            <ul className="space-y-6 flex flex-col text-2xl text-center">
                {items.map((item) => (
                    <li
                        key={item.name}
                        className={`hover:text-gray-400 cursor-pointer ${
                            item.isActive ? "text-headerActive" : ""
                        }`}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className="absolute bottom-10 flex items-center border border-gray-600 rounded-lg p-2 w-3/4 max-w-xs mx-auto">
                <input type="text" className="bg-transparent outline-none text-white flex-1 px-2" />
                <button className="p-1">
                    <img src={searchButton} alt="Search" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export { BurgerMenu };
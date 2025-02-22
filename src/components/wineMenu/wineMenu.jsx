import React, { useState } from "react";
import redWineImg from "../../assets/icons/redWines.png";
import whiteWineImg from "../../assets/icons/whiteWines.png";
import sparklingWineImg from "../../assets/icons/sparklingWines.png";
import roseImg from "../../assets/icons/roseWines.png";
import { ChevronDown } from "lucide-react";

function WineMenu() {
    const menu = [
        "Red Wines",
        "White Wines",
        "Sparkling Wines",
        "Rose Wines"
    ];

    const wines = {
        "Red Wines": [
            { name: "Monteabellón 2021", price: "€20", img: redWineImg },
            { name: "Arnaiz 2022", price: "€18", img: redWineImg },
            { name: "La Galga", price: "€19", img: redWineImg },
            { name: "Carmelo Rodero Roble", price: "€23", img: redWineImg },
            { name: "Emilio Moro", price: "€26", img: redWineImg },
            { name: "Carmelo Rodero Crianza", price: "€34", img: redWineImg }
        ],
        "White Wines": [
            { name: "Aula", price: "€16", img: whiteWineImg },
            { name: "Laxas", price: "€21", img: whiteWineImg },
            { name: "Viña Abad", price: "€21", img: whiteWineImg },
            { name: "Aguirrebeiko", price: "€21", img: whiteWineImg },
            { name: "Valdesil", price: "€23", img: whiteWineImg },
        ],
        "Sparkling Wines": [
            { name: "Benito Escudero", price: "€15", img: sparklingWineImg },
            { name: "Marqués de Plata", price: "€18", img: sparklingWineImg },
        ],
        "Rose Wines": [
            { name: "Ochoa Lágrima", price: "€17", img: roseImg },
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState("Red Wines");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white py-10 px-5 md:px-20">
            <h2 className="text-center text-3xl font-semibold aladin">Our Wines</h2>
            <div className="flex justify-center mt-2">
                <hr className="border-red-500 w-16" />
            </div>

            <div className="sm:hidden flex justify-center mt-6">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="flex items-center text-lg font-bold bg-gray-800 px-4 py-2 rounded-lg">
                    {selectedCategory} <ChevronDown className="ml-2 w-5 h-5" />
                </button>
            </div>

            <nav className={`sm:flex justify-center mt-6 text-lg ${menuOpen ? "block" : "hidden"} sm:block transition-all duration-300`}>
                <div className="sm:flex sm:space-x-6 text-center flex flex-col sm:flex-row items-center">
                    {menu.map((item) => (
                        <span 
                            key={item} 
                            className={`cursor-pointer font-bold block py-2 sm:py-0 ${selectedCategory === item ? 'text-headerActive' : ''}`} 
                            onClick={() => {
                                setSelectedCategory(item);
                                setMenuOpen(false);
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </nav>

            <div className="grid grid-cols-1 w-1/2 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 mt-8">
                {wines[selectedCategory].map((item, index) => (
                    <div key={index} className="text-center flex flex-col items-center">
                        <div className="bg-bgGrey w-full py-6 flex justify-center">
                            <img src={item.img} alt={item.name} className="h-56" />
                        </div>
                        <h3 className="mt-2 text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-400 text-base poppins">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { WineMenu };
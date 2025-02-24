import React, { useState } from "react";
import logo from "../../assets/icons/logoBigOne.png";
import chuletonDeBuey from "../../assets/icons/chuletonDeBuey.png";
import cocidoMadrileno from "../../assets/icons/cocidoMadrileno.png";
import paellaDeMariscos from "../../assets/icons/paellaDeMariscos.png";
import patatasBravas from "../../assets/icons/patatasBravas.png";
import foodFootage from "../../assets/icons/foodFootage.png";

function Recomend() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpen = (item) => {
        setSelectedItem(item);
    };

    const handleClose = () => {
        setSelectedItem(null);
    };

    const items = [
        {
            name: "PATATAS BRAVAS",
            price: "$5.00",
            img: patatasBravas,
            desc: "Patatas Bravas – A popular Spanish tapa featuring crispy fried potatoes topped with a spicy tomato-based sauce and sometimes aioli."
        },
        {
            name: "PAELLA DE MARISCOS",
            price: "$18.00",
            img: paellaDeMariscos,
            desc: "Paella de Mariscos – A seafood version of Spain’s iconic rice dish, made with saffron-infused rice, shrimp, mussels, squid, and other fresh seafood."
        },
        {
            name: "CHULETÓN DE BUEY",
            price: "$30.00",
            img: chuletonDeBuey,
            desc: "Chuletón de Buey – A thick-cut, bone-in beef steak, typically grilled to perfection and served rare or medium-rare for maximum flavor."
        },
        {
            name: "COCIDO MADRILEÑO",
            price: "$16.00",
            img: cocidoMadrileno,
            desc: "Cocido Madrileño – A traditional Madrid stew made with chickpeas, various meats (such as chorizo, morcilla, and pork), and vegetables, served in separate courses."
        }
    ];

    return (
        <section className="bg-backgroundColor py-10 px-4 md:px-8 lg:px-16 relative">
            <div className="flex justify-between items-center w-full">
                <img src={logo} alt="logo" className="sm:w-auto w-44" />
                <img src={foodFootage} alt="food" className="w-28 sm:w-40 md:w-52" />
            </div>

            <div className="text-center mt-4">
                <p className="text-customRed md:text-2xl mb-5 text-lg font-light tracking-widest flex items-center justify-center">
                    <span className="prataText w-8 md:w-12 h-[1px] bg-customRed inline-block mx-2"></span>
                    Slice of Heaven
                    <span className="w-8 md:w-12 h-[1px] bg-customRed inline-block mx-2"></span>
                </p>
                <h2 className="text-white md:text-3xl text-xl font-bold">
                    Essence of Traditional Flavors
                </h2>
            </div>

            <div className="grid grid-cols-1 p-8 sm:p-8 lg:p-8 rounded-2xl sm:bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 mt-6">
                {items.map((item) => (
                    <div key={item.name} className="sm:bg-black/30 bg-[#1a1a1a] rounded-lg overflow-hidden flex flex-col">
                        <img src={item.img} alt={item.name} className="w-full object-cover rounded-md" />

                        <div className="p-4 flex flex-col flex-grow">
                            <p className="text-white text-lg mt-3 font-semibold text-center">{item.name}</p>
                            <p className="text-customRed text-md mt-3 font-bold text-center">{item.price}</p>
                            <button onClick={() => handleOpen(item)} className="bg-customRed mt-5 text-white py-2 w-1/2 m-auto rounded hover:bg-red-700 transition">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out animate-fadeIn">
                    <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center relative w-full max-w-sm sm:max-w-md scale-95 transition-transform duration-300 ease-in-out animate-modalOpen">
                        <button onClick={handleClose} className="absolute top-2 right-4 text-white text-4xl hover:text-red-500 transition-colors">&times;</button>
                        <img src={selectedItem.img} alt={selectedItem.name} className="w-full rounded-md mt-6" />
                        <h3 className="text-white text-xl font-bold mt-4">{selectedItem.name}</h3>
                        <p className="text-customRed text-lg font-semibold mt-2">{selectedItem.price}</p>
                        <p className="text-white text-center px-2">{selectedItem.desc}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export { Recomend };
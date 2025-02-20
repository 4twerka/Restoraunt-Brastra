import React from "react";
import logo from "../../assets/icons/logoBigOne.png";
import chuletonDeBuey from "../../assets/icons/chuletonDeBuey.png";
import cocidoMadrileno from "../../assets/icons/cocidoMadrileno.png";
import paellaDeMariscos from "../../assets/icons/paellaDeMariscos.png";
import patatasBravas from "../../assets/icons/patatasBravas.png";

function Recomend() {
    const items = [
        {
            name: "PATATAS BRAVAS",
            price: "$5.00",
            img: patatasBravas
        },
        {
            name: "PAELLA DE MARISCOS",
            price: "$18.00",
            img: paellaDeMariscos
        },
        {
            name: "CHULETÓN DE BUEY",
            price: "$30.00",
            img: chuletonDeBuey
        },
        {
            name: "COCIDO MADRILEÑO",
            price: "$16.00",
            img: cocidoMadrileno
        }
    ];

    return (
        <section className="bg-backgroundColor py-10 px-4 md:px-8 lg:px-16">
            {/* Логотип */}
            <div className="flex justify-center md:justify-start">
                <img src={logo} alt="logo" className="w-32 md:w-40 lg:w-48" />
            </div>

            {/* Заголовок */}
            <div className="text-center mt-4">
                <p className="text-customRed text-sm md:text-lg font-light tracking-widest flex items-center justify-center">
                    <span className="w-8 md:w-12 h-[1px] bg-white inline-block mx-2"></span>
                    Slice of Heaven
                    <span className="w-8 md:w-12 h-[1px] bg-white inline-block mx-2"></span>
                </p>
                <h2 className="text-white text-xl md:text-3xl font-bold">
                    Essence of Traditional Flavors
                </h2>
            </div>

            {/* Контейнер з картками страв */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 mt-6">
                {items.map((item) => (
                    <div key={item.name} className="bg-[#1a1a1a] rounded-lg overflow-hidden flex flex-col">
                        {/* Фото на всю ширину картки без бордерів */}
                        <img src={item.img} alt={item.name} className="w-full h-52 object-cover" />
                        
                        {/* Текст та кнопка */}
                        <div className="p-4 flex flex-col flex-grow">
                            <p className="text-white text-lg font-semibold text-center">{item.name}</p>
                            <p className="text-customRed text-md font-bold text-center">{item.price}</p>
                            <button className="bg-customRed text-white py-2 w-full rounded mt-auto hover:bg-red-700 transition">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Recomend };
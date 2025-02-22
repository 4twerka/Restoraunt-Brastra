import React from "react";
import tapas from "../../assets/icons/tapas.png";
import patatas from "../../assets/icons/patatas.png";
import gambas from "../../assets/icons/gambas.png";
import jamon from "../../assets/icons/jamon.png";
import chorizo from "../../assets/icons/chorizo.png";
import eatIcon from "../../assets/icons/iconEat.png";
import seafood from "../../assets/icons/seafood.png";
import traditional from "../../assets/icons/traditional.png";
import meatDishes from "../../assets/icons/meatDishes.png";
import paella from "../../assets/icons/paella.png";
import pulpo from "../../assets/icons/pulpo.png";
import boquerones from "../../assets/icons/boquerones.png";
import bacalao from "../../assets/icons/bacalao.png";
import cocido from "../../assets/icons/cocido.png";
import fabada from "../../assets/icons/fabada.png";
import caldo from "../../assets/icons/caldo.png";
import olla from "../../assets/icons/olla.png";
import chuleton from  "../../assets/icons/chuleton.png";
import pollo from "../../assets/icons/pollo.png";
import cordero from "../../assets/icons/cordero.png";
import ollaG from "../../assets/icons/ollaG.png";

const menuData = {
    "Tapas": [
        { img: patatas, name: "Patatas Bravas", desc: "Crispy potatoes topped with spicy tomato sauce and aioli for a perfect snack.", price: "$5" },
        { img: gambas, name: "Gambas Al Ajillo", desc: "Sizzling garlic shrimp with chili, served with crusty bread for dipping.", price: "$8" },
        { img: jamon, name: "Jamón Ibérico", desc: "Thinly sliced, cured Spanish ham with a rich, savory flavor.", price: "$12" },
        { img: chorizo, name: "Chorizo Al Vino", desc: "Spanish chorizo simmered in red wine for a bold, flavorful bite.", price: "$6.5" },
    ],
    "Seafood": [
        { img: paella, name: "Paella de Mariscos", desc: "Spanish rice dish with mussels, shrimp, and calamari.", price: "$18" },
        { img: pulpo, name: "Pulpo a la Gallega", desc: "Grilled octopus with paprika and olive oil.", price: "$14" },
        { img: boquerones, name: "Boquerones Fritos", desc: "Lightly fried anchovies.", price: "$7" },
        { img: bacalao, name: "Bacalao a la Vizcaína", desc: "Salted cod in a tomato-pepper sauce.", price: "$15" }
    ],
    "Traditional Stews": [
        { img: cocido, name: "Cocido Madrileño", desc: "A hearty stew with chickpeas, pork, and vegetables, a taste of Madrid.", price: "$16" },
        { img: fabada, name: "Fabada Asturiana", desc: "Rich white bean stew with chorizo and morcilla (blood sausage), from Asturias.", price: "$14" },
        { img: caldo, name: "Caldo Gallego", desc: "A Galician broth with greens, potatoes, and chorizo, warming and flavorful.", price: "$10" },
        { img: olla, name: "Olla Gitana", desc: "A vegetable and chickpea stew with pumpkin and pears, a rustic favorite.", price: "$12" },
    ], 
    "Meat Dishes": [
        { img: chuleton, name: "Chuletón de Buey", desc: "Large, grilled rib steak, perfect for sharing, with a smoky, juicy finish.", price: "$30" },
        { img: pollo, name: "Pollo al Ajillo", desc: "Garlic-marinated chicken, pan-fried until golden and aromatic.", price: "$13" },
        { img: cordero, name: "Cordero Asado", desc: "Roasted lamb with rosemary, tender and rich in flavor.", price: "$22" },
        { img: ollaG, name: "Olla Gitana", desc: "Pork tenderloin with a sweet sherry reduction, tender and flavorful.", price: "$18" },
    ] 
};

const parentItems = [
    { name: "Tapas", img: tapas },
    { name: "Seafood", img: seafood },
    { name: "Traditional Stews", img: traditional },
    { name: "Meat Dishes", img: meatDishes }
];

function Breakfast() {
    return (
        <section className="bg-backgroundColor text-white py-12">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Menu</h1>
                    <hr className="border-headerActive w-1/5 mx-auto mt-2"/>
                </div>

                <div className="flex justify-center mt-6 space-x-8 text-lg">
                    <span className="text-headerActive font-bold">Breakfast</span>
                    <span className="cursor-pointer">Lunch</span>
                    <span className="cursor-pointer">Dinner</span>
                    <span className="cursor-pointer">Desserts</span>
                </div>

                {parentItems.map((item, index) => (
                    <div 
                        key={item.name} 
                        className={`flex flex-col md:flex-row items-center mt-12 ${index === 1 || index === 3 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={item.img} alt={item.name} className="rounded-lg shadow-lg w-3/4" />
                        </div>

                        <div className="w-full md:w-1/2 mt-6 md:mt-0">
                            <div className="flex items-center text-xl font-bold">
                                <hr className="flex-grow border-gray-500" />
                                <span className="mx-4 text-4xl">{item.name}</span>
                                <hr className="flex-grow border-gray-500" />
                            </div>

                            <div className="mt-6 space-y-6">
                                {(menuData[item.name] || []).map((menuItem, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <img src={menuItem.img} alt={menuItem.name} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="ml-4 flex-grow">
                                            <div className="flex items-center">
                                                <span className="text-lg font-semibold">{menuItem.name}</span>
                                                <img src={eatIcon} alt="" className="ml-2"/>
                                            </div>
                                            <p className="text-gray-400 text-sm">{menuItem.desc}</p>
                                        </div>
                                        <span className="text-lg font-bold poppins">{menuItem.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Breakfast };
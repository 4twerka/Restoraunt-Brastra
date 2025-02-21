import React from "react";
import Cheff from "../../assets/icons/cheff.png";
import logo from "../../assets/icons/logo.png";
import chefIcon from "../../assets/icons/chef.png";
import freshIcon from "../../assets/icons/fresh.png";
import shoppingListIcon from "../../assets/icons/shoppingList.png";

function Chef() {
    const items = [
        {
            name: "Fresh products",
            description: "These nutrients support everything from immune function to bone health.",
            img: freshIcon
        },
        {
            name: "Skilled Chefs",
            description: "Excellent culinary skills, time management expertise, the ability to work.",
            img: chefIcon
        },
        {
            name: "Unique Recipes",
            description: "Having an extra visual element around these items on your menu will help attract your guests.",
            img: shoppingListIcon
        }
    ];

    return (
        <section className="bg-black py-10">
            <div className="text-center mb-10">
                <h2 className="text-white text-3xl font-bold">Our Special Environment</h2>
                <p className="text-customRed text-xl font-light tracking-widest flex items-center justify-center">
                    <span className="w-12 h-[1px] bg-customRed inline-block mx-2"></span>
                    Feast your eyes
                    <span className="w-12 h-[1px] bg-customRed inline-block mx-2"></span>
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-0 px-5 md:px-0 max-w-6xl mx-auto h-auto">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={Cheff} alt="Chef" className="w-full max-w-md h-auto object-cover" />
                </div>

                <div className="w-full md:w-1/2 bg-[#1a1a1a] p-10 rounded-lg flex flex-col justify-center">
                    <div className="flex justify-center mb-5">
                        <img src={logo} alt="Logo" className="w-auto" />
                    </div>
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4 mb-5">
                            <img src={item.img} alt={item.name} className="w-8 h-8" />
                            <div className="md:w-1/2 ">
                                <h3 className="text-white text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Chef };
import React from "react";
import Cheff from "../../assets/icons/cheff.png";
import logo from "../../assets/icons/logo.png";
import chefIcon from "../../assets/icons/chef.png";
import freshIcon from "../../assets/icons/fresh.png";
import shoppingListIcon from "../../assets/icons/shoppingList.png";

function Cheff() {
    return (
        <section className="bg-backgroundColor">
            <div className="flex flex-col items-center">
                <span className="text-white md:text-3xl text-xl font-bold">Our special Environment</span>
                <p className="text-customRed md:text-2xl mb-5 text-lg font-light tracking-widest flex items-center justify-center">
                    <span className="prataText w-8 md:w-12 h-[1px] bg-customRed inline-block mx-2"></span>
                    Feast your eyes
                    <span className="w-8 md:w-12 h-[1px] bg-customRed inline-block mx-2"></span>
                </p>
            </div>

            <div className="">
                <div className="">
                    <img src={Cheff} alt="cheff" className="" />
                </div>

                <div className="">
                    <img src={logo} alt="logo" />
                    <div>
                        <img src={chefIcon} alt="item" />
                        <span>Fresh products</span>
                        <span>These nutrients support everything from immune function to bone health.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Cheff };
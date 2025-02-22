import React from "react";
import logo from "../../assets/icons/logo.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";

function Footer() {
    return (
        <footer className="bg-backgroundColor text-white py-6 px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 container mx-auto">
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="logo" className="w-32" />
                    <ul className="mt-3 text-sm text-gray-300">
                        <li>Phone number</li>
                        <li className="font-semibold">+34 911 72 07 45</li>
                    </ul>
                </div>

                <nav className="">
                    <ul className="flex flex-col text-center md:flex-row gap-4 md:gap-8 text-gray-300 text-lg">
                        <li className="cursor-pointer hover:text-white">Home</li>
                        <li className="cursor-pointer hover:text-white">Menu</li>
                        <li className="cursor-pointer hover:text-white">Wines</li>
                        <li className="cursor-pointer hover:text-white">Christmas Dinner</li>
                    </ul>
                </nav>
            </div>

            <hr className="border-gray-600 my-6 container mx-auto" />

            <div className="flex flex-col md:flex-row container mx-auto justify-between items-center text-gray-400 text-sm">
                <span>copyright © 2025 Brastra</span>
                <ul className="flex gap-4 mt-4 md:mt-0">
                    <li>
                        <img src={facebook} alt="facebook" className="w-6" />
                    </li>
                    <li>
                        <img src={instagram} alt="instagram" className="w-6" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export { Footer };
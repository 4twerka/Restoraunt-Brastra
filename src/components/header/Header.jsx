import { useState } from "react";
import logo from "../../assets/icons/logo.png";
import searchButton from "../../assets/icons/search.png";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-backgroundColor flex items-center justify-between p-4">
            <img src={logo} alt="logo" className="max-w-[150px]" />

            <nav className="hidden md:flex gap-6 text-gray-300">
                <a className="text-red-500 underline cursor-pointer">Home</a>
                <a className="cursor-pointer">Restaurant Menu</a>
                <a className="cursor-pointer">Wines</a>
            </nav>

            <div className="hidden md:flex items-center border border-white rounded-full px-5 h-10 max-w-sm">
                <input 
                    className="text-white outline-none bg-backgroundColor flex-1"
                    type="text" 
                    placeholder="Find Great Food"
                />
                <button className="flex items-center justify-center w-10 h-10">
                    <img src={searchButton} alt="search" />
                </button>
            </div>

            <div onClick={() => setIsOpen((prev) => !prev)} className="md:hidden flex flex-col gap-1 cursor-pointer">
                <span className="w-6 h-0.5 bg-white block"></span>
                <span className="w-6 h-0.5 bg-white block"></span>
                <span className="w-6 h-0.5 bg-white block"></span>
            </div>

            {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}
        </header>
    );
}

export { Header };
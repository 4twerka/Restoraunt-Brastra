import React from "react";
import logo from "../../assets/icons/logoBigOne.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import homeIcon from "../../assets/icons/homeIcon.png";
import plov from "../../assets/icons/plov.png";
import background from "../../assets/icons/backgroundAbout.png";
import commasTop from "../../assets/icons/commasTop.png";
import commasBottom from "../../assets/icons/commasBottom.png";
import telIcon from "../../assets/icons/telIcon.png";

function About() {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat flex flex-col md:flex-row h-auto min-h-screen"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hidden md:flex md:w-1/2 flex-col">
                <img src={plov} alt="plov" className="mt-auto w-full md:w-auto" />
            </div>

            <div className="bg-black/50 w-full md:w-1/2 flex flex-col text-white px-6 md:px-10 py-8 h-screen">
                <div className="flex-1 flex justify-center items-center">
                    <img src={logo} alt="Brastra Logo" className="mb-6" />
                </div>

                <div className="flex-1 flex justify-center items-center relative">
                    <div className="relative max-w-lg text-center">
                        <img 
                            src={commasTop} 
                            alt="Opening Quotes" 
                            className="absolute -top-6 left-[-20px] w-6 h-auto block"
                        />
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
                            Welcome to Brastra, where the essence of traditional flavors meets modern culinary artistry.
                            Our journey began with a simple vision: to create a dining experience that brings people together
                            over delicious, carefully crafted dishes inspired by our roots and local ingredients.
                            At Brastra, we believe in honoring heritage while embracing innovation, 
                            resulting in a menu that celebrates both classic favorites and unique, original creations.
                        </p>
                        <img 
                            src={commasBottom} 
                            alt="Closing Quotes" 
                            className="absolute -bottom-6 right-[-20px] w-6 h-auto block"
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-end items-center md:items-end md:text-right gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base">5th Eve, Colombo Road, Galle.</span>
                        <img src={homeIcon} alt="Location Icon" className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base">+94 111 123 457</span>
                        <img src={telIcon} alt="Phone Icon" className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base">brastra@gmail.com</span>
                        <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export { About };
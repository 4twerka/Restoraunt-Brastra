import React, { useState } from "react";
import { motion } from "framer-motion";
import phoneIcon from "../../assets/icons/phone.png";
import bgFood from "../../assets/icons/homeBgEat.png";

function Welcome() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section 
            className="bg-backgroundColor relative overflow-hidden flex items-center px-6 md:px-16 bg-no-repeat bg-center bg-contain"
            style={{ 
                height: "calc(100vh - 110px)",
                backgroundImage: `url(${bgFood})`,
                backgroundPosition: "center right",
            }}
        >
            <div className="max-w-4xl w-full text-white z-10">
                <h1 className="text-7xl md:text-8xl font-bold tracking-widest">
                    Fresh Foods <br /> 
                    <span className="cursiveText italic text-6xl md:text-7xl">with</span>{" "}
                    <span className="font-bold">Great taste</span>
                </h1>

                <p className="mt-6 text-xl md:text-2xl opacity-90 max-w-2xl">
                    Whether you’re here for a casual lunch, a romantic dinner, or a celebration, 
                    Baristra’s warm and attentive service promises to make your visit delightful. 
                    Enjoy the charm of our modern, stylish interior.
                </p>

                <button 
                    onClick={() => setIsOpen(true)} 
                    className="mt-8 flex items-center gap-4 border border-white px-8 py-4 rounded-full text-white text-lg md:text-xl transition-all hover:px-12 hover:border-headerActive"
                >
                    <img src={phoneIcon} alt="phone" className="w-6 h-6" />
                    Call or Book
                </button>
            </div>

            {isOpen && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md text-center"
                    >
                        <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
                        <p className="text-lg text-gray-700 mt-4">📞 Number: +34 911 72 07 45</p>
                        <p className="text-lg text-gray-700 mt-2">📧 Email: brastra@gmail.com</p>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}

export { Welcome };
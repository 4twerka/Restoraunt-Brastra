import React from "react";
import phoneIcon from "../../assets/icons/phone.png";
import bgFood from "../../assets/icons/homeBgEat.png";

function Welcome() {
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

                <button className="mt-8 flex items-center gap-4 border border-white px-8 py-4 rounded-full text-white text-lg md:text-xl hover:bg-white hover:text-black transition">
                    <img src={phoneIcon} alt="phone" className="w-6 h-6" />
                    Call or Book
                </button>
            </div>
        </section>
    );
}

export { Welcome };
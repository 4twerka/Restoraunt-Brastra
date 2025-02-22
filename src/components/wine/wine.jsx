import React from "react";
import background from "../../assets/icons/WineBackground.jpg";
import logo from "../../assets/icons/logoBigOne.png";

function Wine() {
    return (
        <section 
            className="relative flex items-center justify-center text-center text-white px-4 sm:px-8"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "80vh", 
            }}
        >
            <div className="absolute top-4 sm:top-8 w-full flex justify-center">
                <img src={logo} alt="logo" className="w-32 sm:w-48" />
            </div>

            <div className="flex flex-col items-center max-w-lg sm:max-w-2xl">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold aladin">The Finest Wines</h1>
                <p className="text-base sm:text-lg mt-2">from Brastra Collection</p>
                <button className="mt-6 bg-[#7A2835] hover:bg-[#5A1F27] transition px-5 sm:px-6 py-2 text-white rounded-lg">
                    Explore
                </button>
            </div>
        </section>
    );
}

export { Wine };
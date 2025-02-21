import React from "react";
import background from "../../assets/icons/backgoundEvent.png";
import burger from "../../assets/icons/burger.png";

function Upcoming() {
    return (
        <section
            className="relative flex items-center justify-center min-h-[70vh] bg-cover bg-center bg-no-repeat px-4"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="absolute top-1/2 left-0 w-full h-[70%] bg-black/60 md:bg-black -translate-y-1/2 md:h-[50%]"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6 md:gap-12">
                <div className="text-white text-center md:text-left max-w-md order-2 md:order-1">
                    <span className="text-red-500 uppercase font-bold text-sm sm:text-base">Discount</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold">Upcoming Events</h2>
                    <p className="mt-2 text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>

                <div className="w-48 md:w-full order-1 md:order-2">
                    <img src={burger} alt="burger" className="w-full object-contain" />
                </div>
            </div>
        </section>
    );
}

export { Upcoming };
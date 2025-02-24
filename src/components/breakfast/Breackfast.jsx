import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
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
import pizzaLogo from "../../assets/icons/pizzaMain.jpg";
import sushiLogo from "../../assets/icons/sushiMain.jpg";
import ukrainianLogo from "../../assets/icons/ukrainian.jpg";
import pastaLogo from "../../assets/icons/pastaMain.jpg";
import meatLogo from "../../assets/icons/meatMain.jpg";
import tacosLogo from "../../assets/icons/tacosMain.jpg";
import enchiladasLogo from "../../assets/icons/enchiladasMain.jpg";
import quesadillasLogo from "../../assets/icons/quesadillasMain.jpg";
import cakeLogo from "../../assets/icons/cakeMain.jpg";
import yogurtLogo from "../../assets/icons/yogurtMain.jpg";
import baklavaLogo from "../../assets/icons/baklavaMain.jpg";
import pieLogo from "../../assets/icons/pieMain.jpg";
import peperoni from "../../assets/icons/peperoniPizza.jpg";
import fourCheese from "../../assets/icons/fourCheesePizza.jpg";
import bbq from "../../assets/icons/hawaiPizza.jpg";
import margherita from "../../assets/icons/Margherita.jpg";
import nigiri from "../../assets/icons/nigiri.jpg";
import makiRolls from "../../assets/icons/makiRolls.jpg";
import sashimi from "../../assets/icons/sashimi.jpg";
import tempuraRoll from "../../assets/icons/tempuraRoll.jpg";
import borscht from "../../assets/icons/borscht.jpg";
import varenyky from "../../assets/icons/varenyky.jpg";
import holubtsi from "../../assets/icons/holubtsi.jpg";
import salo from "../../assets/icons/salo.jpg";
import spaghetti from "../../assets/icons/spaghetti.jpg";
import carbonara from "../../assets/icons/carbonara.jpg";
import lasagna from "../../assets/icons/lasagna.jpg";
import penne from "../../assets/icons/penne.jpg";
import beefSteak from "../../assets/icons/beefSteak.jpg";
import grilled from "../../assets/icons/grilled.jpg";
import pork from "../../assets/icons/pork.jpg";
import lambChops from "../../assets/icons/lambChops.jpg";
import taco from "../../assets/icons/taco.jpg";
import enchiladas from "../../assets/icons/enchiladas.jpg";
import quesadillas from "../../assets/icons/quesadillas.jpg";
import cheesecake from "../../assets/icons/cheesecake.jpg";
import chocolateCake from "../../assets/icons/chocolateCake.jpg";
import carrotCake from "../../assets/icons/carrotCake.jpg";
import redVelvetCake from "../../assets/icons/redVelvetCake.jpg";
import yogurt from "../../assets/icons/yogurt.jpg";
import baklava from "../../assets/icons/baklava.jpg";
import pie from "../../assets/icons/pie.jpg";

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
    ] ,
    "Pizza": [
        { img: fourCheese, name: "4 cheeses", desc: "A delicate pizza with a blend of mozzarella, parmesan, gorgonzola, and cheddar on a creamy base.", price: "$12" },
        { img: bbq, name: "BBQ", desc: "Juicy meat, aromatic barbecue sauce, and melted cheese on a crispy crust.", price: "$13" },
        { img: peperoni, name: "Peperoni", desc: "Classic pizza with spicy pepperoni, rich tomato sauce, and gooey mozzarella.", price: "$10" },
        { img: margherita, name: "Margherita", desc: "A timeless favorite with fresh tomatoes, basil, mozzarella, and a light tomato sauce.", price: "$16" },
    ],
    "Sushi": [
        { img: nigiri, name: "Nigiri", desc: "A classic sushi consisting of a slice of fresh fish (like salmon or tuna) atop a small bed of seasoned rice.", price: "$10" },
        { img: makiRolls, name: "Maki Rolls", desc: "Rolled sushi with fish, vegetables, and rice wrapped in seaweed (nori). Popular types include California Roll and Spicy Tuna Roll.", price: "$12" },
        { img: sashimi, name: "Sashimi", desc: "Thinly sliced raw fish served without rice, often enjoyed for its pure flavor. Common choices include salmon, tuna, and yellowtail.", price: "$10" },
        { img: tempuraRoll, name: "Tempura Roll", desc: "A deep-fried sushi roll, usually filled with shrimp tempura, avocado, and spicy mayo for a crispy texture.", price: "$13" },
    ],
    "Ukrainian food": [
        { img: borscht, name: "Borscht", desc: "A hearty beet soup with cabbage, potatoes, carrots, and often served with sour cream.", price: "$7" },
        { img: varenyky, name: "Varenyky", desc: "Dumplings filled with various ingredients like potatoes, cheese, meat, or fruit, typically served with sour cream.", price: "$10" },
        { img: holubtsi, name: "Holubtsi", desc: "Cabbage leaves stuffed with a mixture of rice, meat, and spices, usually served with tomato sauce.", price: "$8" },
        { img: salo, name: "Salo", desc: "Traditional cured pork fat, often served with bread, garlic, and pickles.", price: "$4" },
    ],
    "Pasta": [
        { img: spaghetti, name: "Spaghetti Aglio e Olio", desc: "A simple pasta dish made with garlic, olive oil, red pepper flakes, and parsley.Approximate price", price: "$10" },
        { img: carbonara, name: "Carbonara", desc: "Pasta served with a creamy sauce made from eggs, cheese (usually Pecorino Romano), pancetta, and black pepper.", price: "$14" },
        { img: lasagna, name: "Lasagna", desc: "Layers of pasta sheets with meat, béchamel sauce, tomato sauce, and melted cheese.", price: "$18" },
        { img: penne, name: "Penne Arrabbiata", desc: "Penne pasta served in a spicy tomato sauce with garlic, red chili flakes, and parsley.Approximate price.", price: "$14" },
    ],
    "Meat": [
        { img: beefSteak, name: "Beef Steak", desc: "A tender cut of beef, often grilled or pan-seared, served with a variety of sides like mashed potatoes or vegetables.", price: "$30" },
        { img: grilled, name: "Grilled Chicken Breast", desc: "A lean, grilled chicken breast, often seasoned with herbs and spices, served with vegetables or a side salad.", price: "$17" },
        { img: pork, name: "Pork Schnitzel", desc: "Breaded and deep-fried pork cutlet, typically served with potatoes, sauerkraut, or salad.", price: "$20" },
        { img: lambChops, name: "Lamb Chops", desc: "Tender lamb cuts, often grilled or roasted with rosemary and garlic, served with a side of potatoes or vegetables.", price: "$32" },
    ],
    "Tacos": [
        { img: taco, name: "Carne Asada Taco", desc: "Grilled steak, typically marinated with citrus and spices, served in a soft corn tortilla with onions, cilantro, and salsa.", price: "$5" },
        { img: taco, name: "Al Pastor Taco", desc: "Marinated pork cooked on a vertical rotisserie, served with pineapple, onions, and cilantro in a corn tortilla.", price: "$5" },
        { img: taco, name: "Fish Taco", desc: "Grilled or battered fish, often served with cabbage slaw, crema, and salsa in a soft tortilla.", price: "$7" },
        { img: taco, name: "Barbacoa Taco", desc: "Slow-cooked beef, often with spices and herbs, served in a soft corn tortilla with onions, cilantro, and salsa.", price: "$5" },
    ],
    "Enchiladas": [
        { img: enchiladas, name: "Enchiladas Verdes", desc: "Corn tortillas filled with chicken or beef, topped with a tangy green tomatillo sauce, cheese, and sour cream.", price: "$14" },
        { img: enchiladas, name: "Enchiladas Rojas", desc: "Corn tortillas filled with beef, chicken, or cheese, smothered in a rich red chili sauce, and topped with cheese and sour cream.", price: "$14" },
        { img: enchiladas, name: "Cheese Enchiladas", desc: "Soft corn tortillas filled with melted cheese, topped with chili sauce, and garnished with onions and cilantro.", price: "$10" },
        { img: enchiladas, name: "Enchiladas Suizas", desc: "Corn tortillas filled with shredded chicken, topped with a creamy green sauce made from tomatillos, cilantro, and sour cream.", price: "$14" },
    ],
    "Quesadillas": [
        { img: quesadillas, name: "Cheese Quesadilla", desc: "A simple quesadilla filled with melted cheese, typically served with guacamole, salsa, or sour cream.", price: "$7" },
        { img: quesadillas, name: "Chicken Quesadilla", desc: "A quesadilla filled with grilled or shredded chicken, cheese, and often seasoned with spices, served with salsa or sour cream.", price: "$10" },
        { img: quesadillas, name: "Steak Quesadilla", desc: "Filled with grilled steak, melted cheese, and sometimes peppers and onions, served with guacamole and salsa.", price: "$11" },
        { img: quesadillas, name: "Vegetarian Quesadilla", desc: "A mix of vegetables like bell peppers, onions, mushrooms, and spinach, along with cheese, served with salsa and sour cream.", price: "$8" },
    ],
    "Cakes": [
        { img: cheesecake, name: "Cheesecake", desc: "A creamy dessert made with cream cheese, sugar, and eggs, often topped with fruit or a fruit compote.", price: "$6" },
        { img: chocolateCake, name: "Chocolate Cake", desc: "A rich and moist cake made with cocoa, often layered with chocolate ganache or frosting.", price: "$5" },
        { img: carrotCake, name: "Carrot Cake", desc: "A spiced cake made with grated carrots, walnuts, and cinnamon, usually topped with cream cheese frosting.", price: "$7" },
        { img: redVelvetCake, name: "Red Velvet Cake", desc: "A moist, bright red cake with a hint of cocoa, layered with cream cheese frosting.", price: "$7" },
    ],
    "Yogurts": [
        { img: yogurt, name: "Greek Yogurt", desc: "Thick, creamy yogurt with a tart flavor, often served with honey and fruit.", price: "$3" },
        { img: yogurt, name: "Frozen Yogurt", desc: "A frozen, creamy dessert made from yogurt, typically topped with fruits, nuts, or chocolate.", price: "$4" },
        { img: yogurt, name: "Flavored Yogurt", desc: "Regular yogurt available in various flavors like strawberry, blueberry, or vanilla.", price: "$2" },
        { img: yogurt, name: "Probiotic Yogurt", desc: "Yogurt enriched with beneficial bacteria, often used for gut health, with a mild and creamy taste.", price: "$4" },
    ],
    "Baklava": [
        { img: baklava, name: "Classic Baklava", desc: "Layers of filo dough filled with chopped nuts and honey, baked to a golden crisp.", price: "$4" },
        { img: baklava, name: "Chocolate Baklava", desc: "Traditional baklava with a rich chocolate filling added to the nut and honey layers.", price: "$4" },
        { img: baklava, name: "Pistachio Baklava", desc: "A variation made with pistachio nuts instead of the typical walnuts or almonds, soaked in sweet syrup.", price: "$5" },
        { img: baklava, name: "Mini Baklava", desc: "Smaller-sized baklava, often served as a bite-sized dessert with a variety of nuts.", price: "$3" },
    ],
    "Pies": [
        { img: pie, name: "Apple Pie", desc: "A classic pie filled with spiced apples, cinnamon, and sugar, baked in a buttery crust.", price: "$5" },
        { img: pie, name: "Pumpkin Pie", desc: "A smooth, spiced pie made with pumpkin puree, cinnamon, nutmeg, and cloves in a flaky crust.", price: "$5" },
        { img: pie, name: "Pecan Pie", desc: "A rich pie made with pecans, corn syrup, and sugar in a buttery pie crust.", price: "$6" },
        { img: pie, name: "Blueberry Pie", desc: "A sweet pie filled with fresh or frozen blueberries, sugar, and a hint of lemon zest.", price: "$5" },
    ],
};

const parentItems = [
    { name: "Tapas", img: tapas },
    { name: "Seafood", img: seafood },
    { name: "Traditional Stews", img: traditional },
    { name: "Meat Dishes", img: meatDishes }
];

const lunchItem = [
    { name: "Pizza", img: pizzaLogo },
    { name: "Sushi", img: sushiLogo },
    { name: "Ukrainian food", img: ukrainianLogo },
    { name: "Pasta", img: pastaLogo }
];

const dinnerItem = [
    { name: "Meat", img: meatLogo },
    { name: "Tacos", img: tacosLogo },
    { name: "Enchiladas", img: enchiladasLogo },
    { name: "Quesadillas", img: quesadillasLogo }
];

const dessertsItem = [
    { name: "Cakes", img: cakeLogo },
    { name: "Yogurts", img: yogurtLogo },
    { name: "Baklava", img: baklavaLogo },
    { name: "Pies", img: pieLogo }
];

function Breakfast() {
    const [activeCategory, setActiveCategory] = useState("Breakfast");
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const getItemsToRender = () => {
        if (activeCategory === "Breakfast") return parentItems;
        if (activeCategory === "Lunch") return lunchItem;
        if (activeCategory === "Dinner") return dinnerItem;
        if (activeCategory === "Desserts") return dessertsItem;
        return [];
    };

    const getMenuData = (itemName) => {
        if (activeCategory === "Breakfast") return menuData[itemName] || [];
        return menuData[itemName] || [];
    };

    return (
        <section className="bg-backgroundColor text-white py-12">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Menu</h1>
                    <hr className="border-headerActive w-1/5 mx-auto mt-2"/>
                </div>

                <div className="hidden justify-center md:flex mt-6 space-x-8 text-lg">
                    {["Breakfast", "Lunch", "Dinner", "Desserts"].map((cat) => (
                        <span
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`cursor-pointer ${activeCategory === cat ? "text-headerActive font-bold" : ""}`}
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                <div className="flex md:hidden">
                    <button className="mx-auto bg-headerActive px-4 py-2 rounded-lg" onClick={handleOpen}>
                        Open Menu
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-3/4 max-w-md">
                            <h2 className="text-2xl font-bold mb-4">Select Category</h2>
                            <ul className="space-y-2">
                                {["Breakfast", "Lunch", "Dinner", "Desserts"].map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setIsOpen(false);
                                        }}
                                        className="cursor-pointer p-2 rounded-lg hover:bg-gray-200"
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {getItemsToRender().map((item, index) => (
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
                                {(getMenuData(item.name) || []).map((menuItem, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <img src={menuItem.img} alt={menuItem.name} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="ml-4 flex-grow">
                                            <div className="flex items-center">
                                                <span className="text-lg font-semibold">{menuItem.name}</span>
                                                <img src={eatIcon} alt="" className="ml-2"/>
                                            </div>
                                            <p className="text-gray-400  md:w-1/2 text-sm">{menuItem.desc}</p>
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
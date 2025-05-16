import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import searchButton from "../../assets/icons/search.png";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [fullDescription, setFullDescription] = useState(false);

    const items = [
        { name: "Home", path: "/" },
        { name: "Restaurant Menu", path: "/menu" },
        { name: "Wines", path: "/wine" },
    ];

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await response.json();

            if (data.meals) {
                const meal = data.meals[0]; 
                setSearchResults({
                    name: meal.strMeal,
                    image: meal.strMealThumb,
                    description: meal.strInstructions
                });
            } else {
                setSearchResults(null);
            }

            setShowModal(true);
            setFullDescription(false); 
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <header className="bg-backgroundColor flex items-center justify-between p-4">
            <Link to={items[0].path}>
                <img src={logo} alt="logo" className="max-w-[150px]" />
            </Link>

            <nav className="hidden md:flex gap-6 text-gray-300">
                {items.map((item) => (
                    <Link key={item.name} to={item.path} className="hover:text-gray-400 transition cursor-pointer">
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="relative hidden md:flex items-center border border-white rounded-full px-5 h-10 max-w-sm">
                <input 
                    className="text-white outline-none bg-backgroundColor flex-1"
                    type="text" 
                    placeholder="Find Great Food"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="flex items-center justify-center w-10 h-10" onClick={handleSearch}>
                    <img src={searchButton} alt="search" />
                </button>
            </div>

            <div onClick={() => setIsOpen((prev) => !prev)} className="md:hidden flex flex-col gap-1 cursor-pointer">
                <span className="w-6 h-0.5 bg-white block"></span>
                <span className="w-6 h-0.5 bg-white block"></span>
                <span className="w-6 h-0.5 bg-white block"></span>
            </div>

            {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}

            {showModal && (
                <div className="fixed z-50 top-0 overflow-y-auto left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md text-black w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
                        {searchResults ? (
                            <div className="text-center">
                                <img src={searchResults.image} alt={searchResults.name} className="w-full h-48 object-cover rounded-md" />
                                <h3 className="text-lg font-bold mt-2">{searchResults.name}</h3>
                                <p className="text-gray-600 mt-2">
                                    {fullDescription
                                        ? searchResults.description
                                        : `${searchResults.description.slice(0, 100)}...`}
                                </p>
                                {!fullDescription && (
                                    <button 
                                        className="text-blue-500 mt-2 underline"
                                        onClick={() => setFullDescription(true)}
                                    >
                                        Show more
                                    </button>
                                )}
                            </div>
                        ) : (
                            <p className="text-center">No results found.</p>
                        )}
                        <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header };
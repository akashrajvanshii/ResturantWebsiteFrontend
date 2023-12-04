import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const RestaurantInfo = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../restaurantData.json');
                const data = await response.json();
                setRestaurantData(data.restaurant);
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                {restaurantData && <h1 className="logo">{restaurantData.name}</h1>}
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                    <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                    <a href="#awards">Reserve a Table</a>
                </li>
                <li className="p__opensans">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => setToggleMenu(true)}
                />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}
                        />
                        <ul className="app__navbar-smallscreen_links">
                            <li>
                                <a href="#home" onClick={() => setToggleMenu(false)}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={() => setToggleMenu(false)}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#menu" onClick={() => setToggleMenu(false)}>
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#awards" onClick={() => setToggleMenu(false)}>
                                    Awards
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setToggleMenu(false)}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default RestaurantInfo;

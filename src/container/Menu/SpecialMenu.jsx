import React, { useState, useEffect } from 'react';
import {MenuItem} from "../../components";
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './SpecialMenu.css';

const SpecialMenuSection = () => {
    const [entreesData, setEntreesData] = useState([]);
    const [wineData, setWineData] = useState([]);
    const [cocktailData, setCocktailData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../restaurantData.json');
                const result = await response.json();

                const regularMenu = result.restaurant.menu.categories[0].items || [];
                const seasonalMenu = result.restaurant.menu.seasonal_menu.items || [];
                const entreesCategory = result.restaurant.menu.categories.find(category => category.name === "Global Fusion Entrees");

                setEntreesData(entreesCategory ? entreesCategory.items : []);
                setWineData(regularMenu);
                setCocktailData(seasonalMenu);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <SubHeading title="Menu that fits your palate" />
                <h1 className="headtext__cormorant">Our Menu</h1>
            </div>

            {loading ? (
                <p>Loading menu items...</p>
            ) : (
                <div className="app__specialMenu-menu">
                    <div className="app__specialMenu-menu_wine flex__center">
                        <p className="app__specialMenu-menu_heading">Year Round Menu</p>
                        <div className="app__specialMenu_menu_items">
                            {wineData.map((wine, index) => (
                                <MenuItem key={wine.name + index} title={wine.name} price={wine.price} tags={wine.description} />
                            ))}
                            {entreesData.map((entree, index) => (
                                <MenuItem key={entree.name + index} title={entree.name} price={entree.price} tags={entree.description} />
                            ))}
                        </div>
                    </div>

                    <div className="app__specialMenu-menu_img">
                        <img src={images.menu} alt="menu__img" />
                    </div>

                    <div className="app__specialMenu-menu_cocktails flex__center">
                        <p className="app__specialMenu-menu_heading">Seasonal Menu</p>
                        <div className="app__specialMenu_menu_items">
                            {cocktailData.map((cocktail, index) => (
                                <MenuItem key={cocktail.name + index} title={cocktail.name} price={cocktail.price} tags={cocktail.description} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div style={{ marginTop: 15 }}>
                <button type="button" className="custom__button">
                    View More
                </button>
            </div>
        </div>
    );
};

export default SpecialMenuSection;



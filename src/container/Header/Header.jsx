import React, {useEffect, useState} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';



const Header = () => {
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

    if (!restaurantData || !restaurantData.chef) {
        return <p>Loading chef information...</p>;
    }

    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Savor Elegance, Taste Perfection" />
                <h1 className="app__header-h1">Where Culinary Art Meets Exceptional Dining.</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>{restaurantData.ambiance.description}</p>
                <button type="button" className="custom__button">Explore Menu</button>
            </div>

            <div className="app__wrapper_img">
                <img src={images.welcome} alt="header_img" />
            </div>
        </div>
    );

};

export default Header;

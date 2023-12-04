import React, {useEffect, useState} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
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
        <div className="app__bg app__wrapper section__padding">
            <div className="app__wrapper_img app__wrapper_img-reverse">
                <img src={images.chef} alt="chef_image" />
            </div>
            <div className="app__wrapper_info">
                <SubHeading title="Let's Meet" />
                <h1 className="headtext__cormorant">The Artisan of Flavors</h1>
                <p className="p__opensans">{restaurantData.chef.bio}</p>
                <p className="p__opensans"><span className="sig">Signature Dish:</span> {restaurantData.chef.signature_dish}</p>

                <div className="app__chef-content">

                    <div className="app__chef-content_quote">
                        <img src={images.quote} alt="quote_image" />
                    </div>
                    <p className="p__opensans">
                        Do not be afraid of cooking as your ingredients will know, and
                        misbehave. Enjoy your cooking and the food will behave; moreover,
                        it will pass your pleasure on to those who eat it.
                    </p>
                </div>

                <div className="app__chef-sign">
                    <p>{restaurantData.chef.name}</p>
                    <p className="p__opensans">Head Chef</p>
                    <img src={images.sign} alt="sign_image" />
                </div>
            </div>
        </div>
    );
};

export default Chef;

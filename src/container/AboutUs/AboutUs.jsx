import React, {useEffect, useState} from 'react';
import restaurantData from '../../restaurantData.json'; // Adjust the path as needed

import { images } from '../../constants';
import './AboutUs.css';
import ReviewBox from "../../components/Footer/Reviewbox";

const AboutUs = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch restaurant data
                const response = await fetch('../../restaurantData.json');
                const result = await response.json();


                // Extract reviews
                const fetchedReviews = result.restaurant.reviews || [];
                setReviews(fetchedReviews);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (

    <div className="app__aboutus app__bg flex__center section__pading" id="about">
        <div className="app__aboutus-overlay flex__center">
            {/*<img src={images.G} alt="G_overlay" />*/}
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <img src={images.knife} alt="about_knife"/>
            </div>

            <div className="app__aboutus-content_knife ">
                <h1 className="headtext__cormorant">Our Happy Customers</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <div className="boxing">
                    {reviews.map((review, index) => (
                        <ReviewBox key={`review_${index}`} review={review} />
                    ))}
                </div>
            </div>


        </div>
    </div>
    );
};

export default AboutUs;

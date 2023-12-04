import React, {useEffect, useState} from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import {FooterOverlay, Newsletter, SubHeading} from '../../components';
import { images } from '../../constants';
import './Footer.css';






const Footer = () => {
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
      <div className="app__footer section__padding" id="login">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">{restaurantData.location.address}</p>
            <p className="p__opensans">+91 80-443-2312</p>
            <p className="p__opensans">+91 80-581-0518</p>
          </div>

          <div className="app__footer-links_logo">
            <h1 className="app__footer-headtext">{restaurantData.name}</h1>
            <p className="p__opensans">{restaurantData.online_presence.website}</p>
            <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
            <div className="app__footer-links_icons">
              <a href={restaurantData.online_presence.social_media.facebook}>
                <FiFacebook />
              </a>
              <a href={restaurantData.online_presence.social_media.twitter}>
                <FiTwitter />
              </a>
              <a href={restaurantData.online_presence.social_media.instagram}>
                <FiInstagram />
              </a>
            </div>
          </div>

          <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">08:00 am - 12:00 am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">07:00 am - 11:00 pm</p>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="p__opensans">2023 {restaurantData.name}. All Rights reserved.</p>
        </div>

      </div>
  );
};

export default Footer;
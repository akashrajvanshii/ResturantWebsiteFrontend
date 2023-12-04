import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
            <SubHeading title="Contact" />
            <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
            <div className="app__wrapper-content">
                <p className="p__opensans">123 Gourmet Avenue, Culinary Metropolis</p>
                <br/>
                <div className="map__iframe">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3024.2369522068684!2d-74.00857492380132!3d40.71279997139363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sin!4v1701633508537!5m2!1sen!2sin"
                        width="400"
                        height="300"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
            <button
                type="button"
                className="custom__button"
                style={{ marginTop: '2rem' }}
                onClick={() => window.location.href = 'https://maps.app.goo.gl/jkasTSSBBJg7hDk47'}
            >
                Get Direction
            </button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.findus} alt="finus_img" />
        </div>
    </div>
);

export default FindUs;


import React from 'react';

const Header = ({ restaurantData }) => {
    return (
        <div className="">
            {restaurantData ? (
                <>
                    <h1>{restaurantData.name}</h1>
                    <p>{restaurantData.location.address}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Header;

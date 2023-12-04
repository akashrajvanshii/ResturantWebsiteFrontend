import {useEffect } from 'react';
import axios from 'axios';

const DataFetching = ({ onDataFetched }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/restaurantData.json');
                onDataFetched(response.data.restaurant);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [onDataFetched]);

    return null;
};

export default DataFetching;

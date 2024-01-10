// src/components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TiffinProviderList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating fetching restaurant data from an API
    axios.get('https://api.example.com/restaurants')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Address: {restaurant.address}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;

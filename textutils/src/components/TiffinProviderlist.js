// src/components/RestaurantList.js
// import React from 'react';
// import './restrostyle.css';

// const TiffinProviderlist = () => {
//   // Fetch restaurant data or use static data
//   const restaurants = [
//     { id: 1, name: 'Restaurant A', cuisine: 'Italian' },
//     { id: 2, name: 'Restaurant B', cuisine: 'Mexican' },
//     // Add more restaurant data as needed
//   ];

//   return (
//     <div>
//       <h2>Restaurants</h2>
//       <ul>
//         {restaurants.map((restaurant) => (
//           <li key={restaurant.id}>
//             {restaurant.name} - Cuisine: {restaurant.cuisine}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TiffinProviderlist;

// src/components/RestaurantList.js
import React from 'react';


const TiffinProviderlist = () => {
  // Static restaurant data
  const restaurants = [
    { id: 1, name: 'Restaurant A', cuisine: 'Italian', address: '123 Main St' },
    { id: 2, name: 'Restaurant B', cuisine: 'Mexican', address: '456 Oak St' },
    // Add more restaurant data as needed
  ];

  return (
    <div>
      <h2>Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <h3>{restaurant.name}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Address: {restaurant.address}</p>
            {/* Add more details as needed */}
            <button>View Menu</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiffinProviderlist;



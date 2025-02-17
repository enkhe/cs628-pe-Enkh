import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css"; // Ensure styles are applied

const CitiesList = ({ cities }) => {
  const navigate = useNavigate();

  // Debugging: Check if cities array is being received
  console.log("Cities List in CitiesList Component:", cities);

  // Function to get flag image from public folder
  const getFlagImage = (code) => `/flags/${code}.png`;

  return (
    <div>
      <h2>List of Cities</h2>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button onClick={() => navigate("/")}>🏠 Home</button>
      </div>

      {/* Cities List */}
      <ul className="cities-list">
        {cities.length === 0 ? (
          <p>No cities added yet.</p>
        ) : (
          cities.map((city, index) => (
            <li key={index} className="city-item">
              {/* Ensure flag image loads correctly */}
              {city.countryCode && (
                <img
                  src={getFlagImage(city.countryCode)}
                  alt={`${city.country} flag`}
                  className="city-flag"
                />
              )}
              {/* Ensure city name is encoded properly for URL */}
              <Link to={`/cities/${encodeURIComponent(city.name.normalize("NFC"))}`} className="city-link">
                {city.name}, {city.country} (Pop: {city.population.toLocaleString()})
              </Link>
            </li>
          ))
        )}
      </ul>

      {/* Additional Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={() => navigate("/add-city")}>➕ Add City</button>
      </div>
    </div>
  );
};

export default CitiesList;





// import React from "react";
// import { Link } from "react-router-dom";

// const CitiesList = ({ cities }) => {
//   return (
//     <div>
//       <h2>Cities List</h2>
//       <ul>
//         {cities.map((city) => (
//           <li key={city.id}>
//             <Link to={`/cities/${city.id}`}>{city.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CitiesList;

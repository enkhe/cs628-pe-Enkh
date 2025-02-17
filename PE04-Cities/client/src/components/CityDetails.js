

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css"; // Ensure styles are applied

const CityDetails = ({ cities }) => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  // Debugging: Check if cityName is being received correctly
  console.log("City Name from URL:", cityName);
  console.log("Cities List:", cities);

  // Ensure cityName is properly decoded and normalized
  const decodedCityName = decodeURIComponent(cityName || "").normalize("NFC").toLowerCase();

  // Find the selected city in the cities array
  const city = cities.find(
    (c) => c.name.normalize("NFC").toLowerCase() === decodedCityName
  );

  // Debugging: Check if the city was found
  console.log("Matching City:", city);

  // Function to get flag image from public folder
  const getFlagImage = (code) => `/flags/${code}.png`;

  if (!city) {
    return (
      <div>
        <h2>City Not Found</h2>
        <p>The city "{decodeURIComponent(cityName || "undefined")}" could not be found.</p>
        <button onClick={() => navigate("/cities")}>📜 Go to Cities List</button>
      </div>
    );
  }

  return (
    <div>
      <h2>City Details</h2>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button onClick={() => navigate("/")}>🏠 Home</button>
        <button onClick={() => navigate("/cities")}>📜 Cities List</button>
      </div>

      {/* City Details Section */}
      <div className="city-details-container">
        {city.countryCode && (
          <img src={getFlagImage(city.countryCode)} alt={`${city.country} flag`} className="city-detail-flag" />
        )}
        <h3>{city.name}, {city.country}</h3>
        <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CityDetails;




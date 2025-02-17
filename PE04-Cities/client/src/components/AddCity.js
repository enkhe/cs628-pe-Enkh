
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { topCities } from "../data/cities";
import { countries } from "../data/countries";
import "../styles.css"; // Ensure styles are applied

const AddCity = ({ setCities }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [population, setPopulation] = useState(""); // Keep as string for controlled input
  const navigate = useNavigate();
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Format number with commas for display
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Select a city and populate all related fields
  const handleCitySelect = (city) => {
    setName(city.name);
    setCountry(city.country);
    setCountryCode(city.countryCode);
    setPopulation(city.population.toString()); // ✅ Convert population to a plain number string
    setIsCityDropdownOpen(false);
  };

  // Select a country and set the flag
  const handleCountrySelect = (c) => {
    setCountry(c.name);
    setCountryCode(c.code);
    setIsCountryDropdownOpen(false);
  };

  // Function to get flag image from public folder
  const getFlagImage = (code) => `/flags/${code}.png`;

  // Ensure all fields are filled before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !country || !population) {
      alert("All fields are required!");
      return;
    }

    setCities((prev) => [...prev, { id: prev.length + 1, name, country, countryCode, population }]);
    navigate("/cities"); // Redirect to the cities list after adding a city
  };

  return (
    <div>
      <h2>Add City</h2>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button onClick={() => navigate("/")}>🏠 Home</button>
      </div>

      {/* City Selection with Images */}
      <label>Choose a City (Optional):</label>
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>
          {name ? (
            <>
              {countryCode && <img src={getFlagImage(countryCode)} alt="flag" className="dropdown-flag" />}
              {name}, {country} (Pop: {formatNumber(population)})
            </>
          ) : "Select a city"}
        </div>
        {isCityDropdownOpen && (
          <ul className="dropdown-list">
            {topCities.map((city, index) => (
              <li key={index} onClick={() => handleCitySelect(city)} className="dropdown-item">
                {city.countryCode && <img src={getFlagImage(city.countryCode)} alt="flag" className="dropdown-flag" />}
                {city.name}, {city.country} (Pop: {formatNumber(city.population)})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* City Name Input */}
      <label>City Name:</label>
      <input
        type="text"
        placeholder="Enter city name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Country Selection with Flags */}
      <label>Country:</label>
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}>
          {country ? (
            <>
              {countryCode && <img src={getFlagImage(countryCode)} alt="flag" className="dropdown-flag" />}
              {country}
            </>
          ) : "Select a country"}
        </div>
        {isCountryDropdownOpen && (
          <ul className="dropdown-list">
            {countries.map((c, index) => (
              <li key={index} onClick={() => handleCountrySelect(c)} className="dropdown-item">
                <img src={getFlagImage(c.code)} alt="flag" className="dropdown-flag" />
                {c.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Population Input */}
      <label>Population:</label>
      <input
        type="number"
        placeholder="Enter population"
        value={population}
        onChange={(e) => setPopulation(e.target.value.replace(/\D/g, ""))}
      />

      {/* Submit Button */}
      <button onClick={handleSubmit}>Add City</button>
    </div>
  );
};

export default AddCity;




/**
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { topCities } from "../data/cities";
import { countries } from "../data/countries";
import "../styles.css"; // Ensure styles are applied

const AddCity = ({ setCities }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [population, setPopulation] = useState(""); // Keep population as a string initially
  const navigate = useNavigate();
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Select a city and populate all related fields
  const handleCitySelect = (city) => {
    setName(city.name);
    setCountry(city.country);
    setCountryCode(city.countryCode);
    setPopulation(city.population ? String(city.population) : ""); // ✅ Ensure population is a string
    setIsCityDropdownOpen(false);
  };

  // Select a country and set the flag
  const handleCountrySelect = (c) => {
    setCountry(c.name);
    setCountryCode(c.code);
    setIsCountryDropdownOpen(false);
  };

  // Function to get flag image from public folder
  const getFlagImage = (code) => `/flags/${code}.png`;

  // Ensure all fields are filled before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !country || !population) {
      alert("All fields are required!");
      return;
    }

    setCities((prev) => [...prev, { id: prev.length + 1, name, country, population }]);
    navigate("/cities"); // Redirect to the cities list after adding a city
  };

  return (
    <div>
      <h2>Add City</h2>

      <label>Choose a City (Optional):</label>
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>
          {name ? (
            <>
              {countryCode && <img src={getFlagImage(countryCode)} alt="flag" className="dropdown-flag" />}
              {name}, {country} (Pop: {population})
            </>
          ) : "Select a city"}
        </div>
        {isCityDropdownOpen && (
          <ul className="dropdown-list">
            {topCities.map((city, index) => (
              <li key={index} onClick={() => handleCitySelect(city)} className="dropdown-item">
                {city.countryCode && <img src={getFlagImage(city.countryCode)} alt="flag" className="dropdown-flag" />}
                {city.name}, {city.country} (Pop: {city.population})
              </li>
            ))}
          </ul>
        )}
      </div>

      <label>City Name:</label>
      <input
        type="text"
        placeholder="Enter city name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Country:</label>
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}>
          {country ? (
            <>
              {countryCode && <img src={getFlagImage(countryCode)} alt="flag" className="dropdown-flag" />}
              {country}
            </>
          ) : "Select a country"}
        </div>
        {isCountryDropdownOpen && (
          <ul className="dropdown-list">
            {countries.map((c, index) => (
              <li key={index} onClick={() => handleCountrySelect(c)} className="dropdown-item">
                <img src={getFlagImage(c.code)} alt="flag" className="dropdown-flag" />
                {c.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <label>Population:</label>
      <input
        type="number"
        placeholder="Enter population"
        value={population}
        onChange={(e) => setPopulation(e.target.value.replace(/\D/g, ""))} // ✅ Only allows numbers
      />

      <button onClick={handleSubmit}>Add City</button>
    </div>
  );
};

export default AddCity;



*/



/* 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { topCities } from "../data/cities";
import { countries } from "../data/countries";
import "../styles.css"; // Ensure you have CSS for custom styling

const AddCity = ({ setCities }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleCitySelect = (event) => {
    const city = topCities.find((c) => c.name === event.target.value);
    if (city) {
      setName(city.name);
      setCountry(city.country);
      setPopulation(city.population);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !country || !population) {
      alert("All fields are required!");
      return;
    }

    setCities((prev) => [...prev, { id: prev.length + 1, name, country, population }]);
    navigate("/cities");
  };

  return (
    <div>
      <h2>Add City</h2>

      <label>Choose a City (Optional):</label>
      <select onChange={handleCitySelect}>
        <option value="">-- Select a city --</option>
        {topCities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name} ({city.country})
          </option>
        ))}
      </select>

      <label>City Name:</label>
      <input
        type="text"
        placeholder="Enter city name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Country:</label>
      <div className="custom-dropdown">
        <select
          className="flag-dropdown"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">-- Select a country --</option>
          {countries.map((c, index) => (
            <option key={index} value={c.name}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>
      </div>

      <label>Population:</label>
      <input
        type="number"
        placeholder="Enter population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />

      <button onClick={handleSubmit}>Add City</button>
    </div>
  );
};

export default AddCity;
*/



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { topCities } from "../data/cities";
// import { countries } from "../data/countries";

// const AddCity = ({ setCities }) => {
//   const [name, setName] = useState("");
//   const [country, setCountry] = useState("");
//   const [population, setPopulation] = useState("");
//   const navigate = useNavigate();

//   const handleCitySelect = (event) => {
//     const city = topCities.find((c) => c.name === event.target.value);
//     if (city) {
//       setName(city.name);
//       setCountry(city.country);
//       setPopulation(city.population);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !country || !population) {
//       alert("All fields are required!");
//       return;
//     }

//     setCities((prev) => [...prev, { id: prev.length + 1, name, country, population }]);
//     navigate("/cities");
//   };

//   return (
//     <div>
//       <h2>Add City</h2>

//       {/* Optional City Selection */}
//       <label>Choose a City (Optional):</label>
//       <select onChange={handleCitySelect}>
//         <option value="">-- Select a city --</option>
//         {topCities.map((city, index) => (
//           <option key={index} value={city.name}>
//             {city.name} ({city.country})
//           </option>
//         ))}
//       </select>

//       {/* City Name Input */}
//       <label>City Name:</label>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       {/* Country Dropdown (Editable) */}
//       <label>Country:</label>
//       <select value={country} onChange={(e) => setCountry(e.target.value)}>
//         <option value="">-- Select a country --</option>
//         {countries.map((c, index) => (
//           <option key={index} value={c.name}>
//             {c.flag} {c.name}
//           </option>
//         ))}
//       </select>

//       {/* Population Input */}
//       <label>Population:</label>
//       <input
//         type="number"
//         placeholder="Enter population"
//         value={population}
//         onChange={(e) => setPopulation(e.target.value)}
//       />

//       {/* Submit Button */}
//       <button onClick={handleSubmit}>Add City</button>
//     </div>
//   );
// };

// export default AddCity;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { topCities } from "../data/cities";
// import { countries } from "../data/countries";

// const AddCity = ({ setCities }) => {
//   const [name, setName] = useState("");
//   const [country, setCountry] = useState("");
//   const [population, setPopulation] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !country || !population) {
//       alert("All fields are required!");
//       return;
//     }

//     setCities((prev) => [
//       ...prev,
//       { id: prev.length + 1, name, country, population }
//     ]);

//     navigate("/cities"); // Redirect to Cities List after adding
//   };

//   return (
//     <div>
//       <h2>Add City</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="City Name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
//         <input type="number" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} required />
//         <button type="submit">Add City</button>
//       </form>
//     </div>
//   );
// };

// export default AddCity;





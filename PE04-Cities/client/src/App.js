
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import "./styles.css";

const App = () => {
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "733,919" }
  ]);

  return (
    <Router>
      <div className="container">
        <header>
          <h1>Cities Application</h1>
          <nav>
            <NavLink to="/cities" className={({ isActive }) => (isActive ? "active" : "")}>
              Cities List
            </NavLink>
            <NavLink to="/add-city" className={({ isActive }) => (isActive ? "active" : "")}>
              Add City
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/cities" element={<CitiesList cities={cities} />} />
            <Route path="/cities/:cityName" element={<CityDetails cities={cities} />} />

            <Route path="/add-city" element={<AddCity setCities={setCities} />} />
            <Route path="/" element={<Navigate to="/cities" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import CitiesList from "./components/CitiesList";
// import AddCity from "./components/AddCity";
// import CityDetails from "./components/CityDetails";
// import "./styles.css";

// const App = () => {
//   const [cities, setCities] = useState([
//     { id: 1, name: "Seattle", country: "USA", population: "733,919" }
//   ]);

//   return (
//     <Router>
//       <div className="container">
//         <h1>Cities Application</h1>
//         <nav>
//           <a href="/cities">Cities List</a> | <a href="/add-city">Add City</a>
//         </nav>
//         <Routes>
//           <Route path="/cities" element={<CitiesList cities={cities} />} />
//           <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
//           <Route path="/add-city" element={<AddCity setCities={setCities} />} />
//           <Route path="/" element={<Navigate to="/cities" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

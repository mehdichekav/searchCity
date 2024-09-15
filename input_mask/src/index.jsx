import { useState } from "react";
import cities from "./cities.json";


import { IoSearchOutline } from "react-icons/io5";

const Input = ({ handleChange, hint }) => {
  const [searchCity, setSearchCity] = useState("");
  const [filteredCity, setFilteredCity] = useState(cities);


  const handelChange = (e) => {
    const searchCity = e.target.value;
    setSearchCity(searchCity);

    
      
      const filteredCity = cities.filter((city) =>
        city.toLowerCase().includes(searchCity.toLowerCase())
      );
  
   
     
  
    setFilteredCity(filteredCity);
  };
    
  return (
    <div className="input">
      <label htmlFor="input">
      {hint}
      </label>

      <input type="text" id="input" onChange={handelChange} />

      <div className="searchIcon">
        <IoSearchOutline />
      </div>

     
      <div className="search">
        {filteredCity.length === 0 ? (
          <p>No city found</p>
        ) : (
           <ul>
            {filteredCity.map((city) => (
              <li key={city}>{city}</li>
            ))}
            
          </ul> 


          


        )}
      </div>
    </div>
  );
};

export default Input;

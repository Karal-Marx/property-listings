import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Property from "./components/Property"
import FetchPropertiesData from "./components/fetchPropertyData"
import ViewProperty from "./components/ViewProperty";
import AddProperty from "./components/AddProperty";




export default function App() {
    const [filterOption, setFilterOption] = useState("");
    const [properties, setProperties] = useState([]);

    
    useEffect(() => {
      fetch("https://mocki.io/v1/d3f7500a-9c60-4796-8a9b-356cfbff40a7")
        .then((res) => res.json() )
        .then((data)=>setProperties(data))
    
    }, [])
    
    const handleAddProperty = (newProperty) => {
        setProperties(prev => [newProperty, ...prev]);
    };
    
    let sortedData = [...properties];
    if (filterOption === "type") {
        sortedData.sort((a, b) => a.type.localeCompare(b.type));
    } else if (filterOption === "lowToHigh") {
        sortedData.sort((a, b) => a.price - b.price);
    } else if (filterOption === "highToLow") {
        sortedData.sort((a, b) => b.price - a.price);
  }
    return (
        <>
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element = {
                        <>
                            <div className="title">
                                <span>Property Listings</span>
                            </div>

                            <div className="filter-bar" style={{ margin: "20px 85px" }}>
                                <label htmlFor="filterSelect">Filter by: </label>
                                <select
                                    id="filterSelect"
                                    value={filterOption}
                                    onChange={(e) => setFilterOption(e.target.value)}
                                >
                                <option value="">-- Select --</option>
                                <option value="type">Type</option>
                                <option value="lowToHigh">Cost (Low to High)</option>
                                <option value="highToLow">Cost (High to Low)</option>
                                </select>
                            </div>
                            

                            <main className="property-list">
                                
                                {sortedData.map(property => (
                                    <Property key={property.id} {...property} />
                                ))}
                            </main>
                        </>
                    }
                />
                <Route path="/add" element={<AddProperty onAdd={handleAddProperty}/>}/>
                <Route path="/property/:id" element={<ViewProperty data = {properties}/>}/>
                
            </Routes>
        </>
        
    );
}
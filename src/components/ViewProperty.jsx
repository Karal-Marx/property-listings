import { useParams } from "react-router-dom";
import FetchPropertiesData from "./fetchPropertyData";

import { useNavigate } from "react-router-dom";



export default function ViewProperty({data}) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate(`/`)
    }
    const { id } = useParams();
    /* const { data, loading, error } = FetchPropertiesData("https://mocki.io/v1/d3f7500a-9c60-4796-8a9b-356cfbff40a7"); */

    /* if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading property data.</p>; */

    if (!data || !Array.isArray(data)) {
        return <p>No property data available.</p>;
    }
    const property = data.find((prop) => prop.id.toString() === id);

    if (!property) return <p>Property not found.</p>;

    return (
        <div style={{ padding: "40px" }}>
            <h2>Property Details</h2>
            <img
                src={property.image}
                alt="Property"
                style={{ width: "100%", maxWidth: "600px", marginBottom: "20px", borderRadius: "10px" }}
            />
            <p><strong>Type:</strong> {property.type}</p>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Description:</strong> {property.description}</p>
            <p><strong>Price:</strong> ${property.price}</p>
            <button className="back-button" onClick={handleViewClick}>Back to Home Page</button>
        </div>
    );
}
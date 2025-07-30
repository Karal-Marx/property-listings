import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProperty({ onAdd }) {
    const [formData, setFormData] = useState({
        image: "",
        name: "",
        type: "",
        price: "",
        description:"",
        location: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, type, price, location, description, image } = formData;
        const newProperty = {
            id: crypto.randomUUID(),
            name,
            type,
            price: parseFloat(price),
            location,
            description,
            image
        };
        onAdd(newProperty);
        navigate("/");
    };

    return (
        <div className="add-property-container">
            <h2 className="add-property-heading">Add Property</h2>
            <form onSubmit={handleSubmit} className="add-property-form">
                <input
                    name="image"
                    placeholder="Image-URL"
                    value={formData.image}
                    onChange={handleChange}
                    className="add-property-image"
                    required
                />
                <input
                    name="name"
                    placeholder="Property Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="add-property-input"
                    required
                />

                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="add-property-input"
                >
                    <option value="Plot">Plot</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Commercial">Commercial</option>
                    <option value="other">Other</option>
                </select>

                <input
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="add-property-input"
                    required
                />

                <input
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="add-property-desc"
                    required
                />

                <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="add-property-input"
                    required
                />

                <button type="submit" className="add-property-button" >Submit</button>
            </form>
        </div>
    );
}
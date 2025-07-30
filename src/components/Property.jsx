import { useNavigate } from "react-router-dom";

export default function Property(props) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate(`/property/${props.id}`)
    }

    return (
        <article className="property-entry">
            <span className="property-type">{props.type}</span>
            <span className="property-location">{props.location}</span>
            <span className="property-desc">{props.description}</span>
            <div className="property-price">
                <span>${props.price}</span>
                <button className="view-button" onClick={handleViewClick}>View</button>
            </div>
            
        </article>
    )
}
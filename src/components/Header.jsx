import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light')

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
    };
    return (
        <header>
            <nav className="navbar">
                <span>Property Listring Dashboard</span>
                <div className="navbar-buttons">
                    <button className="theme" onClick={handleToggle}>Change Mode</button>
                    <button onClick={()=>{navigate("/add")}}>Add Property</button>
                </div>
            </nav>
        </header>
    )
}
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function NavForm() {
    const [activeState, setActiveState] = useState(0); // Track the active state

    const handleStateClick = (index: number) => {
        setActiveState(index);
    };
    return(
        <>
           <div className="nav-form">
            <div className="h-active"></div>
                <div className="hr"></div>
                <div className="states">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className={`state-circle ${activeState === index ? 'active' : ''}`}
                            onClick={() => handleStateClick(index)}
                        >
                            {activeState >= index && <FaCheck />}
                        </div>
                    ))}
                </div>
            </div>
        </>
        
    )
}
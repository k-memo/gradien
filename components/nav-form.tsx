import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function NavForm({ formStep, setFormStep }) {
  const [activeState, setActiveState] = useState(0); // Track the active state
  useEffect(() => {
    setActiveState(formStep);
  }, [formStep]);

  const handleStateClick = index => {
    setActiveState(index);
    setFormStep(index);
  };

  // Calculate the width of .h-active based on the active state
  const activeWidth = `${(formStep + 1) * 50}%`;

  return (
    <div className="nav-form">
      <div className="h-active" style={{ width: activeWidth }}></div>
      <div className="hr"></div>
      <div className="states">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`state-circle ${activeState >= index ? 'active' : ''}`}
            onClick={() => handleStateClick(index)}
          >
            {activeState >= index && <FaCheck />}
          </div>
        ))}
      </div>
    </div>
  );
}

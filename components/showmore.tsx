import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

export default function TestComponent() {
  const [showMoreText, setShowMoreText] = useState(false);
  const toggleShowMoreText = () => {
    setShowMoreText(!showMoreText);
  };

  return (
    <div className="explanation">
      <div className="ex-heading">
        <div>
          <h2>Explanation </h2>
        </div>

        <div>
          <button className="more" onClick={toggleShowMoreText}>
            {showMoreText ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>

      {/* Anzeige des zusätzlichen Textes basierend auf dem Zustand */}
      {showMoreText && (
        <p>Hier ist der zusätzliche Text, den Sie sehen möchten.</p>
      )}
      {/* Button zum Umschalten des zusätzlichen Textes */}
    </div>
  );
}

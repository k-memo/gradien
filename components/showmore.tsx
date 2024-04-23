import React, { useState } from 'react';

export default function TestComponent() {
  const [showMoreText, setShowMoreText] = useState(false);
  const toggleShowMoreText = () => {
    setShowMoreText(!showMoreText);
  };

  return (
    <div className='explanation'>
      <h2>Explanation     
        <button className='more' onClick={toggleShowMoreText}>
        {showMoreText ? '^' : '+'}
        </button>
      </h2>
      {/* Anzeige des zusätzlichen Textes basierend auf dem Zustand */}
      {showMoreText && (
        <p>Hier ist der zusätzliche Text, den Sie sehen möchten.</p>
      )}
      {/* Button zum Umschalten des zusätzlichen Textes */}
 
    </div>
  );
}

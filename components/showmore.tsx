import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

export default function ShowMore(props) {
  const { header, explanation } = props; // Destructure props here
  const [showMoreText, setShowMoreText] = useState(false);
  const toggleShowMoreText = () => {
    setShowMoreText(!showMoreText);
  };

  return (
    <div className="explanation">
      <div className="ex-heading">
        <div>
          <h2>{header}</h2>
        </div>

        <div>
          <button className="more" onClick={toggleShowMoreText}>
            {showMoreText ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>

      {showMoreText && <p>{explanation}</p>}
    </div>
  );
}

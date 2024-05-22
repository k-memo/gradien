import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function ShowMore(props) {
  const { header, explanation } = props;
  const [showMoreText, setShowMoreText] = useState(true);
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
            {showMoreText ? (
              <IoIosArrowUp data-testid="arrow-icon" />
            ) : (
              <IoIosArrowDown data-testid="arrow-icon" />
            )}
          </button>
        </div>
      </div>

      {showMoreText && <p>{explanation}</p>}
    </div>
  );
}

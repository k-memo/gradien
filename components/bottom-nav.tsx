import Link from 'next/link';
import React, { useState } from 'react';
import { SlPlus } from 'react-icons/sl';
import { FiBookmark } from 'react-icons/fi';
import { RiInformationLine } from 'react-icons/ri';
import { useSession } from 'next-auth/react';

export default function Contact() {
  const { data: session } = useSession();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleBookmarkClick = () => {
    if (session) {
      window.location.href = '/savedPalettes';
    } else {
      // User is not logged in, show login prompt
      setShowLoginPrompt(true);
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li key="home">
            <button className="saved-link" onClick={handleBookmarkClick}>
              <FiBookmark />
            </button>
          </li>
          <li key="about">
            <Link href={'/generate'}>
              <SlPlus />
            </Link>
          </li>
          <li key="contact">
            <Link href={'/information'}>
              <RiInformationLine />
            </Link>
          </li>
        </ul>
      </nav>

      {showLoginPrompt && (
        <div className="login-prompt-container">
          <div className="login-prompt">
            <p>Please log in to view saved palettes</p>
            <button onClick={() => setShowLoginPrompt(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

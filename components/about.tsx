import React from 'react';
import Gradien from '../public/blurgradien.png';

export default function About() {
  return (
    <>
      <div className="about-text">
        <div className="blurgradien">
          <img src={Gradien.src} alt="gradien box" />
        </div>
        <div className="about-content">
          <h2>WHY YOU NEED COLOR ANALYSIS</h2>
          <div className="bullet-points">
            <div className="points">
              <div>
                <span className="emoji">🎨</span>
                <h4>PERSONALIZED STYLE</h4>
                <p>Discover your colors for effortless, flattering outfits.</p>
              </div>
              <div>
                <span className="emoji">👔</span>
                <h4>PROFESSIONAL IMAGE</h4>
                <p>Project competence with a polished appearance.</p>
              </div>
            </div>
            <div className="points">
              <div>
                <span className="emoji">💃</span>
                <h4>CONFIDENCE BOOST</h4>
                <p>Feel confident and make lasting impressions.</p>
              </div>
              <div>
                <span className="emoji">👗</span>
                <h4>VERSATILE COORDINATION</h4>
                <p>Mix and match effortlessly for cohesive style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

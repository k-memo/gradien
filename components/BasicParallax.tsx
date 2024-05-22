// components/BasicParallax.js
import React from 'react';
import { Parallax } from 'react-parallax';

const BasicParallax = () => {
  return (
    <Parallax bgImage="../public/vector2.png" strength={500}>
      <div style={{ height: '500px' }}>
        <div>Content Goes Here</div>
      </div>
    </Parallax>
  );
};

export default BasicParallax;

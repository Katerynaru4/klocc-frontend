import React from 'react';
import paw from './paw.png';

const genarateTraces = (initX, initY, circleAngle, initTraceDirection) => {
  const traceCoordinates = [];
  const initDelay = 1;
  const width = 250;
  const height = 150;
  const deltaDelay = 0.5;
  let deltaAngle = -10;

  if (window.screen.width < 900) {
    deltaAngle = -5;
  }
  if (window.screen.width < 500) {
    deltaAngle = -3;
  }
  for (let i = 0; i < 20; i++) {
    const direction = initTraceDirection + deltaAngle * i;
    const radAngle = (circleAngle + deltaAngle * i) * (Math.PI / 180);
    let x = initX - width * Math.sin(radAngle);
    let y = initY - height * Math.cos(radAngle);

    if (i % 2 === 1) {
      x += 10;
      y += 10;
    }

    traceCoordinates.push({
      x,
      y,
      direction,
      delay: initDelay + deltaDelay * i,
    });
  }
  return traceCoordinates;
};

const CatTraceAnimation = () => {
  let x = -50;
  if (window.screen.width < 1200) {
    x = -100;
  }

  const y = -30;
  const circleAngle = 280;
  const initTraceDirection = 180;

  if (window.screen.width < 900) {
    x = -200;
  }

  return (
    <div className="animation-container">
      {genarateTraces(x, y, circleAngle, initTraceDirection).map(
        ({ x, y, direction, delay }, i) => (
          <span
            key={i}
            className="single-cat-trace"
            style={{
              top: y,
              right: x,
              transform: `rotate(${direction}deg)`,
              animationDelay: `${delay}s`,
            }}
          >
            <img className="paw-image" src={paw} />
          </span>
        )
      )}
    </div>
  );
};

export default CatTraceAnimation;

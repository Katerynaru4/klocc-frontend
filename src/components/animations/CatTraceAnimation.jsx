import React from 'react';
import paw from './paw.png';

const genarateTraces = (initX, initY, circleAngle, initTraceDirection) => {
  let traceCoordinates = [];
  let initDelay = 1;
  let width = 250;
  let height = 150;
  let deltaDelay = 0.5;
  let deltaAngle = -10;

  for (let i = 0; i < 10; i++) {
    let direction = initTraceDirection + deltaAngle * i;
    let radAngle = (circleAngle + deltaAngle * i) * (Math.PI / 180);
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
  let y = -30;
  let circleAngle = 280;
  let initTraceDirection = 180;

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

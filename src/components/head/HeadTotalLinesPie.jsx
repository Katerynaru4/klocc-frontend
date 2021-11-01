import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

let config = { displaylogo: false };

let layout = {
  height: 400,
  width: 500,
  font: { size: 14 },
  modebar: { bgcolor: 'transparent', color: 'black' },
};

const HeadTotalLinesPie = ({ data }) => {
  let pieData = [
    {
      values: [data.total.code, data.total.comments, data.total.blanks],
      labels: [`Code`, `Comments `, `Blanks `],
      type: 'pie',
      textfont: { size: 9 },
    },
  ];
  let totalLines = Object.values(data.total).reduce(
    (acc, value) => acc + value,
    0
  );

  layout.title = `Line's types (total ${totalLines})`;

  const Plot = createPlotlyComponent(Plotly);

  return (
    <>
      {React.createElement(Plot, {
        data: pieData,
        layout,
        config,
      })}
    </>
  );
};

export default HeadTotalLinesPie;

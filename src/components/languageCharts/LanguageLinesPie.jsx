import React from 'react';
import Plotly from 'plotly.js-basic-dist';

import createPlotlyComponent from 'react-plotly.js/factory';

let layout = {
  height: 400,
  width: 500,
  font: { size: 14 },
  title: "Line's types",
  modebar: { bgcolor: 'transparent', color: 'black' },
};

let config = { displaylogo: false };

const LanguageLinesPie = ({ totalLinesData }) => {
  let pieData = [
    {
      type: 'pie',
      values: [
        totalLinesData.code,
        totalLinesData.comments,
        totalLinesData.blanks,
      ],
      labels: ['Code', 'Comments', 'Blanks'],
      textfont: { size: 9 },
    },
  ];

  const Plot = createPlotlyComponent(Plotly);

  return (
    <div className="language__pie">
      {React.createElement(Plot, {
        data: pieData,
        layout,
        config
      })}
    </div>
  );
};

export default React.memo(LanguageLinesPie);

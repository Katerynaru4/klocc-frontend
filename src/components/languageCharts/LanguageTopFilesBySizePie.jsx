import React from 'react';
import Plotly from 'plotly.js-basic-dist';

import createPlotlyComponent from 'react-plotly.js/factory';

let layout = {
  height: 400,
  width: 550,
  font: { size: 14 },
  title: 'Largest files',
  legend: {
    font: { size: 13 },
  },
  modebar: { bgcolor: 'transparent', color: 'black' },
};

let config = { displaylogo: false };

const LanguageTopFilesBySizePie = ({ filesData }) => {
  let labels = filesData.map((file) => file.name);
  let values = filesData.map((file) => file.code + file.comments + file.blanks);

  if (filesData.length > 10) {
    labels = labels.slice(0, 9).concat('other files');

    values = values
      .slice(0, 9)
      .concat(values.slice(10).reduce((acc, value) => acc + value, 0));
  }

  let pieData = [
    {
      type: 'pie',
      values,
      labels,
      textfont: { size: 9 },
    },
  ];

  const Plot = createPlotlyComponent(Plotly);

  return (
    <div className="language__pie">
      {React.createElement(Plot, {
        data: pieData,
        layout,
        config,
      })}
    </div>
  );
};

export default React.memo(LanguageTopFilesBySizePie);

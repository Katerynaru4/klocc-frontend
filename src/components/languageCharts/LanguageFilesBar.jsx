import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

let config = { displaylogo: false };

const LanguageFilesBar = ({ filesData, language }) => {
  let layout = {
    title: `All ${language} files`,
    font: {
      size: 14,
    },
    showlegend: true,
    xaxis: {
      showticklabels: filesData.length < 15,
      tickfont: { size: 8 },
      tickangle: -15,
    },
    bargap: 0.05,
    barmode: 'stack',
    width: 1250,
    modebar: { bgcolor: 'transparent', color: 'black', remove: [] },
  };

  let x = filesData.map((file) => file.path);

  let code = {
    x,
    y: filesData.map((file) => file.code),
    name: 'Code',
    type: 'bar',
  };

  let comments = {
    x,
    y: filesData.map((file) => file.comments),
    name: 'Comments',
    type: 'bar',
  };

  let blanks = {
    x,
    y: filesData.map((file) => file.blanks),
    name: 'Blanks',
    type: 'bar',
  };

  let histogramData = [code, comments, blanks];

  const Plot = createPlotlyComponent(Plotly);
  return (
    <div className="language__bar">
      {React.createElement(Plot, {
        data: histogramData,
        layout,
        config,
      })}
    </div>
  );
};

export default React.memo(LanguageFilesBar);

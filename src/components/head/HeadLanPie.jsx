import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

let layout = {
  height: 400,
  width: 500,
  font: { size: 14 },
  title: 'Languages',
  modebar: { bgcolor: 'transparent', color: 'black' },
};
let config = { displaylogo: false };

let generateLanPieData = (languages, totalLines) => {
  let pieLanData = {};
  languages.forEach((language) => {
    let languageLines = Object.values(language.total).reduce(
      (acc, value) => acc + value,
      0
    );
    let persentage = (languageLines / totalLines) * 100;
    if (persentage >= 3) {
      pieLanData[language.name] = languageLines;
    } else {
      if (pieLanData.other) {
        pieLanData.other += languageLines;
      } else {
        pieLanData.other = languageLines;
      }
    }
  });
  return pieLanData;
};

const HeadLanPie = ({ languages, totalLines }) => {
  let pieLanData = generateLanPieData(languages, totalLines);

  let pieData = [
    {
      values: Object.values(pieLanData),
      labels: Object.keys(pieLanData),
      type: 'pie',
      textfont: { size: 9 },
    },
  ];

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

export default HeadLanPie;

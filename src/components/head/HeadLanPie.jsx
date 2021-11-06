import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import PropTypes from 'prop-types';
import config, {
  headLanPieLayout as layout,
} from '../../utils/charts.configuration';

const generateLanPieData = (languages, totalLines) => {
  const pieLanData = {};
  languages.forEach((language) => {
    const languageLines = Object.values(language.total).reduce(
      (acc, value) => acc + value,
      0
    );
    const persentage = (languageLines / totalLines) * 100;
    if (persentage >= 3) {
      pieLanData[language.name] = languageLines;
    } else if (pieLanData.other) {
      pieLanData.other += languageLines;
    } else {
      pieLanData.other = languageLines;
    }
  });
  return pieLanData;
};

const HeadLanPie = ({ languages, totalLines }) => {
  const pieLanData = generateLanPieData(languages, totalLines);

  const pieData = [
    {
      values: Object.values(pieLanData),
      labels: Object.keys(pieLanData),
      type: 'pie',
      textfont: { size: 9 },
    },
  ];

  const Plot = createPlotlyComponent(Plotly);
  return (
    <div className="head-pies__pie">
      {React.createElement(Plot, {
        data: pieData,
        layout,
        config,
      })}
    </div>
  );
};

HeadLanPie.propTypes = {
  languages: PropTypes.array,
  totalLines: PropTypes.number,
};

export default HeadLanPie;

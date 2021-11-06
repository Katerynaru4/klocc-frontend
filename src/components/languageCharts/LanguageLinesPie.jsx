import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import PropTypes from 'prop-types';
import config, {
  languageLinesPieLayout as layout,
} from '../../utils/charts.configuration';

const LanguageLinesPie = ({ totalLinesData }) => {
  const pieData = [
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
        config,
      })}
    </div>
  );
};

LanguageLinesPie.propTypes = {
  totalLinesData: PropTypes.object,
};

export default React.memo(LanguageLinesPie);

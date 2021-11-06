import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import PropTypes from 'prop-types';
import config, {
  createLanguageFilesBarLayout,
} from '../../utils/charts.configuration';

const LanguageFilesBar = ({ filesData, language }) => {
  const layout = createLanguageFilesBarLayout(
    `All ${language} files`,
    filesData.length < 15
  );

  const x = filesData.map((file) => file.path);

  const code = {
    x,
    y: filesData.map((file) => file.code),
    name: 'Code',
    type: 'bar',
  };

  const comments = {
    x,
    y: filesData.map((file) => file.comments),
    name: 'Comments',
    type: 'bar',
  };

  const blanks = {
    x,
    y: filesData.map((file) => file.blanks),
    name: 'Blanks',
    type: 'bar',
  };

  const histogramData = [code, comments, blanks];

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

LanguageFilesBar.propTypes = {
  filesData: PropTypes.array,
  language: PropTypes.string,
};

export default React.memo(LanguageFilesBar);

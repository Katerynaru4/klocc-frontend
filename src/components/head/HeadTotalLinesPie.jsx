import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import PropTypes from 'prop-types';
import config, {
  headTotalLinesPieLayout as layout,
} from '../../utils/charts.configuration';

const HeadTotalLinesPie = ({ data }) => {
  const pieData = [
    {
      values: [data.total.code, data.total.comments, data.total.blanks],
      labels: [`Code`, `Comments `, `Blanks `],
      type: 'pie',
      textfont: { size: 9 },
    },
  ];
  const totalLines = Object.values(data.total).reduce(
    (acc, value) => acc + value,
    0
  );

  layout.title = `Line's types (total ${totalLines})`;

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

HeadTotalLinesPie.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeadTotalLinesPie;

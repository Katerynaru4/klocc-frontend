import React from 'react';
import PropTypes from 'prop-types';
import RepoInfoTableRow from './RepoInfoTableRow.jsx';

const RepoInfoTable = ({ languages, totalLines }) => (
  <>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="charts__language-info-th">Language</th>
            <th className="charts__language-info-th">Files</th>
            <th className="charts__language-info-th">Code</th>
            <th className="charts__language-info-th">Comments</th>
            <th className="charts__language-info-th">Blanks</th>
            <th className="charts__language-info-th">Total</th>
            <th className="charts__language-info-th">Total %</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((language) => (
            <RepoInfoTableRow
              key={language.name}
              totalLines={totalLines}
              language={language}
            />
          ))}
        </tbody>
      </table>
    </div>
  </>
);

RepoInfoTable.propTypes = {
  languages: PropTypes.array,
  totalLines: PropTypes.number,
};

export default RepoInfoTable;

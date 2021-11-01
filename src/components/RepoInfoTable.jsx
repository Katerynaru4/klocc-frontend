import React from 'react';
import RepoInfoTableRow from './RepoInfoTableRow.jsx';

const RepoInfoTable = ({ languages, totalLines }) => {
  return (
    <>
      <div className="repo__table-container">
        <table>
          <thead>
            <tr>
              <th>Language</th>
              <th>Files</th>
              <th>Code</th>
              <th>Comments</th>
              <th>Blanks</th>
              <th>Total</th>
              <th>Total %</th>
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
};

export default RepoInfoTable;

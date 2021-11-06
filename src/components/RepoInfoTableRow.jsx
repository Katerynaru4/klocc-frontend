import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import LanguageFilesBar from './languageCharts/LanguageFilesBar.jsx';
import LanguageLinesPie from './languageCharts/LanguageLinesPie.jsx';
import LanguageTopFilesBySizePie from './languageCharts/LanguageTopFilesBySizePie.jsx';

const RepoInfoTableRow = ({ language, totalLines }) => {
  const [languageInfoOpen, setLanguageInfoOpen] = useState([]);

  const languageLines = Object.values(language.total).reduce(
    (acc, value) => acc + value,
    0
  );

  const languagePercentage = ((languageLines / totalLines) * 100).toFixed(2);

  const onToggleLanguage = (lan) => {
    if (languageLines === 0) return;
    if (languageInfoOpen.includes(lan)) {
      setLanguageInfoOpen(
        [...languageInfoOpen].filter((openLanInfo) => openLanInfo !== lan)
      );
    } else {
      setLanguageInfoOpen(languageInfoOpen.concat(lan));
    }
  };

  const rowCn = classNames({
    'charts__row-container': true,
    active: languageLines !== 0,
  });

  let title;
  if (languageInfoOpen.includes(language.name)) {
    title = languageLines === 0 ? null : 'Hide details';
  } else {
    title = 'Show details';
  }

  const rowChartsCn = classNames({
    charts__container: true,
    hideRow: !languageInfoOpen.includes(language.name),
    showRow: languageInfoOpen.includes(language.name),
    oneRow: language.files.length === 1,
  });

  return (
    <>
      <tr
        onClick={() => onToggleLanguage(language.name)}
        className={rowCn}
        title={title}
      >
        <td className="charts__language-info">{language.name}</td>
        <td className="charts__language-info">{language.files.length}</td>
        <td className="charts__language-info">{language.total.code}</td>
        <td className="charts__language-info">{language.total.comments}</td>
        <td className="charts__language-info">{language.total.blanks}</td>
        <td className="charts__language-info">{languageLines}</td>
        <td className="charts__language-info">{languagePercentage}</td>
      </tr>
      <tr className="charts__row">
        <td colSpan={7} className="charts__wrapper">
          <div className={rowChartsCn}>
            <div className="charts__pies">
              <LanguageLinesPie totalLinesData={language.total} />
              <LanguageTopFilesBySizePie filesData={language.files} />
            </div>
            {language.files.length === 1 ? null : (
              <LanguageFilesBar
                filesData={language.files}
                language={language.name}
              />
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

RepoInfoTableRow.propTypes = {
  language: PropTypes.object,
  totalLines: PropTypes.number,
};

export default RepoInfoTableRow;

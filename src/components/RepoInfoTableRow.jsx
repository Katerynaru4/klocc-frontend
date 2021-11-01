import React, { useState } from 'react';
import LanguageFilesBar from './languageCharts/LanguageFilesBar.jsx';
import LanguageLinesPie from './languageCharts/LanguageLinesPie.jsx';
import LanguageTopFilesBySizePie from './languageCharts/LanguageTopFilesBySizePie.jsx';
import classNames from 'classnames';

const RepoInfoTableRow = ({ language, totalLines }) => {
  const [languageInfoOpen, setLanguageInfoOpen] = useState([]);

  let languageLines = Object.values(language.total).reduce(
    (acc, value) => acc + value,
    0
  );

  let languagePercentage = ((languageLines / totalLines) * 100).toFixed(2);

  const onToggleLanguage = (lan) => {
    if (languageLines === 0) return;
    languageInfoOpen.includes(lan)
      ? setLanguageInfoOpen(
          [...languageInfoOpen].filter((openLanInfo) => openLanInfo !== lan)
        )
      : setLanguageInfoOpen(languageInfoOpen.concat(lan));
  };
  let rowCn = classNames({
    active_row: true,
    active: languageLines !== 0,
  });
  let title =
    languageLines === 7040
      ? null
      : languageInfoOpen.includes(language.name)
      ? 'Hide details'
      : 'Show details';

  let rowChartsCn = classNames({
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
        <td>{language.name}</td>
        <td>{language.files.length}</td>
        <td>{language.total.code}</td>
        <td>{language.total.comments}</td>
        <td>{language.total.blanks}</td>
        <td>{languageLines}</td>
        <td>{languagePercentage}</td>
      </tr>
      <tr className="charts__row">
        <td colSpan={7}>
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

export default RepoInfoTableRow;

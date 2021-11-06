import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import ReportForm from './components/head/ReportForm.jsx';
import AllRepoInfo from './components/AllRepoInfo.jsx';
import Loading from './components/head/Loading.jsx';
import { setReportForm, getReportForm } from './utils/localStorage';
import ErrorPanel from './components/head/ErrorPanel.jsx';
import getErrorText from './utils/utils';
import HeadInfo from './components/head/HeadInfo.jsx';
import fetchRepoInfo from './gateway/gateway';
import CatTraceAnimation from './components/animations/CatTraceAnimation.jsx';
import ChangeThemeBtn from './components/ChangeThemeBtn.jsx';
import { Context } from './AppContext.jsx';

const App = () => {
  const [userName, setUserName] = useState(getReportForm('userName') || '');
  const [repoName, setReponame] = useState(getReportForm('repoName') || '');
  const [provider, setProvider] = useState(
    getReportForm('provider') || 'github'
  );
  const [fetch, setFetch] = useState(false);
  const [repoData, setRepoData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState('false');
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState(true);

  const { isLight, toggleTheme } = useContext(Context);

  // Handler method for changing theme.
  const handleThemeToggle = (event) => {
    // If the preferred theme is light, but dark is active, or vice-versa.
    if ((event.matches && !isLight) || (!event.matches && isLight)) {
      toggleTheme();
    }
  };
  // Detecting preferred system theme on load. First, grab light theme query..
  const lightThemeMq = window.matchMedia('(prefers-color-scheme: light)');
  // ..then on load switch to preferred theme..
  useEffect(() => handleThemeToggle(lightThemeMq), []); // eslint-disable-line
  // ..and always change if theme changes while page is open (real-time update).
  lightThemeMq.addEventListener('change', handleThemeToggle);

  useEffect(() => {
    if (fetch) {
      setError(null);
      setShowDescription(false);
      setReportForm(userName, repoName, provider);
      setLoadingStatus('fetching');
      fetchRepoInfo(userName, repoName, provider)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Service is unavailable!');
          }
          return response.json();
        })
        .then((responseData) => {
          if (responseData.status === 200) {
            setRepoData(responseData.data);
          } else {
            throw new Error(getErrorText(responseData.message_code));
          }
        })
        .catch((catchedError) => {
          setError(catchedError.message);
        })
        .finally(() => {
          setFetch(false);
          setLoadingStatus('false');
        });
    }
  }, [fetch]);

  const contentCn = classNames({
    page: true,
    dark: !isLight,
  });

  return (
    <div className={contentCn}>
      <CatTraceAnimation />
      <ChangeThemeBtn toggleTheme={toggleTheme} isLight={isLight} />
      <div className="header">
        <HeadInfo
          showDescription={showDescription}
          setShowDescription={setShowDescription}
        />

        <ReportForm
          setFetch={setFetch}
          fetch={fetch}
          setUserName={setUserName}
          setReponame={setReponame}
          userName={userName}
          repoName={repoName}
          provider={provider}
          setProvider={setProvider}
          setRepoData={setRepoData}
        />

        <Loading status={loadingStatus} />

        <ErrorPanel error={error} />
      </div>
      <AllRepoInfo data={repoData} />
    </div>
  );
};
export default App;

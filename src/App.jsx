import React, { useState, useEffect } from 'react';
import ReportForm from './components/head/ReportForm.jsx';
import AllRepoInfo from './components/AllRepoInfo.jsx';
import Loading from './components/Loading.jsx';
import { setReportForm, getReportForm } from './utils/localStorage';
import ErrorPanel from './components/ErrorPanel.jsx';
import { getErrorText } from './utils/utils';
import HeadInfo from './components/head/HeadInfo.jsx';
import { fetchRepoInfo } from './gateway/gateway';
import CatTraceAnimation from './components/animations/CatTraceAnimation.jsx';

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
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setFetch(false);
          setLoadingStatus('false');
        });
    }
  }, [fetch]);

  return (
    <>
      <CatTraceAnimation />
      <div className="head">
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
    </>
  );
};
export default App;

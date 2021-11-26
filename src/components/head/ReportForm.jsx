import React from 'react';
import PropTypes from 'prop-types';

const ReportForm = ({
  setFetch,
  setUserName,
  setReponame,
  userName,
  repoName,
  provider,
  setProvider,
  fetch,
  setRepoData,
}) => (
  <>
    <form
      className="header__form report-form"
      onSubmit={(e) => {
        e.preventDefault();
        setRepoData(null);
        setFetch(true);
      }}
    >
      <select
        name="select"
        defaultValue={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="report-form__select"
      >
        <option value="github">Github</option>
        <option value="gitlab">Gitlab</option>
      </select>

      <input
        className="report-form__input"
        defaultValue={userName}
        type="text"
        name="userName"
        placeholder="Enter username"
        onChange={(e) => {
          setUserName(e.target.value.trim());
        }}
      />
      <input
        className="report-form__input"
        defaultValue={repoName}
        type="text"
        name="repoName"
        placeholder="Enter reponame"
        onChange={(e) => setReponame(e.target.value.trim())}
      />
      <button type="submit" className="report-form__btn" disabled={!!fetch}>
        Get Report
      </button>
    </form>
  </>
);

ReportForm.propTypes = {
  status: PropTypes.string,
  setFetch: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
  setReponame: PropTypes.func.isRequired,
  userName: PropTypes.string,
  repoName: PropTypes.string,
  provider: PropTypes.string,
  setProvider: PropTypes.func.isRequired,
  fetch: PropTypes.bool.isRequired,
  setRepoData: PropTypes.func.isRequired,
};

export default ReportForm;

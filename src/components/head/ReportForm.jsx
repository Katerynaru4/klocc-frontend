import React from 'react';

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
}) => {
  return (
    <>
      <form
        className="form"
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
          className="form__select"
        >
          <option value="github">Github</option>
          <option value="gitlab">Gitlab</option>
        </select>

        <input
          className="form__input"
          defaultValue={userName}
          type="text"
          name="userName"
          placeholder="Enter username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className="form__input"
          defaultValue={repoName}
          type="text"
          name="repoName"
          placeholder="Enter reponame"
          onChange={(e) => setReponame(e.target.value)}
        />
        <button
          type="submit"
          className="report-btn"
          disabled={fetch ? true : false}
        >
          Get Report
        </button>
      </form>
    </>
  );
};
export default ReportForm;

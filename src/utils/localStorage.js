export const setReportForm = (userName, repoName, provider) => {
  localStorage.setItem('userName', userName);
  localStorage.setItem('repoName', repoName);
  localStorage.setItem('provider', provider);
};

export const getReportForm = (key) => localStorage.getItem(key);
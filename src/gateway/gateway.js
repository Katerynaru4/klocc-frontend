const baseUrl = 'https://klocc.kittyandrew.dev/api/jobs';

export const fetchRepoInfo = (username, reponame, provider) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Basic ' + btoa('mrcat:mrcat777'),
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      username,
      reponame,
      provider,
    }),
  });
};

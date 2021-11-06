const baseUrl = 'https://klocc.kittyandrew.dev/api/jobs';

const fetchRepoInfo = (username, reponame, provider) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Basic ${btoa('mrcat:mrcat777')}`,
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      username,
      reponame,
      provider,
    }),
  });

export default fetchRepoInfo;

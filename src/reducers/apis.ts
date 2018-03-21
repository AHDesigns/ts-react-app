import 'isomorphic-fetch';

export const getSomething = () => fetch('/api...').then(res => res.json());

export const getGit = () => fetch('https://api.github.com/users/AHDesigns/repos', {
  headers: {
    'User-Agent': 'Pancake'
  }
})
.then(res => res.json())
.catch(err => err);

const uri = 'https://api.github.com/repos/sky-uk/skyport-graphql/pulls';
export const getGitPrivate = () => fetch(uri, {
  headers: {
    'User-Agent': 'Pancake'
  }
})
.then(res => res.json())
.catch(err => err);

export const getG = () => fetch('/git', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'query limit { rateLimit { cst } }'
  })
});
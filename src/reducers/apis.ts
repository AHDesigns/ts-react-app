import 'isomorphic-fetch';

export const getSomething = () => fetch('/api...').then(res => res.json());

export const getGit = () => fetch('https://api.github.com/users/AHDesigns/reps', {
  headers: {
    'User-Agent': 'Pancake'
  }
})
.then(res => res.json())
.catch(err => err);
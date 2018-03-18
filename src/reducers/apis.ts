import 'isomorphic-fetch';

export const getSomething = () => fetch('/api...').then(res => res.json());

export const getGit = () => fetch('https://example.com:1234/users', {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// }).then((res) => {
//   if (res.status === 500) {
//     throw new Error('Shit it broke');
//   } else if (res.status === 400) {
//     throw new Error('Informative message');
//   } else {
//     return res.json();
//   }
// });
import {BASE_URL } from './base.js'

const getRandomQuote = () => {
  return fetch(`${BASE_URL}/api/random_quote`)
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })
}

export { getRandomQuote }

// i want you to implement a "getReviews"
// that's only going call the api and return it
const BASE_URL = "http://localhost:5000"

// option 2 for named exports is just putting inline
// export const getReviews = async () => {
// pick one way and go with it.
const getReviews = async () => {
  const response = await fetch(`${BASE_URL}/reviews`)
  const data = await response.json()
  return data
}

// option 1 for named exports are all below.
export {getReviews}
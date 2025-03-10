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

// do the post request
const postRequest = async ({
  title, comments, rating // destructuring the params.
}) => {
  const response = await fetch(REVIEWS_URL, {
    method: "POST", // we're giving info to the server
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      comment: comments,
      rating: parseInt(rating)
    })
  })
  const newReview = await response.json()
  return newReview
}

// option 1 for named exports are all below.
export {getReviews}
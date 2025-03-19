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
// you could name this "createReview"
const postReview = async ({
  title, comments, rating // destructuring the params.
}) => {
  const REVIEWS_URL = `${BASE_URL}/reviews`
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

// do the delete!
const deleteReview = async (id) => {
  // implement the delete.
  // create the url that you're going delete with
  const DELETE_URL = `${BASE_URL}/reviews/${id}`
  // do your self a favour on assignment 4a and print out
  // the url for yourself for debugging.
  //  console.log(DELETE_URL)
  const response = await fetch(DELETE_URL, {
    method: "DELETE"
  })
  const data = await response.json()
}


// option 1 for named exports are all below.
export {getReviews, postReview, deleteReview}
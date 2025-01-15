// change the base url to the new version 2.3.0
const BASE_URL = "https://lldev.thespacedevs.com/2.3.0"

// api functions here.
// create an async function that will
// return the data fetched from the url we tested
// export that function (named)
// import it index.js
const getAstronautList = async () => {
  // construct the url.
  const URL = `${BASE_URL}/astronauts/?mode=list`
  // making the fetch request
  const response = await fetch(URL, {
    method: "GET" // this is extra data associated with fetch
    // this would be where you put headers
    // and also the body (if it were a POST/PATCH/PUT) req
  })
  // get the data from the response.json()
  // note response.json() is a promise which is why
  // we await it
  const data = await response.json()

  return data
}

export { getAstronautList }

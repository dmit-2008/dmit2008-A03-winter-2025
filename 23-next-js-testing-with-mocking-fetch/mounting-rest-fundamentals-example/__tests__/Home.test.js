/*
  So to get mocks working you need to install
  a few libraries
  - msw (the most popular rest api mock library in js)
  - isomorphic-fetch
    (this is going to fetch the same on the browser and
    locally) This is because "fetch" is different on the
    browser and node the package isomorphic-fetch just
    essentially bridges those differences.
  - jest-fixed-dom
    - next.js they haven't dealt with their testing environment
    well, this is a large issue.
    - people want to test their apps so msw essentially added
    a "polyfill" to esentially add the required missing pieces
    to their testing for mocking rest apis.
    - you have to edit the testEnvironment in jest.config.js
    for this to work.
*/
// this is going to make our node and
// browser fetch consistent.
import 'isomorphic-fetch'

// we're also going to import react testing
// library to render our components
import { render, screen, act} from "@testing-library/react"

// import the matchers
import '@testing-library/jest-dom'

// we're going to need a few things from MSW to set up a dummy server
// and also mock the endpoints that our application (for this is just
// one) docs: https://mswjs.io/docs/getting-started#step-2-describe
import { http, HttpResponse } from 'msw'
// the above is going to mock out the requests

// you going to need the functions to run the server
// docs: https://mswjs.io/docs/getting-started#step-3-integrate
import { setupServer } from 'msw/node'

// import our component to render the page.
import Home from '../pages/index'

import { BASE_URL } from '../utils/api/base'

// let's define some quotes to be used
const QUOTE = "To be or not to be"
const AUTHOR = "Billy Shakes"

// we're going to set up our mock endpoints in the server
// taking a look at `utils/api/quotes` we have one request
// that we'll be mocking the backend.
// set up a server
const server = setupServer(
  // this is going to have 1 to many arguments
  // that will be the server endpoints that you create
  http.get(
    `${BASE_URL}/api/random_quote`, // path mocked
    () => { // response handler for our dummy server.
      // this is the response
      return HttpResponse.json({
        author: AUTHOR,
        quote: QUOTE
      })
    }
  )
)

// before all the tests we're going to open server
// reference: https://jestjs.io/docs/setup-teardown

// after all the tests we're going to close the server
beforeAll(()=> {
  // I'm going to open my server so that my mock server
  // can accept connections
  server.listen()
  // docs: https://mswjs.io/docs/getting-started#step-3-integrate
})

// after all of the the tests we're going to close the server
afterAll(()=> {
  server.close()
})


// we're going to perform two tests.

// 1. when I open the page a quote is loaded.
it("should load a quote on rendering of the component", async ()=> {
  // our todo is doing a complex state change
  await act(() => {
    // this way of loading will load the api data and
    // the component and wait for the response.
    render(<Home />)
  })
  // refer to screen: https://testing-library.com/docs/queries/about/#screen
  // if you want more about different types of queries
  // let's get the elements
  let quoteElement = screen.getByTestId("quote")
  let authorElement = screen.getByTestId("author")

  // we're going to check to see if these contain the
  // string of the api.
  // make the tests fail first
  // expect(quoteElement).not.toHaveTextContent(QUOTE)
  // let's make them pass
  expect(quoteElement).toHaveTextContent(QUOTE)
  expect(authorElement).toHaveTextContent(AUTHOR)
})


// 2. when the button is clicked a new quote is loaded.

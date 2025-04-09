import {render, screen} from '@testing-library/react'
// render above is going to be used to "render"
// the component inside of our testing environment
// screen is going to allow you get specific items
// inside of your component
import '@testing-library/jest-dom'
// this is above is going to add to the matchers
// so that we can test things in the jsx and
// the html itself. We'll need both of these
// to test next.js apps.


// let's do a fundamental test
// we're going to test here that 2 -1 is equal to one
// we're going to make the test fail first and then
// we're going to pass it.
test("test that 2 - 1 is equal to 1", () => {
  // contain the actual test.
  // note if it's empty it will pass.
  // step 1: we're going to make hte test fail
  // you do this so that it doesn't automatically pass
  const value = 2 - 1
  const EXPECTED_VALUE = 1
  // what you're testing on the left,
  // what you expect on the right
  // note below fails
  // expect(value).toEqual(EXPECTED_VALUE)
  // step 2: let's make thing pass
  expect(value).not.toEqual(10) // pass as well.
  expect(value).toEqual(EXPECTED_VALUE)
})
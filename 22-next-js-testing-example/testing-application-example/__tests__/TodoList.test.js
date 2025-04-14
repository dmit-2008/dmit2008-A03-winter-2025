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

import TodoList from '../components/TodoList'
// we're going to need the component that we're
// rendering!


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

// to understand how these piece work
// we're going to check if a title exists
// "it" is the same test let's use it!
// take a look here: https://testing-library.com/docs/react-testing-library/example-intro
it("tests that title is rendered on the page", ()=> {
  // render the component so that we can access
  // the parts inside of it.
  render(<TodoList/>)

  // with screen you can access items/dom/any element
  // inside of the todolist above with screen queries
  // reference here https://testing-library.com/docs/queries/about/#screen
  // to learn more about screen.
  // let's get the title by text
  const titleElement = screen.getByText("Our Todo List")

  // there's a whole load of matchers that are added
  // with @testing-library/jest-dom
  // refer to here https://github.com/testing-library/jest-dom
  // let's make this matcher fail first
  // expect(titleElement).not.toBeInTheDocument()
  // let's make it pass now
  expect(titleElement).toBeInTheDocument()
})

it("todo item should add to the list on click", ()=> {
  // render the component
  render(<TodoList />)
  // get the input button and list element from TodoList
  // docs reference on screen
  const button = screen.getByText("Add Todo")
  const inputElement = screen.getByLabelText("New Todo")

  // "simulate" typing in the list
  // check that the input has the text
  // click the button
  // check that the input is empty
  // check that the list has the string inside.
})
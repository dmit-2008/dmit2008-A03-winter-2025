// create this !

// we're going to take in the entire form.
// the text field, we're going intialize state
// to this component for the text field.
// we're going passin todolist and todoValue

import { useState } from 'react'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';


export default function NewTodoForm(
  {todoList, setTodoList}
) {
  // create a stateful variable
  // todoValue
  const [todoValue, setTodoValue] = useState("")
  // note that we're using useState rather than
  // React.useState because we are importing
  // like so import { useState } from 'react'
  // and not import React from 'react'

  // note you can create function in react components
  const updateTodoValue = (event) => {
    // the event is a react event object
    // docs here: https://react.dev/reference/react-dom/components/common#react-event-object
    setTodoValue(event.target.value)
    // and you can see the stateful value update
    // in react dev tools when you click the home
    // component.
  }

  const handleForm = (event) => {
    // prevent the default action
    event.preventDefault()
    // see our
    console.log(`
      Value of todoValue is ${todoValue}
    `)
    // I want you to make a copy of the todoList
    // with the new value
    // to set the state in the form.

    // we're createing a new array with all
    // of the existing item spread into it.
    let tempTodoList = [todoValue, ...todoList]
    console.log(tempTodoList)
    // I'm just going to set the state of todoList
    setTodoList(tempTodoList)

    // we're going to reset the todoValue
    setTodoValue("")
  }

  return <form
    onSubmit={handleForm}
  >
    <Grid container spacing={2}>
      <Grid size={10}>
        {/*
          this will be for input
          make it controlled
          that it updates the stateful
          value.
        */}
        <TextField
          id="new-todo-input"
          label="New Todo"
          variant="outlined"
          fullWidth
          value={todoValue}
          onChange={updateTodoValue}
        />
      </Grid>
      <Grid size={2}>
        {/* this is going to be the button to add the item.
          we're going to make the button
          a submit button so we can handle
          the form.
        */}
        <Button
          size="large"
          variant="contained"
          type="submit"
        >
          Add Todo
        </Button>
      </Grid>
      <Grid size={12}>
        {/*
          we'll loop through our
          todos created.
          Change SAMPLE_TODOS to the
          stateful value of todoList
        */}

      </Grid>
    </Grid>
  </form>
}
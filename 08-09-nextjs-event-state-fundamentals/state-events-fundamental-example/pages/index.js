/*
make a container that has a form
in that form you use an mui grid (version 2 plz)
create a text field and a button.

if you're stuck take a look at the MUI docs!

if you're done this create a stateful variable for todoValue.
*/
// this framework level import
import { useState } from 'react'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// we're using Grid2 because the original version was deprecated.
import Grid from '@mui/material/Grid2';
// I'm going to import all of my list components here.
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import TextField from '@mui/material/TextField';


export default function Home() {
  const SAMPLE_TODOS = [
    "gripe brightspace",
    "annoy students about events",
    "not make typos, just learning moments",
    "watch canada beat the crap out sweden"
  ]
  // take a look at the mui documentation
  // I want you to create a list in the jsx
  // in grid size 12 (a row)
  // using the sample todos above.


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
  //
  const handleForm = (event) => {
    // prevent the default action
    event.preventDefault()
    // see our
    console.log(`
      Value of todoValue is ${todoValue}
    `)

    // we're going to reset the todoValue
    setTodoValue("")
  }



  return (
    <div>
      <Container
        maxWidth="lg"
        component={"main"}
        sx={{
          mt: 8
        }}
      >
        {/* we're going to hook into this shortly. */}
        <form
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
              {/* make me a list */}
             </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

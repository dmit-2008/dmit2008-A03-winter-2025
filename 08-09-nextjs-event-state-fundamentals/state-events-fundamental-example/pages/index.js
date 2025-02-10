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
import TextField from '@mui/material/TextField';


export default function Home() {
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
        <form>
          <Grid container spacing={2}>
             <Grid size={10}>
              {/* this will be for input
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
              />
             </Grid>
             <Grid size={2}>
              {/* this is going to be the button to add the item. */}
              <Button
                size="large"
                variant="contained"
              >
                Add Todo
              </Button>
             </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

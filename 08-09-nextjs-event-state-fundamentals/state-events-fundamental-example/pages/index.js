/*
make a container that has a form
in that form you use an mui grid (version 2 plz)
create a text field and a button.

if you're stuck take a look at the MUI docs!

if you're done this create a stateful variable for todoValue.
*/
// this framework level import
import { useState, Fragment } from 'react'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
// we're using Grid2 because the original version was deprecated.
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
// I'm going to import all of my list components here.
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import DeleteIcon from '@mui/icons-material/Delete';

// import our own list
import ListOfTodos from '@/components/ListOfTodos';
import NewTodoForm from '@/components/NewTodoForm';


export default function Home() {
  const SAMPLE_TODOS = [
    "gripe about brightspace",
    "annoy students about events",
    "not make typos, just learning moments",
    "watch canada beat the crap out sweden"
  ]
  // take a look at the mui documentation
  // I want you to create a list in the jsx
  // in grid size 12 (a row)
  // using the sample todos above.

  // make the list a stateful value
  // where the default value of that list
  // is the sample todos, use it in your jsx
  const [todoList, setTodoList] = useState(SAMPLE_TODOS)

  const deleteTodoItem = (index) => {
    console.log("deleting index", index)
    // i want create a temp array
    let tempTodoList = [...todoList] // deep copy
    // i want you splice
    tempTodoList.splice(index, 1)
    // i want you to set the state.
    setTodoList(tempTodoList)
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
        <NewTodoForm
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <ListOfTodos
          todoList={todoList}
          deleteTodoItem={deleteTodoItem}
        />
      </Container>
    </div>
  );
}

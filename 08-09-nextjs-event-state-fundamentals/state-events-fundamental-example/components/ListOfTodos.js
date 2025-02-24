// create this component.
// put the todos list jsx in this component

/*
What are we going to need?
- todoList (to loop over)
- deleteTodoItem (where this is going to be a function)

*/
import { Fragment } from 'react'

import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import DeleteIcon from '@mui/icons-material/Delete';

export default function ListOfTodos(
  {todoList, deleteTodoItem}
) {
  return <List>
    <Divider/>
    { todoList.map((todo, index)=> {
      // a single jsx node.
      // a fragment is a special jsx
      // ghost node that doesn't add
      // any html.
      // normally you can use <> jsx here </>

      // challenge make this a component will you need
      // a fragment?
      return <Fragment key={index}>
        {/*
          go add a delete from mui
          you can create a one line function
          so that you can call a function with
          specific arguments without it being
          fired immediately
        */}
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              onClick={
                () => {deleteTodoItem(index)}
              }
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={todo}
            secondary={`index ${index}`}
          />
        </ListItem>
        <Divider/>
      </Fragment>
    })}
  </List>
}
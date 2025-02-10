/*
make a container that has a form
in that form you use an mui grid (version 2 plz)
create a text field and a button.

if you're stuck take a look at the MUI docs!

if you're done this create a stateful variable for todoValue.
*/
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// we're using Grid2 because the original version was deprecated.
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';


export default function Home() {
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
          <Grid container space={2}>
             <Grid size={10}>
              {/* this will be for input */}
              <TextField
                id="new-todo-input"
                label="New Todo"
                variant="outlined"
                fullWidth
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

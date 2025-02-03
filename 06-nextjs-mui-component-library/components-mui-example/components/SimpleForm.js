// import quite a few for the checkbox
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// create a component
// add two inputs
// one that's text
// and one that's something else
// add button
export default function SimpleForm() {
  return <form>
    <Typography variant="h6">
      A small demo of forms
    </Typography>
    <TextField
      label="a demo label"
      variant="standard"
    />
    <FormGroup>
      {/* allows to make a compact layout
        note that in the form control label
        one of the props is actually just jsx.

      */}
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
          />
        }
        label="Check me"
      />
    </FormGroup>
    {/*
      Take a look here for more docs
      https://mui.com/material-ui/react-button/
    */}
    <Button
      variant="contained"
      color="success"
    >
      Submit the form!
    </Button>
  </form>
}
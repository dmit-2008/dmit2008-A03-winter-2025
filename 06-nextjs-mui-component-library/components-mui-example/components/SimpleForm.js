// import quite a few for the checkbox
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
    {/* allows to make a compact layout */}
    </FormGroup>
  </form>
}
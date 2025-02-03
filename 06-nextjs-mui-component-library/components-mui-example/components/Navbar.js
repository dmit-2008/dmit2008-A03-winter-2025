// I want you to create a component with the same
// name as the file
// give it a single prop called title

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// I want to use a very appbar from mui.
// if there are styling issues, why?
export default function Navbar({title}) {
  // use the appbar documentation to create
  // the appbars.

  return <AppBar>
    <Toolbar>
      {/* our typography will use our prop */}
      <Typography
        variant="h6"
        component="div"
      >
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
}
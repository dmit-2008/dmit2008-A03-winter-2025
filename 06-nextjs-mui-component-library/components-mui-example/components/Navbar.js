// I want you to create a component with the same
// name as the file
// give it a single prop called title

import AppBar from '@mui/material/AppBar';
// I want you to create a iconbutton that uses the blender icon
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// to the left of the text in the toolbar, give it a bit of padding.
// I want to use a very appbar from mui.
// if there are styling issues, why?
export default function Navbar({title}) {
  // use the appbar documentation to create
  // the appbars.

  return <AppBar>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {/* a nested icon */}
      </IconButton>

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
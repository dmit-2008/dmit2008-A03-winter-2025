import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

// I want you to make these the appropriate links
// below.
// the first should go to the home page.
// the second should go to the about page.

export default function NavBar(props) {
  return <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Space Agency App
      </Typography>
      <Typography variant="h6" component="div" >
        About
      </Typography>
    </Toolbar>
  </AppBar>
}

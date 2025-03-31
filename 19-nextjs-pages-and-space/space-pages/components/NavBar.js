// we're going to import Link from next.js
import Link from 'next/link';

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
        {/* We're going to use the links with the page. */}
        <Link href="/">
          Space Agency App
        </Link>
      </Typography>
      <Typography variant="h6" component="div" >
        <Link href="/about">
          About
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
}

// import createTheme from mui
import { createTheme } from '@mui/material/styles';

// create some theme options that are going to change
// the color of the primary
const themeOptions = {
  palette: {
    primary: {
      main: '#7f0672',
    },
    secondary: {
      main: '#27abb0',
    },
  },
}

// createTheme
const theme = createTheme(themeOptions)
// export it
export { theme }

import { createTheme } from '@mui/material/styles';

const themeOptions = {
  typography: {
    h2: {
      fontSize: '2.6rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.4rem',
    },
  }
}

const theme = createTheme(themeOptions)

export { theme }
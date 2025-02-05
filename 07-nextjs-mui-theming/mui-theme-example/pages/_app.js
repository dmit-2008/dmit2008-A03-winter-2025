import '../styles/globals.css'

// let's import theme provider
import { ThemeProvider } from '@mui/material/styles';
//let's import our theme
import { theme } from '../utils/theme/config';

function MyApp({ Component, pageProps }) {
  // wrap our application in it
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp

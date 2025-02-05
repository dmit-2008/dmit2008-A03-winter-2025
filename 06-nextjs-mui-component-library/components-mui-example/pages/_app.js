// import all of the fonts because we'll be using roboto.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "@/styles/globals.css";

// we're going to import the ThemeProvider
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '@/utils/theme/config'

export default function App({ Component, pageProps }) {
  // we're going to wrap the component in our themeprovider which
  // will run on every page.
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />;
  </ThemeProvider>
}

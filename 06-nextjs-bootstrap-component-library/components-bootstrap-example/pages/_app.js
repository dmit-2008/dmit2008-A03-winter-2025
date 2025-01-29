// this is the component is the root component for you
// your entire application.
// we're going to import our bootstrap into our entry.
import 'bootstrap/dist/css/bootstrap.min.css';

// the local styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

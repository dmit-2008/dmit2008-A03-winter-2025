import '@/styles/globals.css'

// we're goign to wrap the app with
// with the appNotification
import AppNotification from '@/components/state/AppNotification'

export default function App({ Component, pageProps }) {
  return <AppNotification>
    <Component {...pageProps} />
  </AppNotification>

}

import '@/styles/globals.css'

// we're goign to wrap the app with
// with the appNotification
import AppNotification from '@/components/state/AppNotification'
import AuthProvider from '@/components/state/AuthProvider'

export default function App({ Component, pageProps }) {
  return <AppNotification>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </AppNotification>
}

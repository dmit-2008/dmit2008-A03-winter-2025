import { useState, useContext, createContext  } from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// 3. You're going to create a context
//    we'll make it so that other components can import this.
export const AppNotificationContext = createContext({})

// 5. creating our own hoook (optional) is really nice
//    because we only need to import one thing rather than
//    useContext and the context itself.
export function useNotification() {
  // so you can call your own hooks inside of your custom hook
  // useEffect, useState, useRouter.
  const context = useContext(AppNotificationContext)
  if (!context) {
    throw new Error(`useCount must be used within a AppNotification`)
  }
  return context
}

// 1. create a component that will wrap the entire application
// 2. Import this in your _app and then you'll wrap the component in it.
export default function AppNotification(props) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('')
    const [severity, setSeverity] = useState('success')

    const handleClose = (event, reason) => {
      console.log(event)
      console.log(reason)

      setOpen(false);
    };

    const showNotification = ({message, severity}) => {
        setText(message)
        setSeverity(severity)
        // display the message
        setOpen(true)
    }

    // 4. You wrap your own component with AppNotificationContext.Provider
    //    and pass in a value that will update the state of your application
    return <AppNotificationContext.Provider value={{showNotification}}>
      {props.children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6} variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {text}
        </MuiAlert>
      </Snackbar>
    </AppNotificationContext.Provider>
}
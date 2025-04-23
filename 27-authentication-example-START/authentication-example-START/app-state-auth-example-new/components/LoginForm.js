import {useRouter} from 'next/router'

import {useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// use our notification hook so that
// we can just display a message
import { useNotification } from './state/AppNotification';

export default function LoginForm(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  // we're going to initialize our own hookc
  // we can destructure the value.
  const {showNotification} = useNotification()
  // this is the same as doing
  // const {showNotification} = useContext(AppNotificationContext)


  /* import the hook here */
  const handleLogin = (event)=> {
    event.preventDefault()
    /* make the sign in request here. */
    showNotification({
      message: "Login attempt",
      severity: "error"
    })
  }

  return <Box component="form" noValidate sx={{ mt: 1 }}
      onSubmit={handleLogin}
    >
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      value={email}
      onChange={(event)=> {setEmail(event.target.value)}}
    />
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      value={password}
      onChange={(event)=> {setPassword(event.target.value)}}
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
  </Box>
}
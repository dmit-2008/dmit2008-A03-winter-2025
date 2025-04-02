// same pattern as before
import {useRouter} from 'next/router'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import NavBar from '@components/NavBar';

export default function Spacecraft() {
  // define the router
  const router = useRouter()

  // you're going get the path params
  // it's spacecraftId because of the [spacecraftId].js
  const {spacecraftId} = router.query


  return (
    <div>
        <NavBar />
        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">
          <Typography variant="h3">
            Spacecraft: {spacecraftId}
          </Typography>
          <Typography>
            Challenge/Practice to do you on your own:
            load the data from the spacecraft api from the space devs api and show the following: Crew capabilities, flight life, maiden flight (other data you may find useful.)
          </Typography>
        </Container>
    </div>
  )
}

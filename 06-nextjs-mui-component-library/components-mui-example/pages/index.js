// import a container
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Navbar from '@/components/Navbar';
// use this container by taking a look documentation

// take at the "component" prop and use it.
// use typography give this a title

export default function Home() {
  return (
    <div>
      <Navbar />
      {/*
        Observing the api here: https://mui.com/material-ui/api/container/
        this will render my Container as a main component.

        The sx prop allows us to do
        one off customization to the element.
        docs here: https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop
      */}
      <Container
        component="main"
        sx={{
          marginTop: 10
        }}
      >
        <Typography
          variant="h3"
          component="h1"
        >
          Using MUI
        </Typography>

      </Container>

    </div>
  );
}

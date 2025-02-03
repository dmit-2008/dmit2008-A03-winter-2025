// import a container
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// use this container by taking a look documentation

// take at the "component" prop and use it.
// use typography give this a title

export default function Home() {
  return (
    <div>
      {/*
        Observing the api here: https://mui.com/material-ui/api/container/
        this will render my Container as a main component.
      */}
      <Container
        component="main"
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

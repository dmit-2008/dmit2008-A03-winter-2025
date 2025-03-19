import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Import our top stories
import TopStoriesList from '@/components/TopStoriesList';

export default function Home() {
  return (
    <Container component="main" sx={{marginTop: 3}} maxWidth="lg">
      <Typography component='h1' variant="h4">
        Top Hacker News Stories
      </Typography>
      <TopStoriesList />
    </Container>
  );
}

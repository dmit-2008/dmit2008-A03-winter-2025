import {useState, useEffect} from 'react'

import Head from 'next/head'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// let's import our Navbar
import Navbar from '../components/Navbar';
// let's import our ReviewForm
import ReviewForm from '../components/NewReview';
import ReviewsList from '../components/ReviewsList';

import { getReviews } from '../utils/api/reviews';

export default function Home() {
  // make the stateful variables
  // put them in the jsx

  // all of the reviews that we're going to loop through.
  const [reviews, setReviews] = useState([])

  // make the request of adaptation ratings/reviews to the backend
  // set the state.
  const loadReviews = async () => {
    try {
      // we just swap it out.
      const data = await getReviews()
      console.log(data)
      // set the reviews to what we've fetched from the backend
      setReviews(data)
    } catch (error) {
      console.log(error)
      // let's display something later on.
    }
  }

  // I want you disable strict mode
  // I want to create an effect on mount
  // that's going to call the loadReivews
  // I also want you to handle the loading state
  // display either the list or circular progress
  useEffect(()=> {
    // remember that an effect can't be asynchronous
    // but the function below is async, we're not using the result
    // so we just have to ensure that it's called
    // because it's setting the state inside of that function.
    loadReviews()

  }, []) // empty dep array and not in cleanup fucntion means on mount.




  return (
    <div>
      <Head>
        <title>Adaptation Reviews.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* breakout the Navbar */}
      <Navbar />
      <main>
        <Container maxWidth="md">
          {/* breakout ReviewForm */}
          <ReviewForm
            loadReviews={loadReviews}
          />
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={loadReviews}
            >
              Load All Current Reviews
            </Button>
          </Box>
          <ReviewsList
            reviews={reviews}
            loadReviews={loadReviews}
          />
        </Container>
      </main>
    </div>
  )
}

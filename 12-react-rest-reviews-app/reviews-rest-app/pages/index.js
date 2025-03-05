import {useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const MOCK_ADAPTATION_RATING = [{
  'title': 'Fight Club',
  'comment': 'Great movie and book',
  'rating': 10
}]

const BASE_URL = "http://localhost:5000"

export default function Home() {
  // make the stateful variables
  // put them in the jsx
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  // initialize the state of the rating to one.
  const [rating, setRating] = useState("1")
  // all of the reviews that we're going to loop through.
  const [reviews, setReviews] = useState(MOCK_ADAPTATION_RATING)

  // make the request of adaptation ratings/reviews to the backend
  // set the state.
  const getReviews = async () => {
    try {
      const response = await fetch(`${BASE_URL}/reviews`)
      const data = await response.json()
      console.log(data)
      // set the reviews to what we've fetched from the backend
      setReviews(data)
    } catch (error) {
      console.log(error)
      // let's display something later on.
    }
  }

  // I want you to handle the form submission
  const handleForm = async (event) => {
    event.preventDefault()
    // short validation if the inputs are empty
    if (title.trim() === "" || comments.trim() === "") {
      // the rest of the func won't execute.
      return
    }
    // I want you to make the post request
    // after we'll discuss different ways to update the
    // frontend.
    const REVIEWS_URL = `${BASE_URL}/reviews`
    const response = await fetch(REVIEWS_URL, {
      method: "POST", // we're giving info to the server
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        comment: comments,
        rating: parseInt(rating)
      })
    })
    const data = await response.json()

    console.log(data)

    // different ways to update the frontend.


    resetForm()
  }

  const resetForm = () => {
    setTitle("")
    setComments("")
    setRating("1")
  }

  return (
    <div>
      <Head>
        <title>Adaptation Reviews.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Adaptations Reviews
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="md">
          <form
            onSubmit={handleForm}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="title"
                  name="title"
                  label="Adaptation Title"
                  fullWidth
                  variant="standard"
                  value={title}
                  onChange={(event)=> {
                    setTitle(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="review-comments"
                  name="review-comments"
                  label="Comments"
                  fullWidth
                  variant="standard"
                  value={comments}
                  onChange={(event)=> {
                    setComments(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="adaptation-rating">Rating</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="adaptation-rating"
                    name="rating-buttons-group"
                    value={rating}
                    onChange={(event)=> {
                      setRating(event.target.value)
                    }}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10" />
                  </RadioGroup>
               </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="contained"
                  type="submit"
                >
                  Add New Review
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={getReviews}
            >
              Load All Current Reviews
            </Button>
          </Box>
          {reviews.map((adaptation, index)=> {
            return <Card
              sx={{marginTop: 4}}
              key={index}
            >

               <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {adaptation.rating}
                  </Avatar>
                }

                title={
                  <Typography variant="body2" color="text.secondary">
                    {adaptation.title}
                  </Typography>
                }

              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {adaptation.comment}
                </Typography>
              </CardContent>
            </Card>
          })}

        </Container>
      </main>
    </div>
  )
}

import { useState } from 'react'

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

import { postReview } from '../utils/api/reviews'


export default function NewReview({
  // we are going to updating the form state.
  // if were rendering with option 2 you'll need
  loadReviews, // from the index.js
  // if were rendering with option 1 you'll need
  // setReviews, reviews // the stateful values
  // passing state down.
}) {

  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  // initialize the state of the rating to one.
  const [rating, setRating] = useState("1")

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

    // wrap this in a try catch.
    // we just removed all of the code
    const newReview = await postReview({
      title: title,
      comments: comments,
      rating: rating
    })

    console.log(newReview)

    // different ways to update the frontend.

    // Option 1 updating the stateful value
    // on the frontend.
    // add the new review in an array where you
    // spread the current items in that array as well.
    // below uses the techniques we already know.
    // setReviews([newReview, ...reviews])

    // Option 2 call the original loadReviews
    // this will always be in sync with the
    // backend fetch.
    // get it, and render on the page.
    await loadReviews()
    // this is kind of what react query does.


    resetForm()
  }


  const resetForm = () => {
    setTitle("")
    setComments("")
    setRating("1")
  }

  // first step of a refactor is all
  return <form
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


}
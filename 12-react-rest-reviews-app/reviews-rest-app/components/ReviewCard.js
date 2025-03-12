// I want you to create this.
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';

import { deleteReview } from '../utils/api/reviews';

export default function ReviewCard({
  rating, id, title, comment,
  // if were rendering with option 2 you'll need
  loadReviews, // from the index.js
  // if were rendering with option 1 you'll need
  // setReviews, reviews // the stateful values
  // passing state down.
}) {

  const removeReview = async (id) => {
    console.log("removing review with id: ", id)
    try {
      await deleteReview(id)

      // a great place to display a toast message
      // our two options are the same as post request.
      // you can update on the frontend or refresh the data
      // on the backend.
      // Option 1
      // let tempReviews = reviews.filter((review)=> {
      //   // this is going to loop through the reviews
      //   // we're going to say keep all of htem that don't have
      //   // the id passed ( which is the one to remove.)
      //   return review.id !== id
      // })
      // setReviews(tempReviews)
      // Option 2 just load the reviews (this is preferred)
      await loadReviews()

      // Note: we can't use splice because that's using the index
      // and not the value in the object.
    } catch (error) {
      // we'll display something to the user.
      console.error(error)
    }


  }

  return <Card
    sx={{marginTop: 4}}
  >

    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {rating}
        </Avatar>
      }

      action={
        <IconButton
          onClick={() => {
            // this function we use the
            // id from the reivews in the
            // map above.
            removeReview(id)
          }}
        >
          <DeleteIcon />
        </IconButton>
      }

      title={
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      }

    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {comment}
      </Typography>
    </CardContent>
  </Card>
}
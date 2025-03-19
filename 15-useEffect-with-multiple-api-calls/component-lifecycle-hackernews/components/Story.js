import { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function Story({ id, rank }) {
  // let's create our state.
  // say originall that is loading
  const [isLoading, setIsLoading] = useState(true)
  const [story, setStory] = useState({})
  // we're going to create an effect
  // that will fetch the story data.
  const loadStory = async () => {
    const URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    const response = await fetch(URL)
    const data = await response.json()
    console.log("loadstory")
    console.log(data)
    // update the state
    setStory(data)
    // set the isloading to false.
    setIsLoading(false)
  }

  // the effect is going to listen to the change in the prop
  useEffect(()=> {
    // remember that in a useeffect you have to call async
    // functions synchronously so don't use anything from
    // the return from loadStory.
    loadStory()
  }, [id]) // listen to change in the prop

  if (isLoading) {
    return <p>
      {`Loading ${id}...`}
    </p>
  }

  return <Card sx={{marginTop: '5px'}}>
    <CardContent>
      <Link
        href={story.url}
        target="_blank"
        underline='none'
        variant='h5'
        color="primary"
      >
        {`${rank}. ${story.title}`}
      </Link>
      <Typography variant="body2">
        {story.score} points by {story.by}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Load Comments</Button>
    </CardActions>
  </Card>
}
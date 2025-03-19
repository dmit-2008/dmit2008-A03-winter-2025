import { useState, useEffect } from 'react'

export default function Story({ id }) {
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
  }


  // the effect is going to listen to the change in the prop
  useEffect(()=> {

  }, [id]) // listen to change in the prop



  if (isLoading) {
    return <p>
      {`Loading ${id}...`}
    </p>
  }


  return <p>
    {id}
  </p>
}
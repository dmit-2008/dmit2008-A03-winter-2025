import {useState, useEffect} from 'react'

import Button from '@mui/material/Button';

import Story from "@/components/Story"

export default function TopStoriesList() {
  const SLICE_SIZE = 5

  // we're going to create isLoading and data
  const [isLoading, setIsLoading] = useState(false)
  const [topStoryData, setTopStoryData] = useState([])
  // we're going to use this to load more data.
  const [slice, setSlice] = useState(1)


  // I'm going to listen to when the component is mounted
  useEffect(()=> {
    // call our load top stories
    loadTopStories()
  }, []) // empty dep array means on mount

  // we're going to increase the slice size
  // with a counter
  const loadMoreStoriesBySlice = () => {
    setSlice(slice+1)
  }

  // let's make our function (request should be wrapped in
  // a try catch)
  const loadTopStories = async () => {
    const TOP_STORY_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    setIsLoading(true)
    const response = await fetch(TOP_STORY_URL)
    const newStories = await response.json()
    setIsLoading(false)
    setTopStoryData(newStories)
  }

  // one way that you can actually debug your state
  // if you don't want to open the profiler is you can just
  // use an effect to listen to thencages in a stateful variables
  useEffect(()=> {
    console.log(topStoryData)
  }, [topStoryData])

  // i'm going import the button
  // we're create

  return <>
    { topStoryData.slice(0, slice*SLICE_SIZE).map((storyId)=> {
      return <Story
        key={storyId}
        id={storyId}
      />
    })}

    <Button
      onClick={loadMoreStoriesBySlice}
      variant='contained'
    >
      Load next {SLICE_SIZE} stories
    </Button>
  </>
}
import {useState, useEffect} from 'react'

export default function TopStoriesList() {
  // we're going to create isLoading and data
  const [isLoading, setIsLoading] = useState(false)
  const [topStoryData, setTopStoryData] = useState([])

  // let's make our function (request should be wrapped in
  // a try catch)
  const loadTopStories = async () => {
    const TOP_STORY_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    setIsLoading(true)
    const response = await fetch(TOP_STORY_URL)
    const newStories = await response.json()
    console.log(newStories)
    setIsLoading(false)
    setTopStoryData(newStories)
  }


  return <>
    Top stories
  </>
}
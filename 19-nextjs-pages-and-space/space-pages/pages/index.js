// we'll need these because we're going to be making an api call to the space devs api.
import {useEffect, useState} from 'react'

// we'll import the router here.
import { useRouter } from 'next/router';

import Head from 'next/head'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import AgencyCard from '@components/AgencyCard';
import NavBar from '@components/NavBar';

import { getAgencies } from '@utils/api/agencies';


export default function Home() {
  // we're going to define the router here
  const router = useRouter()
  // we'll need this with the query

  // let's create a stateful value that will hold the search
  const [searchQuery, setSearchQuery] = useState()

  // we're going to load this with our state
  const [isLoading,setIsLoading] = useState(true)
  // we're going to make this undefined by default
  // but we're going to get this information
  // from the api.
  const [agencies, setAgencies] = useState()


  const loadAgencies = async () => {
    // note handle the error state we're not
    // going to do it for this example.
    const data = await getAgencies({
      search: searchQuery
      // this is going to passin the current state to
      // the backend
    })
    // set the state and the loading
    setAgencies(data)
    setIsLoading(false)
  }

  // this function is going to do two things
  // update the state of search (same as always)
  // the second is that it's going to update the
  // query parameters without reloading the page.
  const updateSearch = (event) => {
    setSearchQuery(event.target.value)

    // using router replace to replace query params.
    router.replace({
      pathname: router.pathname,
      // update all query params and keep other ones
      // if present
      query: {
        ...router.query,
        q: event.target.value
      }
    },
    undefined, // we're staying on the same page we don't need to replace with other path,
    {shallow: true} // it's not going to perform a full page
    // refresh
    )
  }
  // notes on search
  // 1. debouncing is a smart idea: it doesn't trigger evyer
  // keystroke but will trigger every few milliseconds
  // 2. normally rule of thumbs start search after three 3 chars
  console.log(router)
  // we're going to create an effect that
  // is only going to listen to the router.isReady
  // property and we're going to take a look at the
  // query params
  useEffect(()=> {
    // guard if the router isn't ready
    if (!router.isReady) {
      return
    }
    // this below will be the query param
    console.log(`q is: ${router.query.q}`)
    // we're going to set this to the state
    // if it's undefined here we're going to
    // set the state to an empty string
    setSearchQuery(router.query.q || "")

  },[router.isReady])
  // above will switch from false to true once the
  // query params are all loaded.


  // we're going to change this effect so that
  // it listens to the searchQuery and
  useEffect(()=> {
    if (!router.isReady) {
      return
    }

    loadAgencies()

  }, [searchQuery])
  // any change in searchQuery is going to fire
  // the load agencies



  if (isLoading) {
    return "Loading..."
  }

  // if we hit this point then we should
  // see the data
  console.log(agencies)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">

          <Typography variant="h3">
            Space Agencies
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label="Search"
              fullWidth

              value={searchQuery}
              // the update is going to update queryparams
              // and the state
              onChange={updateSearch}
            />

            {/* We're going to loop through
            the agencies and render the cards */
            agencies.results.map((agency)=> {
              return <AgencyCard
                key={agency.id}
                // the ? after image does a quick check
                // if it exists.
                imageUrl={agency.image?.image_url}
                name={agency.name}
                abbreviation={agency.abbrev}
                description={agency.description}
                // pass in the id so that we
                // can use it in the router.
                id={agency.id}
              />
            })}

          </Box>
        </Container>

    </div>
  )
}

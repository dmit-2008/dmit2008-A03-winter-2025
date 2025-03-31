// for other react flavours you might need the line below
// import React from 'react' // you don't need this line in next.js

// import the state and effect
import {useState, useEffect} from 'react'

// since we have a dynamic path we'll need
// the useRouter hook
import { useRouter } from "next/router";

import { getAgency } from '@utils/api/agencies';

export default function Agency() {
  // initialize the router
  const router = useRouter()
  // set up the state
  const [isLoading, setIsLoading] = useState(true)
  // hold the data
  const [agency, setAgency] = useState()

  // note here that the filename is called
  // [agencyId].js this is going to be what
  // part of the router.query for the actual value
  // when you map to this page.
  const {agencyId} = router.query

  // let's load the infomration
  const loadAgency = async () => {
    // into the fetch api I'm going to pass in this data
    const data = await getAgency(agencyId)
    // let's set the states.
    setIsLoading(false)
    setAgency(data)
  }

  useEffect(()=> {
    // is you need to guard against the router
    // not being ready or an undefined agencyId
    // option 1: checking if the router is ready.
    // if (!router.isReady) {
    //   return
    // }
    // option 2: check if the agencyId is not defined.

    if (!agencyId) {
      return // just exit early
    }
    // the agencyId is defined so load the data.
    loadAgency()
  }, [agencyId])

  console.log(agency)

  // Challenge:
  // I want you to load the agency data, handle all of the loading states.
  // I want to listen to the router.isReady or the agencyId in the effect
  // I want to you return early if it's not ready.
  // If it is I want you to load this data
  // I want some JSX (you can grab it from the about page.)
  // that will render the agency name.

  // we're going to create the loading state
  // some data for the agency.
  if (isLoading) {
    return `Loading Agency ${agencyId}...`
  }

  return <h1>
    Agency: {agencyId}
  </h1>
}
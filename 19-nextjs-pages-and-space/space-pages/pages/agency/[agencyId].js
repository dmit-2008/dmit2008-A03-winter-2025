// since we have a dynamic path we'll need
// the useRouter hook
import { useRouter } from "next/router";

export default function Agency() {
  // initialize the router
  const router = useRouter()

  // note here that the filename is called
  // [agencyId].js this is going to be what
  // part of the router.query for the actual value
  // when you map to this page.
  const {agencyId} = router.query

  // I want you to load the agency data, handle all of the loading states.
  // I want to listen to the router.isReady in the effect
  // I want to you return early if it's not ready.
  // If it is I want you to load this data
  // I want some JSX (you can grab it from the about page.)
  // that will render the agency name.

  return <h1>
    Agency: {agencyId}
  </h1>
}
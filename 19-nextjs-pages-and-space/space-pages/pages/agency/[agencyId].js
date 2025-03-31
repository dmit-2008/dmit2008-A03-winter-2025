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


  return <h1>
    Agency: {agencyId}
  </h1>
}
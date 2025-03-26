import { useRouter } from 'next/router'

export default function User() {

  const router = useRouter()

  // let's just destructure it.
  console.log(router)
  const { id } = router.query

  const goHome = () => {
    router.push("/")
  }

  return <h1>User: { id }

    <button onClick={goHome}> Go home </button>
  </h1>
}
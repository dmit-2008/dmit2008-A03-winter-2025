import 'bootstrap/dist/css/bootstrap.min.css'

import { getAstronautList } from './api/astronaut'

/*
Take a look at the space devs api

The base domain of the api endpoint is going to
be here https://lldev.thespacedevs.com

*/

document.addEventListener("DOMContentLoaded", async () => {
  let data = await getAstronautList()
  // get the name of tommy pesquet
  console.log(data.results[0].name)
})

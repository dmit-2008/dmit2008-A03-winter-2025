import 'bootstrap/dist/css/bootstrap.min.css'

import { getAstronautList } from './api/astronaut'
import { renderAstronautListItem } from './dom/astronaut'

/*
Take a look at the space devs api

The base domain of the api endpoint is going to
be here https://lldev.thespacedevs.com

*/

document.addEventListener("DOMContentLoaded", async () => {
  let data = await getAstronautList()
  // get the name of tommy pesquet
  console.log(data)
  console.log(data.results[0].name)
  // we can see in the above data that resulsts is an array
  // so what are we going to do here.
  let astronauts = data.results
  // let's select the element
  let astronautListItem = document.querySelector(".astronaut-list")
  astronauts.map((astronaut)=> { // you could use foreach as well.
    // we're going to call our function here
    renderAstronautListItem(astronaut, astronautListItem)
  })
})

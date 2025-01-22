import 'bootstrap/dist/css/bootstrap.min.css'

import { getAstronautList } from './api/astronaut'
import { renderAstronautListItem } from './dom/astronaut'

/*
Take a look at the space devs api

The base domain of the api endpoint is going to
be here https://lldev.thespacedevs.com

*/

// we are going to implement search
// we're going to take a look today at the docs
// of the api endpoint so that we can search.

// what we're going to need is
// form event listener that will take the user input
// and send it to the api endpoint.

// select the form, add event listener and get search value from
// the input



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

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


// create function that will filter the search
// param search input in this function.
// add this search param to the url
// we're also going to clearn the innerhtml of the container element

// let's use our knowledge of object destructuring in the parameter
const getAndRenderAstronautList = async ({search}={}) => {
  // i'm going to make this parameter optional.
  console.log(search)

  let data = await getAstronautList({
    search: search
  })
  // get the name of tommy pesquet
  console.log(data)
  console.log(data.results[0].name)
  // we can see in the above data that resulsts is an array
  // so what are we going to do here.
  let astronauts = data.results
  // let's select the element
  let astronautListItem = document.querySelector(".astronaut-list")
  // we're clear the input every time we search
  astronautListItem.innerHTML = ""

  astronauts.map((astronaut)=> { // you could use foreach as well.
    // we're going to call our function here
    renderAstronautListItem(astronaut, astronautListItem)
  })
}

// select the form, add event listener and get search value from
// the input
let searchForm = document.querySelector("#search-astronauts")

// add the event listener
searchForm.addEventListener("submit", (event)=> {
  // if the line below is annoying go take a look at the dialog in html.
  event.preventDefault()
  // dan question: is searchForm the same the event.target
  // console.log("dan question: is searchForm the same the event.target")
  // console.log(searchForm === event.target)
  // let's get the input
  let searchInput = searchForm.elements['search']
  // let's make sure we have the correct input
  console.log(searchInput.value)
  // let's call our function here to get and render the astronauts
  getAndRenderAstronautList({
    search: searchInput.value
  })
})

document.addEventListener("DOMContentLoaded", async () => {
  await getAndRenderAstronautList()
})

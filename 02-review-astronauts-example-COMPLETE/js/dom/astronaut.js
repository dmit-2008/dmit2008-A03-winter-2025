/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

// create function called renderAstronautListItem
// two parameters/arguments
// use the data from the object in the html
// above.
// export and import in our index.js
const renderAstronautListItem = (astronautData, element) => {
  // the element we are just going to append innerHTML of it.

  // get the nationality
  let nationality = astronautData.nationality[0].nationality_name

  // let's do a short example on destructuring
  // let's get the name, date_of_birth and bio as variables
  let {name, date_of_birth, bio} = astronautData
  // below we see an example using it.
  element.innerHTML += `<li href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
          <img src="${astronautData.image.thumbnail_url}" class="rounded float-start" alt=""">
          <h5 class="mb-1">${name} (${astronautData.status.name})</h5>
          <small class="float-end">born ${date_of_birth}</small>
      </div>
      <small>${nationality} (${astronautData.agency.abbrev})</small>
      <p class="mb-1">${bio}</p>
  </li>`
}

// a named export
export { renderAstronautListItem }

// a note here if you wanted to create this a default export you would use
// the following syntax
// export default getAstronautListItem

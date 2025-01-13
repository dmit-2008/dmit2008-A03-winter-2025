/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
let newTopicForm = document.querySelector(".new-topic-form")
let topicsList = document.querySelector(".topics-list")

// define the function
const addTopicToPage = (topicName, topicElement) => {
  // append innerHTML
  topicElement.innerHTML += `<li class="list-group-item">
    ${topicName}
  </li>`
}

// let's add the event listener
newTopicForm.addEventListener("submit", (event)=> {
  // prevent the form from submitting to the server
  event.preventDefault()
  // form.elements returns all of the inputs of the form select
  // note that event.target and newTopicForm are the same thing
  // to get an input it's based on the html input name
  let topicInput = newTopicForm.elements["new-topic"]

  // validate and check if the topic input exists
  if (topicInput.value === "") {
    // the invalid case
    // we're going to add a html class to to the element using
    // .classList to show that it's invalid
    topicInput.classList.add("is-invalid")
    // we're return early
    return // if this return is hit nothing below it will get executed.
  }
  // below this line is valid.
  topicInput.classList.remove("is-invalid")

  // call our function
  addTopicToPage(
    topicInput.value, //what the user entered in the form.
    topicsList // the element
  )
})

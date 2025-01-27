// if you've completed the above
// I want you to create a ConceptItem
// component with on prop called idea
// that returns a list item.
export default function ConceptItem({idea, color}) {
  // let's use the style object to change
  // the color, let's pass this as a prop.
  if (!color) { // if it doesn't exist let's make it yellow.
    color = "yellow"
  }
  // the style prop modifies css
  return <li style={{color: color}}>
    {idea}
  </li>
}
// I want you folks
// create a component called
// concept list that will be an
export default function ConceptList({children}) {
  // a note on component names, they should always be the same as the file
  // ordered list that wrap all
  // nested components
  return <ol>
    {/* this prop will allow us to
      include any components within the opening and closing tags.
      <ConceptList>
        shtuff
      </ConceptList>
    */}
    {children}
  </ol>
}
// export default this component
// import it in your js.


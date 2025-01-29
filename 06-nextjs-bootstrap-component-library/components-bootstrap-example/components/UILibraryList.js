// what I want you to do
// create a component with the same name as the file.
// use react bootstrap list group to render this list
// as links in the components.
// import and use it in the index.js


import ListGroup from 'react-bootstrap/ListGroup';

const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	},
  {
    name: "React 95",
    url: "https://storybook.react95.io/?path=/story/docs-welcome-to-react95--page"
  },
  {
    name: "Shadcn",
    url: "https://ui.shadcn.com/"
  },
  {
    name: "Fluent UI (microsoft way)",
    url: "https://react.fluentui.dev/?path=/docs/components-accordion--docs"
  }
]

export default function UILibraryList() {
  // we're going to use map to loop through
  return <ListGroup>
    {UI_LIBRARY_LIST.map((uiLibraryItem, index) => {
      // key below here is use in react internals.
      // react uses it to optimize list rerendering.
      // use the url as the href of the link
      return <ListGroup.Item key={index}>
        <a
          href={uiLibraryItem.url}
          target="_blank"
        >
          {uiLibraryItem.name}
        </a>

      </ListGroup.Item>
    })}
  </ListGroup>
}
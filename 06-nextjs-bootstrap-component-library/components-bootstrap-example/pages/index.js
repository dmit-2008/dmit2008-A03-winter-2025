// I want you to search the docs
// and insert a container in the main using react bootstrap
// an h1 with some title
// row component and col in there.

// let's talk about imports
// top of imports is framework imports
// middle of imports is third libraries say for eg react-bootstrap
// bottom of imports is your custom imports

// all of these should be in alphabetical

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import UILibraryList from '@/components/UILibraryList';

export default function Home() {
  return (
    <div>
      <main>
        {/* Use the the container in the JSX */}
        <Container>
          <h1>React Bootstrap Demo</h1>
          <Row>
            <Col>
              <h2>Available UI Libraries</h2>
              {/* We're going to use our own component here */}
              <UILibraryList />
            </Col>
            <Col>
              <h2>Other functionality</h2>
              {/* Add a button on here with variant of danger
              I want you to add an accordion. */}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

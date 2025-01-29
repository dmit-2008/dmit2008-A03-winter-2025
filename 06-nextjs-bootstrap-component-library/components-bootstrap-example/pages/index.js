// I want you to search the docs
// and insert a container in the main using react bootstrap
// an h1 with some title
// row component and col in there.

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
            </Col>
            <Col>
              <h2>Other functionality</h2>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

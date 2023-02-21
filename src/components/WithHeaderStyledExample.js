import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function WithHeaderStyledExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;

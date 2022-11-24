import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SocMedBox } from "../components/SocMedBox";

export function Contact() {
  return (
    <>
      <Container>
        <h1>Contact Me</h1>
        <Row className="mb-2">
          <Col>
            <Form.Group>
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
          </Col>
          <Col xs={8}>
            <Form.Group>
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="text" placeholder="email@email.com" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>plchldr // design fill</Col>
          <Col xs={8}>
            <Form.Group className="mb-2">
              {/* <Form.Label>Preferred Pronouns // Multiselect in future</Form.Label> */}
              <Form.Control type="text" placeholder="they/them" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-2">
          {/* <Form.Label>MESSAGE</Form.Label> */}
          <Form.Control
            type="text"
            required
            as="textarea"
            rows={10}
            placeholder="Hi! I would love to connect..."
          />
        </Form.Group>

        <Button className="mb-2">Submit</Button>
      </Container>

      <Container className="fixed-bottom">
        <Row className="mb-3">
          <SocMedBox />
        </Row>
      </Container>
    </>
  );
}

// contact info here
// form
// your name, preferred pronouns, email address
// add multiselect for pronouns
// body of message
// submit button (send email)

// component with links to social media, linkedin, etc

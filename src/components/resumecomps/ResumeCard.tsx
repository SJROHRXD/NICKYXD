import { ControlledTabs } from "./ControlledTabs";
import { Skills } from "./Skills";
import { Card, Stack, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

export function ResumeCard() {
  return (
    <Card className="">
      <Card.Body className="">
        <Container className="mb-2 bg-light">
          <Stack direction="horizontal" gap={2}>
            <Card.Title>Title: </Card.Title>
            <Card.Title>Role</Card.Title>
            <Card.Subtitle className="ms-auto text-muted">
              DD.Month.YYYY - 01.Jan.2001
            </Card.Subtitle>
          </Stack>
        </Container>
        <Container className="mb-2">
          <ControlledTabs />
          {/* 🤍 Tabs for Job Description and Company Info,
          each components which import associated text values respectively */}
        </Container>
        <Container>
          <Skills />
          {/* 🤍 Skills component,
          which imports skills as buttons and function as tags,
          skills have a unique id */}
        </Container>
      </Card.Body>
    </Card>
  );
}

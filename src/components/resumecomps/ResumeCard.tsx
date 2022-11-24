import { ControlledTabs } from "./ControlledTabs";
import { Skills } from "./Skills";
import { Card, Stack, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

export function ResumeCard() {
  return (
    <Card className="">
      <Card.Body className="">
        <Container className="mb-2 square bg-light rounded">
          <Stack direction="horizontal" gap={1}>
            <Card.Title>Title: </Card.Title>
            <Card.Title>Role</Card.Title>
            <Card.Subtitle className="ms-auto text-muted">
              01.Jun.2021 - 01.Jun.2022
            </Card.Subtitle>
          </Stack>
        </Container>

        <Container className="mb-2">
          <ControlledTabs />
          {/* 🤍 Tabs for Job Description and Company Info,
          each components which import associated text values respectively */}
        </Container>

        <Container>
          <Stack direction="vertical" gap={1}>
            <Card.Subtitle>Skills</Card.Subtitle>
            <div className="pt-1 pb-1 square bg-light rounded p">
              <Skills />
              {/* 🤍 Skills component,
          which imports skills as buttons and function as tags,
          skills have a unique id */}
            </div>
          </Stack>
        </Container>
      </Card.Body>
    </Card>
  );
}

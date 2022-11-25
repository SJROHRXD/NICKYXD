import { ControlledTabs } from "./ControlledTabs";
import { Skills } from "./Skills";
import { Card, Stack, Container } from "react-bootstrap";
import "../../styles/navTabLinks.css";

export function ResumeCard() {
  return (
    <Card className="">
      <Card.Body className="">
        <Container className="mb-2">
          <Stack direction="horizontal" gap={1}>
            <Card.Title>Title: </Card.Title>
            <Card.Title>Role</Card.Title>
            <Card.Subtitle className="ms-auto text-muted align-right">
              Jun.2021 - Apr.2022
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
            <Card.Subtitle>Skills **filter by</Card.Subtitle>
            <div className="pt-1 pb-1 square bg-dark rounded p">
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

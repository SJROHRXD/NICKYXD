import { Skills } from "./Skills";
import { Card } from "react-bootstrap";

export function ResumeCard() {
  return (
    <Card>
      <Card.Title>Title/Role</Card.Title>
      <Card.Subtitle>Company</Card.Subtitle>
      <Card.Subtitle>Location</Card.Subtitle>
      <Card.Subtitle>Date Range</Card.Subtitle>
      <Card.Text>Job Description</Card.Text>
      <Card.Body>
        <Skills />
      </Card.Body>
    </Card>
  );
}

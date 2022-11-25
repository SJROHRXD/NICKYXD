import { ResumeCard } from "../components/resumecomps/ResumeCard";
import { Container } from "react-bootstrap";
import "../styles/App.css";

export function Resume() {
  return (
    <Container>
      <ResumeCard />
      <br></br>
      <ResumeCard />
      <br></br>
      <ResumeCard />
    </Container>
  );
}

// loop through resume cards
// correct breaks

// sort by date (asc, desc)
// sort by title/role

// filter by skills
// filter by date range
// filter by company
// filter by location
// filter by description keywords

// filter box, sort box

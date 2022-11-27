import { Carousel, Container, Image, Row } from "react-bootstrap";
import techBanner from "../../assets/techBanner.jpg";
import "../../styles/techBanner.css";

// create a container with techBanner as the background image
// and a text overlay

export function TechBanner() {
  return (
    <>
      <Row>
        <Container className="vw-100 m-0 p-0 position-fixed top-0 start-0">
          <Image src={techBanner} alt="techBanner" />
        </Container>
      </Row>
    </>
  );
}

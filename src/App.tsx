import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;

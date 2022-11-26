import { useState, FormEvent, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ContactInfoData, PNoun } from "../pages/Contact";
import { v4 as uuidV4 } from "uuid";
import CreatableReactSelect from "react-select/creatable";
import { MailIcon } from "@primer/octicons-react";
import { SocMedBox } from "./SocMedBox";

type ContactFormProps = {
  onSubmit: (data: ContactInfoData) => void;
  onAddPNoun: (pNoun: PNoun) => void;
  availablePNouns: PNoun[];
} & Partial<ContactInfoData>;

export function ContactForm({
  onSubmit,
  onAddPNoun,
  availablePNouns,
  pNouns = [
    { label: "she/her", id: uuidV4() },
    { label: "he/him", id: uuidV4() },
    { label: "they/them", id: uuidV4() },
  ],
}: ContactFormProps) {
  const nameURef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [selectedPNouns, setSelectedPNouns] = useState<PNoun[]>(pNouns);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const contactInfo: ContactInfoData = {
      nameU: nameURef.current?.value || "",
      email: emailRef.current?.value || "",
      message: messageRef.current?.value || "",
      pNouns: selectedPNouns,
    };

    console.table(contactInfo);

    onSubmit(contactInfo);

    // clear SOME the form after submitting🤍
    messageRef.current!.value = "";
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <h1 className="align-items-bottom">
          Contact Me <MailIcon className="pb-1" size={46} />
        </h1>
        <Row className="mb-2">
          <Col>
            {/* NAME HERE */}
            <Form.Group controlId="nameU">
              <Form.Control
                ref={nameURef}
                type="text"
                placeholder="Your Name"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={8}>
            {/* EMAIL HERE */}
            <Form.Group>
              <Form.Control
                ref={emailRef}
                type="text"
                placeholder="email@email.com"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* MULTI-SELECT PRONOUNS HERE */}
            <Form.Group className="mb-2">
              <CreatableReactSelect
                onCreateOption={(label) => {
                  const newPNoun = { id: uuidV4(), label };
                  onAddPNoun(newPNoun);
                  setSelectedPNouns((prev) => [...prev, newPNoun]);
                }}
                value={selectedPNouns.map((pNoun) => {
                  return { label: pNoun.label, value: pNoun.id };
                })}
                options={availablePNouns.map((pNoun) => {
                  return { label: pNoun.label, value: pNoun.id };
                })}
                onChange={(pNouns) => {
                  setSelectedPNouns(
                    pNouns.map((pNoun) => {
                      return { label: pNoun.label, id: pNoun.value };
                    })
                  );
                }}
                placeholder="ProNouns"
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        {/* MESSAGE BODY HERE */}
        <Form.Group className="mb-2">
          <Form.Control
            ref={messageRef}
            type="text"
            required
            as="textarea"
            rows={10}
            placeholder="Hi! I would love to connect..."
          />
        </Form.Group>
        {/* SEND MAIL + SUBMIT BUTTON */}
        <Button type="submit">Send Mail</Button>
      </Container>
      {/* IMPORT SOCIAL MEDIA BOX */}
      <Container className="fixed-bottom">
        <Row className="mb-3">
          <SocMedBox />
        </Row>
      </Container>
    </Form>
  );
}

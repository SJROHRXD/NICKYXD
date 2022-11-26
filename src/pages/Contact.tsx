import { useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import { ContactForm } from "../components/ContactFormPNouns";
import "../styles/buttonGeneralStyles.css";
import "../styles/contactGenStyles.css";

// types ✨📇

// Note
export type ContactInfo = {
  id: string;
} & ContactInfoData;

// RawNote
export type RawContactInfo = {
  id: string;
} & RawContactInfoData;

// NoteData
export type ContactInfoData = {
  nameU: string;
  email: string;
  message: string;
  pNouns: PNoun[];
};

// RawNoteData
export type RawContactInfoData = {
  nameU: string;
  email: string;
  message: string;
  pNounIds: string[];
};

// Tag
export type PNoun = {
  label: string;
  id: string;
};

export function Contact() {
  const [contactInfos, setContactInfos] = useLocalStorage<RawContactInfoData[]>(
    "CONTACTINFOS",
    []
  );
  const [pNouns, setPNouns] = useLocalStorage<PNoun[]>("PNOUNOPTIONS", []);

  function addPNoun(pNoun: PNoun) {
    setPNouns((prev) => [...prev, pNoun]);
  }

  function addContactInfo(contactInfo: ContactInfoData) {
    setContactInfos((prev) => [
      ...prev,
      {
        ...contactInfo,
        id: uuidV4(),
        pNounIds: contactInfo.pNouns.map((pNoun) => pNoun.id),
      },
    ]);
  }

  const availablePNouns = useMemo(() => {
    return pNouns.map((pNoun) => {
      return {
        ...pNoun,
        value: pNoun.id,
        label: pNoun.label,
      };
    });
  }, [pNouns]);

  return (
    <>
      <ContactForm
        onSubmit={addContactInfo}
        onAddPNoun={addPNoun}
        availablePNouns={availablePNouns}
      />
    </>
  );
}

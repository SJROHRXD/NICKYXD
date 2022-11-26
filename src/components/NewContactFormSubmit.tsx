import { ContactForm } from "../components/ContactFormPNouns";
import { ContactInfoData, PNoun } from "../pages/Contact";

type NewContactFormProps = {
  onSubmit: (data: ContactInfoData) => void;
  onAddPNoun: (pNoun: PNoun) => void;
  availablePNouns: PNoun[];
};

export function NewContactForm({
  onSubmit,
  onAddPNoun,
  availablePNouns,
}: NewContactFormProps) {
  return (
    <>
      <ContactForm
        onSubmit={onSubmit}
        onAddPNoun={onAddPNoun}
        availablePNouns={availablePNouns}
      />
    </>
  );
}

//imports
import ContactForm from "@/Components/ContactForm";
import HeroSectionContact from "@/Components/HeroSectionContact";
import container from "@/lib/data/heroSectionContact";
//contact us page
const ContactPage = () => {
  return (
    <>
      <HeroSectionContact container={container} />
      <ContactForm />
    </>
  );
};

export default ContactPage;

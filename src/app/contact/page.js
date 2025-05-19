import ContactForm from "@/Components/ContactForm";
import HeroSectionContact from "@/Components/HeroSectionContact";

const ContactPage = () => {
  const container = [
    {
      title: "دفتر مرکزی و فروش",
      address:
        "تهران، خیابان مولوی، نرسیده به میدان رازی، پاساژ بهمن، طبقه سوم، واحد 310",
      phones: ["55369166"],
      fax: null,
    },
    {
      title: "فروشگاه",
      address:
        "تهران، خیابان مولوی، نرسیده به میدان رازی، جنب پاساژ بهمن، کوچه میخچی، پلاک 50",
      phones: ["55399341", "55399342"],
      fax: null,
    },
    {
      title: "سمنان - گرمسار",
      address: "سمنان، گرمسار، شهرک صنعتی",
      phones: ["34552124", "34552300", "34552301-023"],
      fax: "34552072 – 34552310-023",
    },
  ];
  return (
    <>
      <HeroSectionContact container={container} />
      <ContactForm />
    </>
  );
};

export default ContactPage;

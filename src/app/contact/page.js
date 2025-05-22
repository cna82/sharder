import ContactForm from "@/Components/ContactForm";
import HeroSectionContact from "@/Components/HeroSectionContact";

const ContactPage = () => {
  const container = [
    {
      title: "مدیریت فروش کارخانه شاردر",
      address:
        " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
      phones: ["0912-843-3187"],
      fax: "سجاد ویسی مدیریت فروش",
    },
    {
      title: "کارخانه شاردر",
      address:
        " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
      phones: ["021-36917603"],
      fax: "خط ثابت مجموعه",
    },
    {
      title: "ایمیل مجموعه شاردر",
      address:
        " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
      phones: ["sharderlife@gmail.com"],
      fax: "رایانامه شاردر",
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

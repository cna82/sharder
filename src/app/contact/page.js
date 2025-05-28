import ContactForm from "@/Components/ContactForm";
import HeroSectionContact from "@/Components/HeroSectionContact";

const ContactPage = () => {
  const container = [
    {
      title: "کارخانه شاردر",
      address:
        " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت ۱۱ ، پلاک ۳۰ ، کارخانه شاردر",
      phones: ["۰۲۱-۳۶۹۱۷۶۰۳"],
      fax: "مدیریت فروش: سجاد ویسی",
    },
    {
      title: " مدیریت فروش ",
      address: " تهران، خیابان لاله زار،کوچه برلن،پاساژ آسیا،طبقه اول،پلاک ۴۵",
      phones: ["۰۲۱-۳۴۹۴۹۰۶۲", "۰۲۱-۳۴۹۴۹۰۶۳"],
    },
    {
      title: "راه های ارتباطی مجموعه",
      phones: [],
      fax: null,
      social: [
        {
          type: "instagram",
          label: "صفحه اینستاگرام شاردر",
          link: "https://instagram.com/sharder.co",
        },
        {
          type: "whatsapp",
          label: "ارتباط در واتساپ",
          link: "https://wa.me/989128433187",
        },
        {
          type: "email",
          label: "sharderlife@gmail.com",
          link: "mailto:sharderlife@gmail.com",
        },
      ],
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

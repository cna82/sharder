import ContactForm from "@/Components/ContactForm";
import HeroSectionContact from "@/Components/HeroSectionContact";

const ContactPage = () => {
  // const container = [
  //   {
  //     title: "مدیریت فروش کارخانه شاردر",
  //     address:
  //       " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
  //     phones: ["0912-843-3187"],
  //     fax: "سجاد ویسی مدیریت فروش",
  //   },
  //   {
  //     title: "کارخانه شاردر",
  //     address:
  //       " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
  //     phones: ["021-36917603"],
  //     fax: "خط ثابت مجموعه",
  //   },
  //   {
  //     title: "راه های ارتباطی مجموعه",
  //     address:
  //       " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
  //     phones: ["sharderlife@gmail.com"],
  //     fax: "رایانامه شاردر",
  //   },
  // ];
  const container = [
    {
      title: "کارخانه شاردر",
      address:
        " تهران ، قرچک ، شهرک صنعتی قرچک بلوار پیشرفت 11 ، پلاک 30 ، کارخانه شاردر",
      phones: ["021-36917603"],
      fax: "مدیریت فروش: سجاد ویسی",
    },
    {
      title: " مدیریت فروش ",
      address: " تهران، خیابان لاله زار،کوچه برلن،پاساژ آسیا،طبقه اول،پلاک 45",
      phones: ["021-34949062", "021-34949063"],
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

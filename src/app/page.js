import AboutSection from "@/Components/AboutSection";
import AmazingFeatures from "@/Components/AmazingFeatures";
import Faq from "@/Components/Faq";
import HeroSection from "@/Components/HeroSection";
import Process from "@/Components/Process";
import TrendingProducts from "@/Components/TrendingProducts";
import WarrantySection from "@/Components/WarrantySection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AmazingFeatures />
      <AboutSection />
      <WarrantySection />
      <TrendingProducts />
      <Process />
      <Faq />
    </>
  );
};
export default HomePage;

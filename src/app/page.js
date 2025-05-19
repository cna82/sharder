import AboutSection from "@/Components/AboutSection";
import AmazingFeatures from "@/Components/AmazingFeatures";
import FactoryImageGallery from "@/Components/FactoryImageGallery";
import Faq from "@/Components/Faq";
import HeroSection from "@/Components/HeroSection";
import Process from "@/Components/Process";
import TrendingProducts from "@/Components/TrendingProducts";
import WarrantySection from "@/Components/WarrantySection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AmazingFeatures />
      <AboutSection />
      <WarrantySection />
      {/* //api needed */}
      <TrendingProducts /> 
      <FactoryImageGallery />
      <Process />
      <Faq />
    </>
  );
};
export default Home;

import CallToAction from "@/components/CallToAction";
import FeaturedVenues from "@/components/FeaturedVenues";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import OurFeatures from "@/components/OurFeatures";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedVenues />
      <OurFeatures />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;

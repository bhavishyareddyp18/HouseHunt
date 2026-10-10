import "./Home.css";

import HeroSection from "../../components/home/HeroSection";
import StatsCounter from "../../components/home/StatsCounter";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import TrendingLocations from "../../components/home/TrendingLocations";
import MarketInsights from "../../components/home/MarketInsights";
import Testimonials from "../../components/home/Testimonials";
import PropertyRecommendation from "../../components/home/PropertyRecommendation";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import CallToAction from "../../components/home/CallToAction";

function Home() {

  return (

    <div className="home-page">

      <HeroSection />

      <StatsCounter />

      <FeaturedProperties />

      <TrendingLocations />

      <MarketInsights />

      <PropertyRecommendation />

      <WhyChooseUs />

      <Testimonials />
      <CallToAction />

    </div>

  );
}

export default Home;

import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import TestimonialStats from "./TestimonialStats";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <HowItWorks />
      <Pricing />
      <TestimonialStats />
    </div>
  );
};

export default Home;

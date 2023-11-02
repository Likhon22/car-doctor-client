import Footer from "../../Shared/Footer/Footer";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;

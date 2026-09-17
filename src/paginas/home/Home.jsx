import Navbar from "../../componentes/navbar/Navbar";
import Hero from "../../componentes/hero/Hero";
import HowWeWork from "../../componentes/howwework/HowWeWork";
import WhyChoose from "../../componentes/whychoose/WhyChoose";
import Reviews from "../../componentes/reviews/Reviews";
import Gallery from "../../componentes/gallery/Gallery"
import BlogPreview from "../../componentes/blogpreview/BlogPreview";
import Location from "../../componentes/location/Location";
import Contact from "../../componentes/contact/Contact";
import Footer from "../../componentes/footer/Footer";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWeWork />
      <WhyChoose />
      <Reviews />
      <Gallery />
      <BlogPreview />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;

import About from "../components/About";
import ContactUs from "../components/Contactus";
import FAQs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import reviews from "../../data";
import './globals.css'
export default function Home() {
  return <>
    <Navbar />
    <Hero />
    <About  />
    <Testimonials reviews={reviews}/>
    <FAQs />
    <ContactUs />
    <Footer />
  </>;
}

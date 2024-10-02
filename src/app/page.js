import Hero from "./components/Hero";
import About from "./components/About";
import Contactus from "./components/Contactus"
import Faqs from "./components/Faqs"
import Testimonials from "./components/Testimonials";
import reviews from "../../data";
export default function Home() {
  return (
    <div >
     
    
      <Hero/>
      <About/>
      <Testimonials  reviews={reviews}/>
      <Faqs/>
      <Contactus/>
    
    </div>
  );
}

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Gallery />
      <Process />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <InstagramFeed />
      <ContactSection />
      <Footer />
    </>
  );
}

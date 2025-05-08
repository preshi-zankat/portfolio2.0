import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function Home() {
  
  return (
    <div>
       <section id="home"><HeroSection /></section>
      <section id="about"><AboutMe /></section>
      <section id="projects"><ProjectsGallery /></section>
      <section id="contact"><Contact /></section>
      <Footer/>
    </div>
  );
}
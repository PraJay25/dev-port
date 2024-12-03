import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Hero />
      {/* <About /> */}
    </>
  );
}

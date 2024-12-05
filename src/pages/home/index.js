import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Slider />
      <Hero />
      {/* <About /> */}
    </>
  );
}

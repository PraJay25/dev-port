// pages/index.js
import ImageSlider from "@/components/Home/ImageSlider";
import CreativeAgency from "@/components/Home/CreativeAgenecy";
import Services from "@/components/Home/Services";
import Projects from "@/components/Home/Projects";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <CreativeAgency />
      <Services />
      <Projects />
    </>
  );
}

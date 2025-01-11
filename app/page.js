import HomeSection from "./sections/home/Home";
import About from "./sections/about/About";
import Features from "./sections/features/Features";
import Work from "./sections/work/Work";
import Laptop from "./sections/laptop/Laptop";
import Contact from "./sections/contact/Contact";

export default function Home() {
  return (
    <div className=" ">
      <HomeSection />
      <About />
      <Features />
      <Work />
      <Laptop />
      <Contact />
    </div>
  );
}
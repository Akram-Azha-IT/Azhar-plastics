import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Partners } from "@/components/sections/Partners";
import { Industries } from "@/components/sections/Industries";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Products />
        <Partners />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

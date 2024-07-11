import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className={"max-w-screen-xl w-full px-2 mx-auto"}>
      <div className={"mt-8"}>
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

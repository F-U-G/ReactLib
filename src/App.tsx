import { useState } from "react";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

interface SocialMedia {
  name: string;
  icon: string; // string of url to icon
  link: string;
}

const socials: SocialMedia[] = [
  {
    name: "Facebook",
    icon: "",
    link: ""
  },
  {
    name: "X",
    icon: "",
    link: ""
  },
  {
    name: "YouTube",
    icon: "",
    link: ""
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "contact":
        return <Contact />
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPage={currentPage} pageNav={setCurrentPage} />
      <main className="bg-white grow">
        {renderPage()}
      </main>
      <Footer socials={socials} />
    </div>
  )
}


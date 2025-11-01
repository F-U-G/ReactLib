import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  pageNav: (page: string) => void;
}

interface NavItems {
  name: string;
  id: string;
}

export default function Navbar({ currentPage, pageNav }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItems[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white fixed w-full z-10 shadow-sm">
      <div className="w-full md:w-2xl lg:w-4xl mx-auto px-8 md:px-0">
        <div className="flex items-center min-h-6 justify-between">
          <div className="flex items-center justify-center" >
            <span className="bg-primary text-tertiary rounded-md w-10 h-10 mr-4 text-center">L</span>
            <div className="text-tertiary py-8">
              Company Name
            </div>
          </div>
          <div className="hidden md:flex justify-center h-full">
            {navItems.map(item => (
              <button
                className="pl-4 py-8 min-w-20 hover:text-secondary"
                key={item.id}
                onClick={() => pageNav(item.id)}
                style={{ color: currentPage === item.id ? "text-primary" : "text-dark" }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" x2="18" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="18" y2="6"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden shadow-sm">
          {navItems.map(item => (
            <button
              className="w-full py-4 hover:text-secondary hover:inset-shadow-sm inset-shadow-tertiary"
              key={item.id}
              onClick={() => {
                pageNav(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

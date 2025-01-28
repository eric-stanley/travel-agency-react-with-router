// Layout.tsx
import { useEffect, useState } from "react";
import Navbar1 from "~/blocks/navbar/Navbar1";
import Footer4 from "~/blocks/footer/Footer4";
import { FaArrowUp } from "react-icons/fa";
import { ThemeProvider } from "~/components/theme-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showButton, setShowButton] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Navbar1 />
      <main>{children}</main>
      <Footer4 />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-primary text-black rounded-full shadow-lg focus:outline-none focus:ring-2"
        >
          <FaArrowUp />
        </button>
      )}
    </ThemeProvider>
  );
};

export default Layout;

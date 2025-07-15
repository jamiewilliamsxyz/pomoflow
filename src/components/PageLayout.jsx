import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

export const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow flex-col gap-5 items-center p-5">
        {children}
      </div>
      <Footer />
    </div>
  );
};

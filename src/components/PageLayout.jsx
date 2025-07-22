import { useContext, useState, useEffect } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

export const PageLayout = ({ children }) => {
  const { settings } = useContext(SettingsContext);
  const [displayFont, setDisplayFont] = useState(settings.font);

  useEffect(() => {
    switch (settings.font) {
      case "Default":
        setDisplayFont("font-inter");
        break;
      case "Roboto":
        setDisplayFont("font-roboto");
        break;
      case "Merriweather":
        setDisplayFont("font-merriweather");
        break;
      case "Fira Code":
        setDisplayFont("font-fira_code");
        break;
      case "Oswald":
        setDisplayFont("font-oswald");
        break;
      case "Playfair":
        setDisplayFont("font-playfair_display");
        break;
      default:
        setDisplayFont("font-inter");
    }
  }, [settings.font]);

  return (
    <div className={`flex flex-col min-h-screen ${displayFont}`}>
      <Navbar />
      <div className="flex flex-grow flex-col gap-5 items-center p-5">
        {children}
      </div>
      <Footer />
    </div>
  );
};

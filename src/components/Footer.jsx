import { FooterItem } from "./ui/FooterItem";

// Update link paths

const footerItems = [
  { name: "Rate us", path: "https://google.com" },
  { name: "Donate", path: "https://google.com" },
  { name: "Contact/Feedback", path: "https://google.com" },
  { name: "About the developer", path: "https://google.com" },
];

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 shadow-sm mt-6 p-4">
      <nav className="flex flex-row items-center gap-10">
        <div className="flex flex-col text-left gap-2">
          {footerItems.slice(0, 2).map(({ name, path }) => (
            <FooterItem key={name} name={name} path={path} />
          ))}
        </div>

        <div className="flex flex-col text-left gap-2">
          {footerItems.slice(2, 4).map(({ name, path }) => (
            <FooterItem key={name} name={name} path={path} />
          ))}
        </div>
      </nav>
    </footer>
  );
};

export const FooterItem = ({ path, name }) => {
  return (
    <a
      href={path}
      rel="noopener noreferrer"
      target="_blank"
      className="link link-hover"
    >
      {name}
    </a>
  );
};

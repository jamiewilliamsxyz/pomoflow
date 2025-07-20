export const Button = ({
  children,
  size = "md",
  colour = "primary",
  ...props
}) => {
  return (
    <button {...props} className={`btn btn-soft btn-${size} btn-${colour}`}>
      {children}
    </button>
  );
};

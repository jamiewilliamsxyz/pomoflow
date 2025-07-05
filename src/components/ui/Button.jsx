export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-primary">
      {children}
    </button>
  );
};

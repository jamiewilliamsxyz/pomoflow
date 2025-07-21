export const DefaultButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-soft btn-md btn-primary">
      {children}
    </button>
  );
};

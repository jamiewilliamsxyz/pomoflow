export const BackButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-soft btn-md btn-error">
      {children}
    </button>
  );
};

export const SaveButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-soft btn-md btn-success">
      {children}
    </button>
  );
};

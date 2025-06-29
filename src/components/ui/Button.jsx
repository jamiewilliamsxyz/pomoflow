const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-primary btn-sm">
      {children}
    </button>
  );
};

export default Button;

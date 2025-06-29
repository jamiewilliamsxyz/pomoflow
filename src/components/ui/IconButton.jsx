const IconButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-ghost btn-square btn-sm">
      {children}
    </button>
  );
};

export default IconButton;

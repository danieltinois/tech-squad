import "./styles.css";

export function Input({ icon: Icon, ...rest }) {
  return (
    <div className="container">
      <div className="search-container">
        {Icon && <Icon className="search-icon" size={20} />}
        <input {...rest} className="form-control search-input fw-medium" />
      </div>
    </div>
  );
}

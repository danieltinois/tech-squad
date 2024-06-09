import "./styles.css";

export function BtnMenu({ icon: Icon, user, ...rest }) {
  return (
    <button className="btn-menu" {...rest}>
      <img
        src="https://avatars.githubusercontent.com/u/99421761?s=400&u=dd76f7f8c19436a56e670ddc9e9bd3eb7410cc0d&v=4"
        alt="User"
      />
      <span className="user-name">{user}</span>
      {Icon && <Icon size={18} />}
    </button>
  );
}

function Header({ title = "React Test App" }) {
  return (
    <h4 style={{ color: "white", backgroundColor: "#f66", padding: "1rem" }}>
      {title}
    </h4>
  );
}

export default Header;

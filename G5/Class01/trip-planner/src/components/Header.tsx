import "./Header.css"; // WILL IMPORT THE EXTERNAL HEADER.CSS AND THE ARE GOING TO BE APPLIED

const Header = () => {
  // INLINE STYLING
  const navStyles = {
    display: "flex",
    gap: "20px",
    listStyleType: "none",
  };

  return (
    // INLINE STYLING
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid grey",
      }}
    >
      {/* USING className with external css file */}
      <h1 className="heading">Trip Planner Logo</h1>
      <ul style={navStyles}>
        <li className="nav-item">Home</li>
        <li className="nav-item">Trips</li>
        <li className="nav-item">About</li>
      </ul>
    </header>
  );
};

export default Header;

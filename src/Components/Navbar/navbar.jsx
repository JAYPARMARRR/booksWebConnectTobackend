 import "./navbar.css"


const NavbarWithSearchBox = () => {
  return (
    
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/Books" className="nav-link">Books</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </nav>
  );
}



export default NavbarWithSearchBox;
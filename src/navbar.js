const Navbar = () => {
  return (
    <div id="navbar-container">
      <ul id="navbar-list">
        <li>
          <button href="#" className="navbar-list-item">
            About Us
          </button>
        </li>
        <li>
          <button href="#" className="navbar-list-item">
            Our Programs
          </button>
        </li>
        <li>
          <button href="#" className="navbar-list-item">
            Find Food
          </button>
        </li>
        <li>
          <button href="#" className="navbar-list-item">
            Our Partners
          </button>
        </li>
        <li>
          <button href="#" className="navbar-list-item">
            Our Events
          </button>
        </li>
        <li>
          <button href="#" className="navbar-list-item">
            Get Involved
          </button>
        </li>
        <li>
          <button href="#" id="navbar-donate" className="navbar-list-item">
            Donate
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

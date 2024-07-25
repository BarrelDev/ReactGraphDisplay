interface NavbarProps {
  title: string;
  getImage: () => any;
}

const Navbar = ({ title, getImage }: NavbarProps) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-barnd mb-0 h1">{title}</span>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ marginBottom: "10px" }}
            onClick={getImage}
          >
            Save Report
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-barnd mb-0 h1">{title}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Categories", href: "#" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Store</h1>

      <nav className="nav">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;

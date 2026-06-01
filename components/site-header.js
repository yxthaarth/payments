import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/send", label: "Send" },
  { href: "/recipients", label: "Recipients" },
  { href: "/track", label: "Track" },
  { href: "/help", label: "Help" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">S</span>
        <span>Swiftly Pay</span>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="button button-primary header-button" href="/send">
        Send Money
      </Link>
    </header>
  );
}

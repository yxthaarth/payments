"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/send", label: "Send" },
  { href: "/recipients", label: "Recipients" },
  { href: "/track", label: "Track" },
  { href: "/help", label: "Help" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">S</span>
        <span>Swiftly Pay</span>
      </Link>

      <button
        aria-controls="primary-nav"
        aria-expanded={menuOpen}
        className="menu-toggle"
        onClick={() => setMenuOpen((current) => !current)}
        type="button"
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
      </button>

      <nav
        aria-label="Primary"
        className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}
        id="primary-nav"
      >
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

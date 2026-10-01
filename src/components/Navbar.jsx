import "./Navbar.css";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToogle";
const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];
const sectionId = (name) => (name === "Home" ? "hero" : name.toLowerCase());
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const toggle = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const current = navItems
        .map(sectionId)
        .filter(
          (id) =>
            document.getElementById(id)?.getBoundingClientRect().top <= 160,
        )
        .at(-1);
      setActive(current || "hero");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (!nav.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 960px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <nav
      ref={nav}
      className={`site-nav ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="nav-inner">
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          Ilham <span>Muhammad</span>
        </a>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setOpen(false);
          }}
        >
          {navItems.map((name) => (
            <a
              key={name}
              href={`#${sectionId(name)}`}
              aria-current={active === sectionId(name) ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation-links"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

import Link from "next/link";
import { BOOK_SESSION_CTA, isActivePath, nav } from "./constants";

interface NavbarMobileProps {
  pathname: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function NavbarMobile({
  pathname,
  menuOpen,
  setMenuOpen,
}: NavbarMobileProps) {
  const close = () => setMenuOpen(false);
  const bookActive = isActivePath(pathname, BOOK_SESSION_CTA.href);

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="lg:hidden relative z-50 flex flex-col justify-center gap-1.5 p-2 -mr-2 min-h-11 min-w-11"
      >
        <span
          className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="lg:hidden fixed inset-0 top-16 z-40 bg-black/20"
          onClick={close}
        />
      )}

      <div
        className={`lg:hidden fixed inset-x-0 top-16 z-50 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-out overflow-hidden ${
          menuOpen
            ? "max-h-[calc(100dvh-4rem)] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 py-4 flex flex-col overflow-y-auto max-h-[calc(100dvh-4rem)]">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {nav.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={`font-body text-base py-3.5 min-h-11 flex items-center border-b border-gray-50 ${
                    active
                      ? "text-[#0a7c6e] font-semibold"
                      : "text-gray-700 hover:text-[#0a7c6e]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href={BOOK_SESSION_CTA.href}
            onClick={close}
            aria-current={bookActive ? "page" : undefined}
            className={`mt-4 font-body text-sm font-semibold px-5 py-3.5 rounded-full min-h-11 flex items-center justify-center transition-colors ${
              bookActive
                ? "bg-[#085f56] text-white"
                : "bg-[#0a7c6e] text-white active:bg-[#085f56]"
            }`}
          >
            {BOOK_SESSION_CTA.label}
          </Link>
        </div>
      </div>
    </>
  );
}

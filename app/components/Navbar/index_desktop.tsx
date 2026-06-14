import Link from "next/link";
import { BOOK_SESSION_CTA, isActivePath, nav } from "./constants";

interface NavbarDesktopProps {
  pathname: string;
}

export default function NavbarDesktop({ pathname }: NavbarDesktopProps) {
  return (
    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
      {nav.map((link) => {
        const active = isActivePath(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`font-body text-sm transition-colors duration-200 ${
              active
                ? "text-[#0a7c6e] font-medium"
                : "text-gray-500 hover:text-[#0a7c6e]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href={BOOK_SESSION_CTA.href}
        aria-current={isActivePath(pathname, BOOK_SESSION_CTA.href) ? "page" : undefined}
        className={`font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md ${
          isActivePath(pathname, BOOK_SESSION_CTA.href)
            ? "bg-[#085f56] text-white"
            : "bg-[#0a7c6e] text-white hover:bg-[#085f56]"
        }`}
      >
        {BOOK_SESSION_CTA.label}
      </Link>
    </div>
  );
}

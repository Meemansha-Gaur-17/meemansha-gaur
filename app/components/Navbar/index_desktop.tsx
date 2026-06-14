import Link from "next/link";
import { BOOK_SESSION_CTA, nav } from "./constants";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
      {nav.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-body text-sm text-gray-500 hover:text-[#0a7c6e] transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href={BOOK_SESSION_CTA.href}
        className="font-body text-sm font-medium bg-[#0a7c6e] text-white px-5 py-2.5 rounded-full hover:bg-[#085f56] transition-all duration-200 hover:shadow-md"
      >
        {BOOK_SESSION_CTA.label}
      </Link>
    </div>
  );
}

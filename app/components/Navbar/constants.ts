import { nav } from "@/app/content/meta";
import type { NavbarCta } from "./interfaces";

export const LOGO = {
  src: "/mg-logo.png",
  alt: "Meemansha Gaur",
  width: 40,
  height: 40,
} as const;

export const SCROLL_THRESHOLD = 40;

export const BOOK_SESSION_CTA: NavbarCta = {
  label: "Book a Session",
  href: "/book",
};

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export { nav };

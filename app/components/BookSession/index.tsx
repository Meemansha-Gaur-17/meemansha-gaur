"use client";

import ResponsiveView from "../ResponsiveView";
import BookSessionDesktop from "./index_desktop";
import BookSessionMobile from "./index_mobile";

export default function BookSession() {
  return <ResponsiveView mobile={<BookSessionMobile />} desktop={<BookSessionDesktop />} />;
}

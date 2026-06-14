"use client";

import ResponsiveView from "../ResponsiveView";
import TestimonialsDesktop from "./index_desktop";
import TestimonialsMobile from "./index_mobile";

export default function Testimonials() {
  return <ResponsiveView mobile={<TestimonialsMobile />} desktop={<TestimonialsDesktop />} />;
}

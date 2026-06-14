export const BOOK_SESSION_COPY = {
  eyebrow: "Prefer email?",
  heading: "Send a Booking Request",
  description:
    "If you’d rather not book through Topmate — or want to check availability first — share your details below. I’ll reply within 1–2 business days with times that work.",
};

export const SESSION_TYPE_OPTIONS = [
  { value: "discovery", label: "Discovery call (20 min)" },
  { value: "career", label: "Psychology career guidance (45 min)" },
  { value: "therapy", label: "Therapy session for 18+ (60 min)" },
  { value: "other", label: "Not sure yet / other" },
] as const;

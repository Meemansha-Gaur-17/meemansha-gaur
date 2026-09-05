"use client";

import { useState, type FormEvent } from "react";
import { SESSION_TYPE_OPTIONS } from "./constants";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useBookSessionSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      sessionType: String(data.get("sessionType") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      availability: String(data.get("availability") ?? "").trim(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.sessionType ||
      !payload.message ||
      !payload.availability
    ) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    if (!SESSION_TYPE_OPTIONS.some((option) => option.value === payload.sessionType)) {
      setError("Please select a valid session type.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/book-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setError(result?.error ?? "Could not send the request. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError("Could not send the request. Please try again.");
      setStatus("error");
    }
  }

  return { status, error, handleSubmit };
}

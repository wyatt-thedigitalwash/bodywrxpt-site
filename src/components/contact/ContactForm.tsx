"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  referral: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
}

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email.";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.reason.trim()) errors.reason = "Please share your reason for visiting.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    reason: "",
    referral: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FieldErrors];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");

    // Honeypot check -- bots fill this hidden field
    if (honeypot) return;

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("sent");
    } catch {
      setServerError("Unable to send. Please try again or call us directly.");
      setStatus("idle");
    }
  }

  // Success state
  if (status === "sent") {
    return (
      <div className="flex flex-col justify-center py-8 md:py-16">
        <span className="mb-6 block text-[11px] font-normal uppercase tracking-[0.14em] text-bg/60">
          Message Sent
        </span>
        <p className="font-display text-[28px] leading-[1.2] tracking-[0.03em] text-bg md:text-[36px]">
          Thank you.
          <br />
          I&apos;ll be in touch soon.
        </p>
        <div className="mt-10">
          <Button href="/" variant="light">Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {serverError && (
        <p className="mb-8 text-[14px] text-[#C4937A]" role="alert">
          {serverError}
        </p>
      )}

      {/* Honeypot -- hidden from real users, catches bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="space-y-8 md:space-y-10">
        <Field
          label="Full Name"
          value={form.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          autoComplete="email"
          required
        />
        <Field
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          autoComplete="tel"
          required
        />
        <Field
          label="Reason for Visit"
          value={form.reason}
          onChange={(v) => update("reason", v)}
          error={errors.reason}
          multiline
          placeholder="Share what you're working through. Injury, recovery goal, or anything you'd like Dr. Mancuso to know."
          required
        />
        <Field
          label="How Did You Hear About Us"
          value={form.referral}
          onChange={(v) => update("referral", v)}
        />
      </div>

      <div className="mt-12 md:mt-14">
        <Button type="submit" variant="light" disabled={status === "sending"}>
          {status === "sending" ? "Sending\u2026" : "Send Request"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  multiline = false,
  placeholder,
  required = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${id}-error`;
  const inputClasses =
    "w-full bg-transparent border-b border-bg/18 pb-4 pt-2 text-[16px] font-light leading-[1.5] tracking-[0.01em] text-bg placeholder:text-bg/30 transition-colors duration-300 focus:border-bg focus-visible:outline-none md:text-[17px]";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-[13px] font-normal uppercase tracking-[0.12em] text-bg/60"
      >
        {label}
        {!required && (
          <span className="ml-2 normal-case tracking-normal text-bg/30">(optional)</span>
        )}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className={`${inputClasses} resize-none`}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
          autoComplete={autoComplete}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
      )}
      {error && (
        <p id={errorId} className="mt-3 text-[14px] text-[#C4937A]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

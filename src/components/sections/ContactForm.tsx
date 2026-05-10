// Contact form — minimal, posts to /api/lead.
// Inline error states + animated success.
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

interface State {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message: string;
}

const blank: State = {
  name: "",
  email: "",
  phone: "",
  address: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<State>(blank);
  const [errors, setErrors] = useState<Partial<Record<keyof State, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function validate(): boolean {
    const e: typeof errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Please enter a valid email.";
    if (form.phone.trim().length < 7) e.phone = "Please enter a phone number.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "contact-form", ...form }),
      });
      if (res.ok) setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-tc-pure-white border border-tc-fog rounded-sm p-10 text-center"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tc-fresh-cut text-white mb-5">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="font-display text-3xl text-tc-deep-navy">
          Got it, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 text-tc-charcoal/85 max-w-md mx-auto">
          Carson will text you back at {form.phone} within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="sm:col-span-2">
        <Label htmlFor="c-name">Name</Label>
        <Input
          id="c-name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-2"
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="c-email">Email</Label>
        <Input
          id="c-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-2"
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>
      <div>
        <Label htmlFor="c-phone">Phone</Label>
        <Input
          id="c-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-2"
          autoComplete="tel"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="c-address">Property address</Label>
        <Input
          id="c-address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="mt-2"
          autoComplete="street-address"
          placeholder="123 Brewster Dr, Henrico, VA 23233"
        />
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="c-service">Interested in</Label>
        <select
          id="c-service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="mt-2 flex h-12 w-full rounded-md border border-tc-fog bg-tc-pure-white px-4 text-base text-tc-charcoal focus:border-tc-fresh-cut focus:outline-none focus:ring-2 focus:ring-tc-fresh-cut/40"
        >
          <option value="">Choose a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="c-message">Message</Label>
        <Textarea
          id="c-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2"
          placeholder="Tell us about the property — anything we should know."
        />
      </div>

      <div className="sm:col-span-2 mt-2">
        <Button
          type="submit"
          disabled={submitting}
          className="bg-tc-fresh-cut hover:bg-tc-deep-forest text-white"
          size="lg"
        >
          {submitting ? "Sending…" : "Send message"}
          <Send className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}

// QuoteCalculator — multi-step wizard.
// Steps: services → lawn size → frequency → ZIP → notes → contact details → result.
// Animated transitions via framer-motion.
// Posts to /api/lead with the full payload + a computed estimate range.

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  Sparkles,
  TreeDeciduous,
  Scissors,
  Trees,
  Hammer,
  Sprout,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type LawnSize = "lt-quarter" | "quarter-half" | "half-one" | "one-plus" | "unsure";
type Frequency = "one-time" | "weekly" | "bi-weekly" | "monthly";

const SERVICE_OPTIONS = [
  { id: "mowing", label: "Weekly Mowing", icon: Sprout },
  { id: "mulch", label: "Mulch & Beds", icon: Leaf },
  { id: "cleanup", label: "Seasonal Cleanup", icon: TreeDeciduous },
  { id: "install", label: "Install / Design", icon: Hammer },
  { id: "aeration", label: "Aeration & Seed", icon: Trees },
  { id: "pruning", label: "Pruning", icon: Scissors },
  { id: "other", label: "Something else", icon: Sparkles },
] as const;

type ServiceId = (typeof SERVICE_OPTIONS)[number]["id"];

const SIZE_OPTIONS: { id: LawnSize; label: string; sub: string }[] = [
  { id: "lt-quarter", label: "Under ¼ acre", sub: "Townhouse / small lot" },
  { id: "quarter-half", label: "¼ – ½ acre", sub: "Most Henrico lots" },
  { id: "half-one", label: "½ – 1 acre", sub: "Wyndham, Salisbury" },
  { id: "one-plus", label: "1+ acre", sub: "Estate / custom quote" },
  { id: "unsure", label: "I'm not sure", sub: "We'll measure on the walk" },
];

const FREQ_OPTIONS: { id: Frequency; label: string }[] = [
  { id: "one-time", label: "One-time visit" },
  { id: "weekly", label: "Weekly (recommended)" },
  { id: "bi-weekly", label: "Bi-weekly" },
  { id: "monthly", label: "Monthly" },
];

// Pricing logic — kept transparent. Exposed in the result screen.
function estimateMowing(size: LawnSize): [number, number] | null {
  switch (size) {
    case "lt-quarter":
      return [40, 55];
    case "quarter-half":
      return [55, 80];
    case "half-one":
      return [80, 140];
    case "one-plus":
      return [140, 240];
    case "unsure":
      return [55, 140];
    default:
      return null;
  }
}

const SERVICE_AREA_ZIPS = new Set([
  "23059", "23060", "23069", "23075", "23103", "23111", "23112", "23113",
  "23114", "23116", "23117", "23120", "23139", "23140", "23146", "23150",
  "23173", "23219", "23220", "23221", "23222", "23223", "23224", "23225",
  "23226", "23227", "23228", "23229", "23230", "23231", "23233", "23234",
  "23235", "23236", "23237", "23238", "23294",
]);

interface FormState {
  services: ServiceId[];
  size: LawnSize | null;
  frequency: Frequency | null;
  zip: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const blankForm: FormState = {
  services: [],
  size: null,
  frequency: null,
  zip: "",
  notes: "",
  name: "",
  email: "",
  phone: "",
  address: "",
};

const STEP_LABELS = [
  "Services",
  "Lawn size",
  "Frequency",
  "Where",
  "Notes",
  "Your details",
];

export function QuoteCalculator({
  variant = "page",
}: {
  // "page" = full screen (used on /quote)
  // "embed" = compact (used in home preview)
  variant?: "page" | "embed";
}) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(blankForm);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ ok: boolean; message?: string } | null>(
    null
  );

  // Validation per step — keeps logic local to the wizard.
  const canAdvance = useMemo(() => {
    switch (step) {
      case 0:
        return form.services.length > 0;
      case 1:
        return form.size !== null;
      case 2:
        return form.frequency !== null;
      case 3:
        return /^\d{5}$/.test(form.zip);
      case 4:
        return true; // notes optional
      case 5:
        return (
          form.name.trim().length > 1 &&
          /\S+@\S+\.\S+/.test(form.email) &&
          form.phone.trim().length >= 7
        );
      default:
        return false;
    }
  }, [step, form]);

  const inServiceArea = form.zip ? SERVICE_AREA_ZIPS.has(form.zip) : true;

  // Compute estimate range for result screen.
  const estimate = useMemo(() => {
    const wantsMowing = form.services.includes("mowing");
    const range = wantsMowing && form.size ? estimateMowing(form.size) : null;
    if (!range) return null;
    const [lo, hi] = range;
    if (form.frequency === "weekly") return { lo, hi, unit: "per visit" };
    if (form.frequency === "bi-weekly")
      return { lo: Math.round(lo * 1.1), hi: Math.round(hi * 1.1), unit: "per visit" };
    if (form.frequency === "monthly")
      return { lo: Math.round(lo * 1.25), hi: Math.round(hi * 1.25), unit: "per visit" };
    return { lo, hi, unit: "per visit" };
  }, [form]);

  const next = () => canAdvance && setStep((s) => Math.min(STEP_LABELS.length - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  async function submit() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "quote-calculator",
          ...form,
          estimate,
          inServiceArea,
        }),
      });
      const data = await res.json().catch(() => ({}));
      setDone({
        ok: res.ok,
        message: data?.message,
      });
    } catch {
      setDone({ ok: false, message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  // Toggle a service id in the multi-select
  function toggleService(id: ServiceId) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(id)
        ? f.services.filter((s) => s !== id)
        : [...f.services, id],
    }));
  }

  // Result screen — shown after submit.
  if (done?.ok) {
    return (
      <div className="bg-tc-pure-white border border-tc-fog rounded-sm p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-tc-fresh-cut text-white mb-6">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl text-tc-deep-navy">
          Thanks, {form.name.split(" ")[0] || "neighbor"}.
        </h3>
        {estimate ? (
          <p className="mt-4 text-lg text-tc-charcoal/85 max-w-xl mx-auto">
            Your ballpark for mowing is{" "}
            <span className="font-display text-tc-deep-navy">
              ${estimate.lo}–${estimate.hi}
            </span>{" "}
            {estimate.unit}. Carson will text you back within one business day
            with a firm number after a quick walk of the property.
          </p>
        ) : (
          <p className="mt-4 text-lg text-tc-charcoal/85 max-w-xl mx-auto">
            Carson will text you back within one business day with a firm quote
            after a quick walk of the property.
          </p>
        )}
        <p className="mt-6 text-sm text-tc-stone">
          We&rsquo;ll reach out at {form.phone} or {form.email}.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-tc-pure-white border border-tc-fog rounded-sm",
        variant === "page" ? "p-8 md:p-12" : "p-6 md:p-8"
      )}
    >
      {/* Progress + step label */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-tc-stone">
            Step {step + 1} of {STEP_LABELS.length}
          </p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl text-tc-deep-navy">
            {STEP_LABELS[step]}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone hidden sm:block">
            30-second quote
          </p>
        </div>
      </div>

      <div className="h-1 w-full bg-tc-fog rounded-full overflow-hidden mb-10">
        <motion.div
          className="h-full bg-tc-fresh-cut"
          initial={false}
          animate={{ width: `${((step + 1) / STEP_LABELS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* STEP 0 — services */}
          {step === 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_OPTIONS.map(({ id, label, icon: Icon }) => {
                const active = form.services.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleService(id)}
                    className={cn(
                      "flex flex-col items-start gap-2 p-4 rounded-sm border text-left transition-all",
                      active
                        ? "border-tc-fresh-cut bg-tc-fresh-cut/5"
                        : "border-tc-fog bg-tc-warm-cream/40 hover:border-tc-stone/40"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        active ? "text-tc-fresh-cut" : "text-tc-stone"
                      )}
                    />
                    <span className="font-medium text-sm text-tc-deep-navy">
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 1 — lawn size */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SIZE_OPTIONS.map((opt) => {
                const active = form.size === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() =>
                      setForm((f) => ({ ...f, size: opt.id as LawnSize }))
                    }
                    className={cn(
                      "p-5 rounded-sm border text-left transition-all",
                      active
                        ? "border-tc-fresh-cut bg-tc-fresh-cut/5"
                        : "border-tc-fog bg-tc-warm-cream/40 hover:border-tc-stone/40"
                    )}
                  >
                    <p className="font-display text-lg text-tc-deep-navy">
                      {opt.label}
                    </p>
                    <p className="mt-1 text-sm text-tc-stone">{opt.sub}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 2 — frequency */}
          {step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FREQ_OPTIONS.map((opt) => {
                const active = form.frequency === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() =>
                      setForm((f) => ({ ...f, frequency: opt.id as Frequency }))
                    }
                    className={cn(
                      "p-5 rounded-sm border text-left transition-all",
                      active
                        ? "border-tc-fresh-cut bg-tc-fresh-cut/5"
                        : "border-tc-fog bg-tc-warm-cream/40 hover:border-tc-stone/40"
                    )}
                  >
                    <p className="font-display text-lg text-tc-deep-navy">
                      {opt.label}
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 3 — ZIP */}
          {step === 3 && (
            <div>
              <Label htmlFor="zip">Property ZIP code</Label>
              <Input
                id="zip"
                inputMode="numeric"
                pattern="\d{5}"
                maxLength={5}
                value={form.zip}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    zip: e.target.value.replace(/\D/g, "").slice(0, 5),
                  }))
                }
                placeholder="23233"
                className="mt-2 max-w-xs"
              />
              {form.zip.length === 5 && !inServiceArea && (
                <p className="mt-3 text-sm text-tc-stone">
                  Looks like that ZIP is outside our regular service area —
                  send the form anyway and Carson will reach out to confirm.
                </p>
              )}
              {form.zip.length === 5 && inServiceArea && (
                <p className="mt-3 text-sm text-tc-fresh-cut font-medium">
                  ✓ We service that area regularly.
                </p>
              )}
            </div>
          )}

          {/* STEP 4 — notes */}
          {step === 4 && (
            <div>
              <Label htmlFor="notes">
                Anything we should know? (optional)
              </Label>
              <Textarea
                id="notes"
                value={form.notes}
                onChange={(e) =>
                  setForm((f) => ({ ...f, notes: e.target.value }))
                }
                placeholder="e.g. dog in backyard, gate code 1234, drainage issue near the foundation"
                className="mt-2"
              />
            </div>
          )}

          {/* STEP 5 — contact */}
          {step === 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="mt-2"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Property address (optional)</Label>
                <Input
                  id="address"
                  value={form.address}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, address: e.target.value }))
                  }
                  placeholder="123 Brewster Dr, Henrico, VA 23233"
                  className="mt-2"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer controls */}
      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={back}
          disabled={step === 0}
          className="text-tc-stone hover:text-tc-deep-navy"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
        {step < STEP_LABELS.length - 1 ? (
          <Button
            onClick={next}
            disabled={!canAdvance}
            className="bg-tc-fresh-cut hover:bg-tc-deep-forest text-white"
          >
            Continue
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={submit}
            disabled={!canAdvance || submitting}
            className="bg-tc-fresh-cut hover:bg-tc-deep-forest text-white"
          >
            {submitting ? "Sending…" : "Send to Carson"}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>

      {done && !done.ok && (
        <p className="mt-4 text-sm text-red-600">
          {done.message ?? "Something went wrong sending your quote."} You can
          also call (804) 912-5530.
        </p>
      )}
    </div>
  );
}

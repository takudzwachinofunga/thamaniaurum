"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const subject = (formData.get("subject") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    const investor = formData.get("investor");
    const partner = formData.get("partner");

    const newErrors: string[] = [];

    if (!name) newErrors.push("Name is required");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.push("Valid email is required");
    if (!phone) newErrors.push("Phone number is required");
    if (!subject) newErrors.push("Subject is required");
    if (!message) newErrors.push("Message is required");
    if (!investor && !partner)
      newErrors.push("Please select at least one category");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">
          Thank You!
        </h3>
        <p className="text-navy/60 mb-6">
          We have received your inquiry and will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 font-semibold text-sm mb-2">
            Please fix the following:
          </p>
          <ul className="flex flex-col gap-1">
            {errors.map((err, i) => (
              <li key={i} className="text-red-600 text-sm">
                {err}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-navy font-semibold text-sm"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-navy font-semibold text-sm"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-navy font-semibold text-sm"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="organization"
            className="text-navy font-semibold text-sm"
          >
            Organization/Company
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-navy font-semibold text-sm">
          I am interested in: *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-navy/70">
            <input
              type="checkbox"
              id="investor"
              name="investor"
              value="investor"
              className="w-4 h-4 accent-gold"
            />
            Investment Opportunity
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-navy/70">
            <input
              type="checkbox"
              id="partner"
              name="partner"
              value="partner"
              className="w-4 h-4 accent-gold"
            />
            Partnership/Collaboration
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-navy font-semibold text-sm"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="e.g., Lab Services Inquiry, Investment Discussion"
          className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-navy font-semibold text-sm"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Please tell us about your inquiry..."
          className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-y"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="service"
          className="text-navy font-semibold text-sm"
        >
          Which service interests you?
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
        >
          <option value="">-- Select an option --</option>
          <option value="verification">
            Verification & Laboratory (Assaying)
          </option>
          <option value="production">
            Production (Mining Partnerships)
          </option>
          <option value="refining">Refining (Bullion Production)</option>
          <option value="liquidity">
            Liquidity & Trading (Global Markets)
          </option>
          <option value="investment">Investment Opportunity</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded-lg font-bold text-sm hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}

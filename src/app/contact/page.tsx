"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/visual/GlassCard";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import { COMPANY_CONFIG } from "@/lib/company";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

const PROJECT_TYPES = [
  "Software Development",
  "Web & Mobile App Development",
  "UI/UX Design",
  "Testing & Quality Assurance",
  "Implementation & Integration",
  "Software Licensing & Distribution",
  "Maintenance & Support",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: ["Software Development"],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const toggleProjectType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectType.includes(type);
      if (exists) {
        return {
          ...prev,
          projectType: prev.projectType.length > 1 ? prev.projectType.filter((t) => t !== type) : prev.projectType,
        };
      } else {
        return {
          ...prev,
          projectType: [...prev.projectType, type],
        };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim() || !formData.email.includes("@") || !formData.email.includes(".")) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please provide at least a brief description of your inquiry (min 10 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setServerError(err.message || "Something went wrong. Please try again or reach out to us directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      projectType: ["Software Development"],
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setServerError(null);
  };

  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=Project%20Inquiry%20-%20${encodeURIComponent(formData.projectType.join(", "))}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="relative pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Contact Us"
        title="Contact Miaga Technologies LLP"
        subtitle="Get in touch with our team for software development inquiries, application design, project consultations, or general support."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 border-amethyst-500/30">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-12 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-amethyst-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-violet-royal dark:text-pearl-50">
                    Inquiry Received
                  </h3>

                  <p className="text-sm text-text-secondary dark:text-lavender-medium max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>{COMPANY_CONFIG.legalName}</strong>. Our team will review your inquiry and respond within 1–2 working days.
                  </p>

                  <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-amethyst-500/15 text-xs text-left max-w-sm mx-auto space-y-1.5 font-mono">
                    <div>
                      <span className="text-text-muted">Contact: </span>
                      <span className="text-text-primary dark:text-pearl-100">{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Email: </span>
                      <span className="text-text-primary dark:text-pearl-100">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Services: </span>
                      <span className="text-amethyst-600 dark:text-amethyst-300">
                        {formData.projectType.join(", ")}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={resetForm}
                      variant="secondary"
                      size="sm"
                      leftIcon={<RotateCcw className="w-4 h-4" />}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-violet-royal dark:text-pearl-50 mb-1">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-text-secondary dark:text-lavender-medium">
                      Fill out the form below or contact us directly at{" "}
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-amethyst-600 dark:text-amethyst-400 underline">
                        {CONTACT_INFO.email}
                      </a>.
                    </p>
                  </div>

                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-xs text-rose-600 dark:text-rose-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                      <a
                        href={mailtoLink}
                        className="font-semibold underline hover:text-rose-700 shrink-0"
                      >
                        Send via Email Client →
                      </a>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white/60 dark:bg-violet-deep/60 border text-violet-royal dark:text-pearl-50 placeholder:text-text-muted focus:outline-none transition-all ${
                          errors.fullName
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-amethyst-500/20 focus:border-amethyst-500 focus:ring-2 focus:ring-amethyst-500/20"
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white/60 dark:bg-violet-deep/60 border text-violet-royal dark:text-pearl-50 placeholder:text-text-muted focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                            : "border-amethyst-500/20 focus:border-amethyst-500 focus:ring-2 focus:ring-amethyst-500/20"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/60 dark:bg-violet-deep/60 border border-amethyst-500/20 focus:border-amethyst-500 focus:ring-2 focus:ring-amethyst-500/20 text-violet-royal dark:text-pearl-50 placeholder:text-text-muted focus:outline-none transition-all"
                    />
                  </div>

                  {/* Project Type Multi-Select Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-2">
                      Services of Interest (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.projectType.includes(type);
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => toggleProjectType(type)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              isSelected
                                ? "bg-amethyst-600 text-white font-semibold shadow-amethyst-glow"
                                : "bg-black/5 dark:bg-white/5 text-text-secondary dark:text-lavender-medium border border-amethyst-500/20 hover:border-amethyst-500/50 hover:bg-amethyst-500/10"
                            }`}
                          >
                            {isSelected && "✓ "}
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-violet-royal dark:text-pearl-100 mb-1.5">
                      Inquiry Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share an overview of your requirements, current scope, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white/60 dark:bg-violet-deep/60 border text-violet-royal dark:text-pearl-50 placeholder:text-text-muted focus:outline-none transition-all ${
                        errors.message
                          ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                          : "border-amethyst-500/20 focus:border-amethyst-500 focus:ring-2 focus:ring-amethyst-500/20"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-500 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Action Buttons: Submit Form & Direct Mailto Link */}
                  <div className="space-y-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full"
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Submit Inquiry
                    </Button>

                    <div className="text-center">
                      <span className="text-xs text-text-muted">Or email us directly at </span>
                      <a
                        href={mailtoLink}
                        className="text-xs font-medium text-amethyst-600 dark:text-amethyst-400 hover:underline"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Right: Direct Information & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 border-amethyst-500/25 space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-violet-royal dark:text-pearl-50 mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-text-secondary dark:text-lavender-medium">
                  {CONTACT_INFO.company}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block uppercase tracking-wider font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-medium text-violet-royal dark:text-pearl-100 hover:text-amethyst-600 hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block uppercase tracking-wider font-semibold">
                      Telephone
                    </span>
                    <div className="font-mono text-violet-royal dark:text-pearl-100 font-medium">
                      {CONTACT_INFO.phonePrimary}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block uppercase tracking-wider font-semibold">
                      Registered Office
                    </span>
                    <span className="text-text-secondary dark:text-lavender-medium text-xs leading-relaxed block">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amethyst-500/10 text-amethyst-600 dark:text-amethyst-300 border border-amethyst-500/20 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block uppercase tracking-wider font-semibold">
                      Business Hours
                    </span>
                    <span className="text-text-secondary dark:text-lavender-medium text-xs block">
                      {CONTACT_INFO.hours}
                    </span>
                    <span className="text-amethyst-600 dark:text-amethyst-300 text-[11px] block mt-0.5 font-medium">
                      {CONTACT_INFO.responseWindow}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

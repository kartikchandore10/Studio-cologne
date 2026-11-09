"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Briefcase, HelpCircle, Sparkles } from "lucide-react";

export function NewsletterAndContact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        topic: "general",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 border-t border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Address & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="amber">DISPATCH & DIALOGUE</Badge>
                <span className="text-xs font-mono text-muted-foreground uppercase">
                  // COLOGNE ATELIER
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Whether you have inquiries regarding press access, collaborative art projects, exhibitions, or simply wish to share your experience with Harold Halibut, we welcome your message.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-foreground">
                    General & Business
                  </div>
                  <div className="text-xs font-mono text-primary mt-0.5">
                    mail@slow-bros.com
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Slow Bros. GmbH, Cologne
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-foreground">
                    Press & Media Inquiries
                  </div>
                  <div className="text-xs font-mono text-primary mt-0.5">
                    popagenda PR Partners
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Fast review codes & high-res asset requests
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-foreground">
                    Studio Atelier
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-0.5">
                    Cologne, North Rhine-Westphalia, Germany
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Visits by appointment only
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xl">
              <h3 className="font-serif font-bold text-2xl text-foreground mb-1">
                Transmit a Message
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Directly sent to the Slow Bros studio desk in Cologne.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-foreground">
                    Transmission Received!
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Danke schön. We have received your inquiry and will respond from our workshop shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Harold"
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-sans"
                    >
                      <option value="general">General Studio Inquiry</option>
                      <option value="press">Press & Review Codes</option>
                      <option value="publishing">Exhibitions & Cultural Showcases</option>
                      <option value="careers">Careers & Freelance Fabrication</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or question here..."
                      className="w-full bg-background border border-border rounded-xl p-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-mono text-xs uppercase tracking-wider rounded-xl gap-2 px-6 h-11"
                    >
                      {isSubmitting ? (
                        <>
                          <Sparkles className="h-4 w-4 animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


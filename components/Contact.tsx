'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Github,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';
import { useThemeAccent } from './ThemeAccentContext';

export default function Contact() {
  const { accentStyles } = useThemeAccent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    submissionId?: string;
  }>({ type: 'idle', message: '' });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Message transmitted successfully!',
          submissionId: data.submissionId,
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to submit. Please verify all fields.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network transmission failure. Please reach out directly via email.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>INITIATE ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you have a technical opportunity, an enterprise IT challenge, or an aviation project—let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct contact card */}
            <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reach out directly or utilize the secure transmission form. All messages are routed to my verified inbox.
              </p>

              {/* Email box */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3 truncate">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 transition-colors ml-2 flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone number box */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3 truncate">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Line &amp; WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/[\s+]/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 transition-colors ml-2 flex-shrink-0"
                  title="Copy contact number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Current Station</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-[11px] text-slate-400">{PERSONAL_INFO.locationDetails}</div>
                </div>
              </div>

              {/* Response Time SLA */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Response SLA</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Within 24 Business Hours
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-3">
                  Professional Networks
                </div>
                <div className="flex flex-col space-y-2">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl glass-panel border border-white/5 hover:border-cyan-400/40 text-xs text-slate-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center space-x-2.5">
                        {item.name === 'LinkedIn' && <Linkedin className="w-4 h-4 text-cyan-400" />}
                        {item.name === 'GitHub' && <Github className="w-4 h-4 text-purple-400" />}
                        {item.name === 'Email' && <Mail className="w-4 h-4 text-blue-400" />}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">
                        {item.username}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-10 relative">
              <h3 className="text-2xl font-bold text-white mb-2">
                Transmit a Message
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Fill in the verified communication parameters below. All submissions generate an authentic delivery receipt.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot anti-spam (hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Subject / Discussion Scope <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Technical Support Role / Full-Stack Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Detailed Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide context regarding the project, timeline, location, or technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {/* Status Notice */}
                <AnimatePresence>
                  {status.type !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 rounded-xl text-xs flex items-start space-x-3 border ${
                        status.type === 'success'
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                          : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                      )}
                      <div>
                        <div className="font-semibold">{status.message}</div>
                        {status.submissionId && (
                          <div className="mt-1 font-mono text-[10px] text-emerald-400/80">
                            Receipt ID: {status.submissionId}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                  } ${accentStyles.button}`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Verified Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


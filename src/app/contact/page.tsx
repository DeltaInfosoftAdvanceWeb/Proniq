'use client';

import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Clock, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function ContactPage() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Stylish CAPTCHA States
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });
  const [captchaAnswer, setCaptchaAnswer] = useState(0);

  // Properly initialize captcha with useEffect
  useEffect(() => {
    generateCaptcha();
  }, []);

  function generateCaptcha() {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1: n1, num2: n2, answer: '' });
    setCaptchaAnswer(n1 + n2);
  }


  const handleStartVerification = () => {
    setIsVerifying(true);
    // Artificial delay for "Scanning" feel
    setTimeout(() => {
      setIsVerifying(false);
    }, 1500);
  };

  const checkCaptcha = (val: string) => {
    setCaptcha({ ...captcha, answer: val });
    if (parseInt(val) === captchaAnswer) {
      setIsVerified(true);
      setError(null);
    } else {
      setIsVerified(false);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isVerified) {
      setError('Please complete the human verification.');
      return;
    }

    setLoading(true);
    setError(null);

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      setError('Contact form is currently in demo mode. Please configure Supabase environment variables to enable submissions.');
      setLoading(false);
      return;
    }


    try {

      const { error: supabaseError } = await supabase.from('contacts').insert([
        {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }
      ]);

      if (supabaseError) {
        console.error('Supabase Error:', supabaseError);
        throw new Error(supabaseError.message);
      }

      setSuccess(true);
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsVerified(false);
      generateCaptcha();
    } catch (err: any) {
      console.error('Submission Error:', err);
      setError(err.message || 'Failed to send message. Please try again later.');
      setIsVerified(false);
      generateCaptcha();
    } finally {
      setLoading(false);
    }
  }


  const inputClass =
    'w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ' +
    'rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all';

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* HEADER */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a question or want to discuss a project? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* LEFT SIDE */}
            <div className="space-y-12">
              <div className="grid gap-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      Visit Us
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      701, Safal Profitaire,<br />
                      Prahladnagar, Ahmedabad,<br />
                      Gujarat 380015
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      Email Us
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      info@deltainfosoft.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      Business Hours
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Mon – Sat: 9:30 AM – 6:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Delta%20Infosoft%20Ahmedabad&output=embed"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    required
                    placeholder="First Name"
                    value={form.first_name}
                    onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    required
                    placeholder="Last Name"
                    value={form.last_name}
                    onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />

                <input
                  placeholder="Phone (Optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />

                <textarea
                  required
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />

                {/* STYLISH CAPTCHA SECTION */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all">
                  <AnimatePresence mode="wait">
                    {!isVerified && !isVerifying && captcha.answer === '' && (
                      <motion.div
                        key="initial"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-6 flex items-center justify-between group cursor-pointer"
                        onClick={handleStartVerification}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                            <ShieldCheck className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white text-sm">Human Verification</p>
                            <p className="text-xs text-slate-500">Click to confirm you’re not a robot</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm"
                        >
                          Verify
                        </motion.button>
                      </motion.div>
                    )}

                    {isVerifying && (
                      <motion.div
                        key="verifying"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-10 flex flex-col items-center justify-center gap-4 text-center"
                      >
                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">Scanning Session...</p>
                          <p className="text-xs text-slate-500">Analyzing behavior patterns</p>
                        </div>
                      </motion.div>
                    )}

                    {(!isVerifying && (captcha.answer !== '' || isVerified || (!isVerified && isVerifying === false && captcha.num1 !== 0))) && (
                      // This condition is a bit complex to ensure we show the challenge after verifying
                      // but simple isVerifying check above handles the transition
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {isVerified ? (
                              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <ShieldCheck className="w-4 h-4" />
                              </div>
                            )}
                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                              {isVerified ? 'Identity Confirmed' : 'Security Challenge'}
                            </p>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">CODE: PRONI-0X{captchaAnswer}</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className={`px-6 py-4 rounded-2xl border-2 transition-all duration-500 font-mono font-black text-2xl tracking-tighter
                            ${isVerified
                              ? 'bg-green-50 border-green-200 text-green-600 dark:bg-green-900/20 dark:border-green-800'
                              : 'bg-white border-slate-100 text-primary dark:bg-slate-800 dark:border-slate-700'
                            }`}
                          >
                            {captcha.num1} <span className="text-slate-300 mx-1">+</span> {captcha.num2}
                          </div>

                          <div className="flex-1 relative">
                            <input
                              required
                              disabled={isVerified}
                              placeholder="Answer"
                              value={captcha.answer}
                              onChange={(e) => checkCaptcha(e.target.value)}
                              className={`w-full bg-white dark:bg-slate-800 border-2 rounded-2xl px-5 py-4 text-xl font-bold transition-all
                                ${isVerified
                                  ? 'border-green-500 text-green-600 opacity-60'
                                  : 'border-slate-200 focus:border-primary focus:ring-0'
                                }`}
                            />
                            {isVerified && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                              >
                                <CheckCircle2 className="w-6 h-6" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  disabled={loading || !isVerified}
                  className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-2
                    ${isVerified
                      ? 'bg-primary text-white shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed grayscale'
                    }`}
                >
                  <Send className={`w-5 h-5 ${isVerified && 'animate-pulse'}`} />
                  {loading ? 'Sending…' : 'Send Message'}
                </button>

                {success && (
                  <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 shadow-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                      ✓
                    </span>
                    <p className="text-sm font-medium">
                      Your message has been sent successfully. We’ll get back to you shortly.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 shadow-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                      !
                    </span>
                    <p className="text-sm font-medium">
                      {error}
                    </p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

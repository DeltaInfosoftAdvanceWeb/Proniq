'use client';

import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to discuss a project? We'd love to hear from you.
            Send us a message and we'll reply as soon as possible.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact Information & Map */}
            <div className="space-y-12">

              {/* Contact Cards */}
              <div className="grid gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Visit Us</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      701, Safal Profitaire,<br />
                      Prahladnagar, Ahmedabad,<br />
                      Gujarat 380015
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-1">
                      General: <a href="mailto:info@deltainfosoft.com" className="text-primary hover:underline">info@deltainfosoft.com</a>
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Support: <a href="mailto:support@deltainfosoft.com" className="text-primary hover:underline">support@deltainfosoft.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Business Hours</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Monday - Saturday : 9:30 AM - 6:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 relative z-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3763600617635!2d72.50332147531353!3d23.009949479182573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b27a0d49685%3A0x77aeb4070c444489!2sDelta%20Infosoft%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765622188562!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number (Optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
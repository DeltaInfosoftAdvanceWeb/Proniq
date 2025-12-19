"use client";

import { Mail, Phone, MapPin, Send, Building2, Linkedin, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const emailContacts = [
  {
    title: "General Inquiries",
    email: "info@deltainfosoft.com",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Sales & Business",
    email: "sales@deltainfosoft.com",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Technical Support",
    email: "support@deltainfosoft.com",
    icon: Phone,
    color: "from-orange-500 to-amber-500",
  },
];

const phoneContacts = [
  {
    title: "Main Office",
    phone: "+91 79403 71010",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Sales & Business",
    phone: "+91 84012 81010",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Technical Support",
    phone: "+91 84012 81010",
    color: "from-rose-500 to-pink-500",
  },
];

const socialLinks = [
  {
    platform: "LinkedIn",
    handle: "Delta Infosoft Pvt. Ltd.",
    icon: Linkedin,
    color: "from-blue-600 to-blue-400",
    url: "https://in.linkedin.com/company/delta-infosoft-pvt-ltd",
  },
  {
    platform: "Instagram",
    handle: "Delta Infosoft",
    icon: Instagram,
    color: "from-sky-500 to-blue-400",
    url: "https://www.instagram.com/delta_infosoft/",
  },
  {
    platform: "Facebook",
    handle: "Delta Infosoft",
    icon: Facebook,
    color: "from-blue-700 to-blue-500",
    url: "https://www.facebook.com/delta_infosoft/",
  },
];

const offices = [
  {
    city: "Ahmedabad",
    type: "Head Office",
    address: "A-701, Safal Profitaire, Opp. Ramada Hotel, Corporate Road, Satellite, Ahmedabad, Gujarat - 380015, India",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    city: "Palanpur",
    type: "Branch Office",
    address: "206-Valkeshwar Complex, Cozy Road, Behind Gitanjali Complex, Palanpur, Gujarat - 385001, India",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    city: "Jaipur",
    type: "Client Side Office",
    address: "3rd Floor, Mahima Trinity Mall, Swej Farm Rd, Radha Vihar, Shiva Colony, Govindpuri, Jaipur, Rajasthan - 302019, India",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ContactCTA() {
  const [activeTab, setActiveTab] = useState<"email" | "phone" | "social" | "location">("email");

  return (


    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Background decoration with Moving Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />

        {/* Horizontal Moving Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] w-[500px]"
            initial={{
              top: `${(i * 12) + 10}%`,
              left: '-500px',
              opacity: 0,
              rotate: -2
            }}
            animate={{
              left: '110%',
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
            style={{ filter: 'blur(0.5px)' }}
          />
        ))}

        {/* Vertical Moving Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-primary/10 to-transparent w-[1px] h-[300px]"
            initial={{
              left: `${(i * 15) + 8}%`,
              top: '-300px',
              opacity: 0
            }}
            animate={{
              top: '110%',
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Information - Left Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-2 bg-white rounded-2xl shadow-lg border border-slate-200">
              {[
                { id: "email", label: "📧 Email", icon: Mail },
                { id: "phone", label: "📞 Phone", icon: Phone },
                { id: "social", label: "💬 Social", icon: Building2 },
                { id: "location", label: "📍 Offices", icon: MapPin },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Email Tab */}
              {activeTab === "email" && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {emailContacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      <div className="relative flex items-center gap-4">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white shadow-lg`}>
                          <contact.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-500 mb-1">{contact.title}</div>
                          <a href={`mailto:${contact.email}`} className="font-semibold text-slate-900 hover:text-primary transition-colors">
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Phone Tab */}
              {activeTab === "phone" && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {phoneContacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      <div className="relative flex items-center gap-4">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white shadow-lg`}>
                          <Phone className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-500 mb-1">{contact.title}</div>
                          <a href={`tel:${contact.phone}`} className="font-semibold text-slate-900 hover:text-primary transition-colors text-lg">
                            {contact.phone}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Social Tab */}
              {activeTab === "social" && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer block"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      <div className="relative flex items-center gap-4">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg`}>
                          <social.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-500 mb-1">{social.platform}</div>
                          <div className="font-semibold text-slate-900">{social.handle}</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}

              {/* Location Tab */}
              {activeTab === "location" && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${office.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      <div className="relative">
                        <div className="flex items-start gap-4 mb-3">
                          <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${office.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                            <MapPin className="w-7 h-7" />
                          </div>
                          <div>
                            <div className="font-bold text-lg text-slate-900">{office.city}</div>
                            <div className="text-sm text-slate-500">{office.type}</div>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed ml-[72px]">{office.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl p-8 md:p-10 bg-white shadow-2xl border border-slate-200 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-0" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h3>
                <p className="text-slate-600 mb-8">We'll get back to you within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">First Name</label>
                      <input
                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50 focus:bg-white font-medium"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Last Name</label>
                      <input
                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50 focus:bg-white font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50 focus:bg-white font-medium"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50 focus:bg-white font-medium"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      className="w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all bg-slate-50 focus:bg-white min-h-[140px] font-medium resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-teal-600 text-white font-bold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center gap-2 group text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
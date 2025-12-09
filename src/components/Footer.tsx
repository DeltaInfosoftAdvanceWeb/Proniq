"use client";

import Link from "next/link";
import {
    Twitter,
    Linkedin,
    Github,
    Instagram,
    ArrowRight,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl  shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
                                <img src="/proniq.png" alt="PRONIQ" className="w-10 h-8" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">PRONIQ</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Empowering construction businesses with next-generation tools for seamless project management, from estimation to billing.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialLink href="#" icon={Twitter} label="Twitter" />
                            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="#" icon={Github} label="GitHub" />
                            <SocialLink href="#" icon={Instagram} label="Instagram" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-white font-semibold text-lg">Industries</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/features">Manufacturing</FooterLink>
                            <FooterLink href="/pricing">Construction</FooterLink>
                            <FooterLink href="/integrations">Interior Architecture</FooterLink>
                            <FooterLink href="/changelog">Infrastructure</FooterLink>
                            <FooterLink href="/docs">Engineering</FooterLink>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-white font-semibold text-lg">Company</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/industries">Industries</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter / Contact Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
                        <p className="text-slate-400 text-sm">
                            Subscribe to our newsletter for the latest updates and features.
                        </p>
                        <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-4 pr-12 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1.5 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                aria-label="Subscribe"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="pt-6 space-y-3">
                            <div className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>701, Safal Profitaire, Prahladnagar, Ahmedabad, Gujarat 380015</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:hello@proniq.com" className="hover:text-white transition-colors">hello@proniq.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} PRONIQ. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
            >
                {children}
            </Link>
        </li>
    );
}

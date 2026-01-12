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
                                <img src="/proniq.png" alt="proniq" className="w-10 h-8" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">proniq</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Empowering construction businesses with next-generation tools for seamless project management, from estimation to billing.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialLink href="https://x.com/delta_infosoft/" icon={Twitter} label="Twitter" />
                            <SocialLink href="https://www.linkedin.com/company/delta-infosoft/" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="https://www.instagram.com/delta_infosoft/" icon={Instagram} label="Instagram" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-white font-semibold text-lg">Industries</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/industries/manufacturing">Manufacturing</FooterLink>
                            <FooterLink href="/industries/construction">Construction</FooterLink>
                            <FooterLink href="/industries/interior-architecture">Interior Architecture</FooterLink>
                            <FooterLink href="/industries/infrastructure">Infrastructure</FooterLink>
                            <FooterLink href="/industries/engineering">Engineering</FooterLink>
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

                    {/* CTA Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-blue-900/10 to-transparent border border-white/10 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-white font-bold text-xl mb-3">Ready to Transform?</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    Experience the future of project execution. Schedule a personalized demo with our experts today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group-hover:scale-105"
                                >
                                    Book a Free Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
                        </div>

                        <div className="pt-6 space-y-3">
                            <div className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>701, Safal Profitaire, Prahladnagar, Ahmedabad, Gujarat 380015</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:info@deltainfosoft.com" className="hover:text-white transition-colors">info@deltainfosoft.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} proniq. All rights reserved.
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

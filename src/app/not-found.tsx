import Link from "next/link";
import { MoveLeft, Home, HardHat } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative selection:bg-teal-100 selection:text-teal-900">

            {/* Soft Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-20 right-20 w-40 h-40 bg-lime-50 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-50 rounded-full blur-[60px] pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">

                {/* Cute Floating Icon */}
                <div className="relative mb-8 group">
                    <div className="absolute inset-0 bg-teal-100 rounded-full blur-2xl opacity-40 animate-pulse" />
                    <div className="relative bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-4 border-white animate-[bounce_3s_infinite]">
                        <HardHat className="w-24 h-24 text-teal-500 transform -rotate-12 transition-transform group-hover:rotate-12" strokeWidth={1.5} />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 bg-lime-400 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-[spin_4s_linear_infinite] shadow-lg border-2 border-white">
                        ?
                    </div>
                </div>

                <h1 className="text-8xl font-black text-slate-800 tracking-tighter mb-2">
                    4<span className="text-teal-500">0</span>4
                </h1>

                <h2 className="text-2xl font-bold text-slate-600 mb-4 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-100">
                    Under Construction?
                </h2>

                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                    Oops! The page you're looking for seems to have wandered off the site plan.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-slate-800"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>

                    <Link
                        href="/contact"
                        className="flex items-center gap-2 px-8 py-3.5 bg-white text-slate-600 border border-slate-200 rounded-2xl font-bold text-base transition-all hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200"
                    >
                        <MoveLeft className="w-5 h-5" />
                        Go Back
                    </Link>
                </div>
            </div>

            {/* Cute Footer */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest opacity-50 flex items-center justify-center gap-2">
                    Built with <span className="text-red-400">♥</span> by PRONIQ
                </p>
            </div>
        </div>
    )
}

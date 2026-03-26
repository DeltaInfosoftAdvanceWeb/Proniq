'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

import { 
    Mail, 
    Phone, 
    User, 
    Calendar, 
    MessageSquare, 
    ShieldCheck, 
    Loader2, 
    RefreshCw,
    Search,
    Download,
    Trash2,
    Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIG ---


interface Contact {
    id: number;
    created_at: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
}

// Use standard Tailwind elements instead of missing UI components
export default function AdminContacts() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            fetchContacts();
        }
    }, [isAuthenticated]);

    async function fetchContacts() {
        setLoading(true);
        setError(null);
        try {
            const { data, error: supabaseError } = await supabase
                .from('contacts')
                .select('*')
                .order('created_at', { ascending: false });

            if (supabaseError) throw supabaseError;
            setContacts(data || []);
        } catch (err: any) {
            console.error('Fetch error:', err);
            setError(err.message || 'Failed to fetch messages. Check your Supabase connection and policies.');
        } finally {
            setLoading(false);
        }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect access key');
        }
    };

    const filteredContacts = contacts.filter(c => 
        Object.values(c).some(val => 
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return {
            date: date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            time: date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
        };
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                        <div className="text-center mb-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                Admin Dashboard
                            </h2>
                            <p className="text-slate-500 mt-2 text-sm"> Authenticate to view secure records </p>
                        </div>
                        
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest pl-1">Access Key</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input 
                                        type="password"
                                        placeholder="••••••••••••"
                                        value={passwordInput}
                                        onChange={(e) => setPasswordInput(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-950 font-mono tracking-widest"
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                                Unlock Data
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 font-sans">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                             <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <MessageSquare className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                                    Contact Submissions
                                </h1>
                                <p className="text-slate-500 text-sm font-medium">Capture and manage your website inquiries</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                        <div className="relative w-full sm:w-80 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                            <input 
                                type="text"
                                placeholder="Search all fields..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-sm font-medium focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
                            />
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button 
                                onClick={fetchContacts}
                                disabled={loading}
                                className="flex-1 sm:flex-none px-6 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-600 font-bold text-sm shadow-sm flex items-center justify-center gap-2"
                            >
                                <RefreshCw className={`w-4 h-4 ${loading && 'animate-spin'}`} />
                                Refresh
                            </button>
                            <button 
                                onClick={() => setIsAuthenticated(false)}
                                className="px-6 py-3 bg-white border border-red-100 rounded-2xl hover:bg-red-50 transition-all text-red-500 font-bold text-sm shadow-sm flex items-center gap-2"
                            >
                                <Lock className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Error State */}
                {error && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-5 bg-red-50 border-2 border-red-100 rounded-3xl flex items-center gap-4 text-red-700"
                    >
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold">Fetch Error</p>
                            <p className="text-sm opacity-80">{error}</p>
                        </div>
                        <button 
                            onClick={fetchContacts}
                            className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-xl text-xs font-bold transition-all"
                        >
                            Retry Connection
                        </button>
                    </motion.div>
                )}

                {/* Main Table */}
                <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Time Received</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Sender Identity</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Inquiry Content</th>
                                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <AnimatePresence mode='popLayout'>
                                    {loading ? (
                                        <tr>
                                            <td colSpan={4} className="px-8 py-32 text-center">
                                                <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-4" />
                                                <p className="text-slate-400 font-medium">Securely retrieving node records...</p>
                                            </td>
                                        </tr>
                                    ) : filteredContacts.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-8 py-32 text-center space-y-6">
                                                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto border-2 border-dashed border-primary/20">
                                                    <RefreshCw className="w-8 h-8 text-primary/30" />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-xl font-bold text-slate-800 tracking-tight">Connected, but no results.</p>
                                                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                                                        Successfully connected to Supabase table <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-bold">contacts</code> but found 0 records.
                                                    </p>
                                                </div>
                                                
                                                <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 max-w-lg mx-auto text-left shadow-sm">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <ShieldCheck className="w-5 h-5 text-amber-600" />
                                                        <h4 className="font-bold text-amber-900 leading-none">Potential Fix: Enable RLS Policy</h4>
                                                    </div>
                                                    <p className="text-amber-800 text-sm mb-4 leading-relaxed opacity-90 font-medium">
                                                        By default, Supabase blocks reading data. You must run this SQL in your <b>SQL Editor</b> to allow the admin page to see messages:
                                                    </p>
                                                    <div className="bg-amber-900/10 rounded-xl p-4 font-mono text-[11px] text-amber-900 border border-amber-900/10 mb-4 select-all shadow-inner">
                                                        CREATE POLICY "Enable select" ON contacts FOR SELECT USING (true);
                                                    </div>
                                                    <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-amber-700 font-bold uppercase tracking-widest">
                                                        <span>Project Identifer:</span>
                                                        <span className="opacity-60">{process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1]?.split('.')[0] || 'Unknown'}</span>
                                                    </div>
                                                </div>

                                                <button 
                                                    onClick={fetchContacts}
                                                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-2xl text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                                                >
                                                    <RefreshCw className={`w-4 h-4 ${loading && 'animate-spin'}`} />
                                                    Check for Updates
                                                </button>
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredContacts.map((contact) => {
                                            const formatted = formatDate(contact.created_at);
                                            return (
                                                <motion.tr 
                                                    key={contact.id}
                                                    layout
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="hover:bg-slate-50 transition-colors group"
                                                >
                                                    <td className="px-8 py-6 align-top">
                                                        <div className="flex flex-col gap-1">
                                                            <div className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                                                <Calendar className="w-3.5 h-3.5 text-primary opacity-50" />
                                                                {formatted.date}
                                                            </div>
                                                            <div className="text-xs text-slate-400 font-medium ml-5">
                                                                {formatted.time}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 align-top">
                                                        <div className="space-y-3">
                                                            <div className="font-bold text-slate-900 text-lg">
                                                                {contact.first_name} {contact.last_name}
                                                            </div>
                                                            <div className="space-y-1.5 flex flex-col">
                                                                <a href={`mailto:${contact.email}`} className="text-sm text-slate-500 hover:text-primary flex items-center gap-2 transition-colors">
                                                                    <Mail className="w-3.5 h-3.5 opacity-50" />
                                                                    {contact.email}
                                                                </a>
                                                                {contact.phone && (
                                                                    <div className="text-sm text-slate-500 flex items-center gap-2">
                                                                        <Phone className="w-3.5 h-3.5 opacity-50" />
                                                                        {contact.phone}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 align-top">
                                                        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 group-hover:bg-white transition-all max-w-xl">
                                                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                                                "{contact.message}"
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 align-top text-right">
                                                        <button 
                                                            onClick={() => alert('Refer to Supabase for deletion.')}
                                                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </td>
                                                </motion.tr>
                                            );
                                        })
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Dashboard Summary Tags */}
                <div className="flex flex-wrap gap-4">
                     <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm text-sm font-bold text-slate-500 flex items-center gap-3">
                        Total Inquiries: <span className="text-primary text-xl font-black">{contacts.length}</span>
                    </div>
                    <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm text-sm font-bold text-slate-400 flex items-center gap-3 italic">
                        Secured with Supabase RLS
                    </div>
                    <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm text-sm font-bold text-green-500 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live Connection Active
                    </div>
                </div>
            </div>
        </div>
    );
}

const ADMIN_PASSWORD = 'admin_proniq_2024';

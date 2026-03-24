"use client"
import React from 'react';
import { Lock, Mail, Terminal, ChevronRight } from "lucide-react";
import Link from 'next/link';

export default function SimpleLogin() {
    return (
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full" />

            <div className="w-full max-w-sm bg-[#0D0D0F] border border-zinc-800 p-8 relative z-10 shadow-2xl">
                {/* Logo Area */}
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 text-emerald-500 mb-4">
                        <Terminal size={24} />
                    </div>
                    <h1 className="text-white font-black tracking-tighter text-xl uppercase italic">
                        Intelli<span className="text-emerald-500">Code</span>_Login
                    </h1>
                </div>

                <form className="space-y-5">
                    {/* Email */}
                    <div className="space-y-1">
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                            <input
                                type="email"
                                placeholder="USER_ID"
                                className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 font-mono text-xs focus:outline-none focus:border-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                            <input
                                type="password"
                                placeholder="ACCESS_KEY"
                                className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 font-mono text-xs focus:outline-none focus:border-emerald-500 transition-all"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95">
                        Execute_Login <ChevronRight size={16} />
                    </button>
                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95">
                        Sign in with Google <ChevronRight size={16} />
                    </button>
                    <button className="text-zinc-600 font-mono text-[10px] hover:text-emerald-500 transition-colors uppercase tracking-tight">
                        New user?
                        <Link href="/auth/register">
                            Sign_up
                        </Link>
                    </button>

                </form>

                <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
                    <a href="#" className="text-zinc-600 font-mono text-[10px] hover:text-emerald-500 transition-colors uppercase tracking-tight">
                        Forgot_Credentials?
                    </a>
                </div>
            </div>
        </div>
    );
}
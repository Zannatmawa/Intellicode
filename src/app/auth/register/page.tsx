import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ChevronRight } from "lucide-react";

export default function SimpleRegister() {
    return (
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-[#0D0D0F] border border-zinc-800 p-8 shadow-2xl">

                <div className="text-center mb-8">
                    <h1 className="text-white font-black italic uppercase tracking-tighter text-xl">
                        New_<span className="text-emerald-500">Account</span>
                    </h1>
                    <p className="text-zinc-600 font-mono text-[10px] mt-1 underline decoration-emerald-500/20">
                        SECURE_REGISTRATION_V2
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="text"
                            placeholder="FULL_NAME"
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 font-mono text-xs focus:outline-none focus:border-emerald-500 transition-all"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="email"
                            placeholder="EMAIL_ADDRESS"
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 font-mono text-xs focus:outline-none focus:border-emerald-500 transition-all"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="password"
                            placeholder="CREATE_PASSWORD"
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 font-mono text-xs focus:outline-none focus:border-emerald-500 transition-all"
                        />
                    </div>

                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95">
                        Create_Profile <ChevronRight size={16} />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
                    <p className="text-zinc-600 font-mono text-[10px] uppercase">
                        Have an account? <Link href="/auth/login" className="text-emerald-500 hover:underline">Login_Here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
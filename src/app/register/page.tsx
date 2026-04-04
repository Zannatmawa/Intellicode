"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ChevronRight } from "lucide-react";
// import { signIn } from "next-auth/react"; // 1. Import signIn
import { useRouter } from "next/navigation"; // 2. Import router for redirect
import { postUser } from '@/actions/server/auth';

export default function SimpleRegister() {
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await postUser(form);
        if (result?.acknowledged) {
            alert("successful, please login");
            router.push("/login");
            console.log("Registering with:", form);
        }
    };

    // const handleGoogleLogin = () => {
    //     // Logic for Google OAuth goes here
    //     console.log("Redirecting to Google...");
    // };

    return (
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-[#0D0D0F] border border-zinc-800 p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-white font-black italic uppercase tracking-tighter text-xl">
                        New_<span className="text-emerald-500">Account</span>
                    </h1>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Inputs remain the same */}
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="text"
                            placeholder="FULL_NAME"
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="email"
                            placeholder="EMAIL_ADDRESS"
                            required
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="password"
                            placeholder="CREATE_PASSWORD"
                            required
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 disabled:cursor-not-allowed text-black font-bold py-3 text-xs flex items-center justify-center gap-2 transition-all"
                    >
                        {loading ? "PROCESSING..." : "Create_Profile"} <ChevronRight size={16} />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
                    <p className="text-zinc-600 text-[10px] uppercase">
                        Have an account? <Link href="/auth/login" className="text-emerald-500">Login_Here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
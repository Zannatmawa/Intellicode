"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ChevronRight } from "lucide-react";
//marufa@33 zannatulmawa38 marufa
export default function SimpleRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { name, email, password };

        try {
            const res = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();
            console.log("Response from Express Backend:", data);

            if (data.success) {
                alert("Registered successfully!");
            }
        } catch (error) {
            console.error("Connection failed:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-[#0D0D0F] border border-zinc-800 p-8 shadow-2xl">

                <div className="text-center mb-8">
                    <h1 className="text-white font-black italic uppercase tracking-tighter text-xl">
                        New_<span className="text-emerald-500">Account</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="text"
                            placeholder="FULL_NAME"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="email"
                            placeholder="EMAIL_ADDRESS"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700" size={16} />
                        <input
                            type="password"
                            placeholder="CREATE_PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border border-zinc-800 p-3 pl-10 text-emerald-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 text-xs flex items-center justify-center gap-2"
                    >
                        Create_Profile <ChevronRight size={16} />
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
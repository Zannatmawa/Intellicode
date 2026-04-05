import React from 'react';
import { Terminal, Shield, Cpu, Globe, Zap } from "lucide-react";

export const AboutSection = () => {
    return (
        <section className="py-24 bg-[#09090B] border-t border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: The Narrative */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] font-mono mb-6 uppercase tracking-widest">
                            Establishing_Connection... Success
                        </div>
                        <h2 className="text-5xl md:text-5xl font-black text-white tracking-tighter mb-6 italic uppercase">
                            The <span className="text-emerald-500 text-glow">IntelliCode</span> Manifest.
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-8 font-medium">
                            The gap between "watching a tutorial" and "engineering a system" is a chasm.
                            Most platforms teach you how to copy-paste. We teach you how to build the
                            abstractions that others copy.
                        </p>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-mono italic">
                            {`// Our curriculum is built for those who aren't afraid of pointers, 
                            race conditions, or kernel panics. We provide the low-level 
                            access required to master the modern stack from the metal up.`}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-emerald-500 font-mono text-2xl font-bold">2026_</div>
                                <div className="text-zinc-600 uppercase text-[10px] tracking-widest font-bold">Launch Era</div>
                            </div>
                            <div>
                                <div className="text-emerald-500 font-mono text-2xl font-bold">100%_</div>
                                <div className="text-zinc-600 uppercase text-[10px] tracking-widest font-bold">Hands-on Labs</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The "System Core" Terminal */}
                    <div className="relative">
                        {/* Decorative Background Glow */}
                        <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50" />

                        <div className="relative bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                            {/* Terminal Header */}
                            <div className="bg-zinc-900/50 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                                </div>
                                <div className="text-[10px] font-mono text-zinc-500 ml-4 tracking-tight">
                                    root@intellicode: ~/mission_params.sh
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-8 space-y-8 font-mono">
                                <div className="flex gap-4 group">
                                    <Cpu className="text-emerald-500 shrink-0" size={20} />
                                    <div>
                                        <div className="text-white text-xs font-bold uppercase mb-1 underline decoration-emerald-500/30">Compute_Autonomy</div>
                                        <div className="text-zinc-500 text-[11px] leading-snug">Every student gets a dedicated Linux sandbox with root access.</div>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <Shield className="text-emerald-500 shrink-0" size={20} />
                                    <div>
                                        <div className="text-white text-xs font-bold uppercase mb-1 underline decoration-emerald-500/30">Security_First</div>
                                        <div className="text-zinc-500 text-[11px] leading-snug">Deep dives into offensive and defensive security primitives.</div>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <Globe className="text-emerald-500 shrink-0" size={20} />
                                    <div>
                                        <div className="text-white text-xs font-bold uppercase mb-1 underline decoration-emerald-500/30">Global_Mesh</div>
                                        <div className="text-zinc-500 text-[11px] leading-snug">Learn distributed systems by deploying to 300+ edge nodes.</div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-700 uppercase tracking-widest">
                                    <span>Status: Active</span>
                                    <span className="text-emerald-500/40 animate-pulse">Running_Core_v2.6</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
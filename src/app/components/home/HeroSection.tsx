import React from 'react';
import { Terminal, ChevronRight, Download, Activity } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 bg-[#09090B] overflow-hidden">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }} />

            <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B] z-10" />

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-20">

                {/* Left Side: Copy & CTA */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6 backdrop-blur-sm">
                        <Activity size={14} className="animate-pulse" />
                        <span>v2.6.0_STABLE_RELEASE</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9] italic uppercase">
                        ENGINEER <br />
                        <span className="text-emerald-500 text-glow">BEYOND</span> <br />
                        THE STACK.
                    </h1>

                    <p className="max-w-md text-zinc-400 font-medium text-lg mb-10 leading-relaxed">
                        The ultimate LMS for low-level engineering. Master Rust, Kernel Dev, and Distributed Systems through raw terminal access.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-black px-8 py-4 uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:translate-y-0">
                            Get_Access <ChevronRight size={18} />
                        </button>
                        <button className="border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-white font-bold px-8 py-4 uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all">
                            View_Docs <Download size={16} />
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 border-t border-zinc-900 pt-8">
                        <div>
                            <div className="text-white font-mono font-bold text-xl">12k+</div>
                            <div className="text-zinc-600 text-[10px] uppercase tracking-widest">Active_Nodes</div>
                        </div>
                        <div className="h-8 w-px bg-zinc-900" />
                        <div>
                            <div className="text-white font-mono font-bold text-xl">40+</div>
                            <div className="text-zinc-600 text-[10px] uppercase tracking-widest">Deep_Modules</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Code Terminal UI */}
                <div className="relative hidden lg:block">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-[#0D0D0F] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
                        {/* Terminal Header */}
                        <div className="bg-[#1A1A1E] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                            </div>
                            <span className="text-zinc-600 text-[10px] uppercase tracking-tighter">main.rs — intellicode-lab</span>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 text-zinc-300">
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">1</span>
                                <span><span className="text-purple-400">use</span> intellicode::prelude::*;</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">2</span>
                                <span></span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">3</span>
                                <span><span className="text-emerald-500">#[tokio::main]</span></span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">4</span>
                                <span><span className="text-purple-400">async fn</span> <span className="text-blue-400">deploy_career</span>() {"{"}</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">5</span>
                                <span className="pl-4">  <span className="text-purple-400">let</span> engineer = Engineer::<span className="text-yellow-400">new</span>(<span className="text-emerald-400">"YOU"</span>);</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">6</span>
                                <span className="pl-4">  engineer.<span className="text-yellow-400">initialize_mastery</span>().<span className="text-purple-400">await</span>?;</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">7</span>
                                <span className="pl-4">  <span className="text-zinc-500">// Deploying to FAANG/Y-Combinator...</span></span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-700 select-none">8</span>
                                <span>{"}"}</span>
                            </div>

                            {/* Command Line Prompt */}
                            <div className="mt-6 pt-6 border-t border-zinc-900 flex items-center gap-2">
                                <span className="text-emerald-500 font-bold">$</span>
                                <span className="text-zinc-400 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-emerald-500"> cargo run --release_</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
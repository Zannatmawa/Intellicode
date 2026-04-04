import React from 'react';
import { Terminal, ChevronRight, Download, Activity } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 bg-emerald-400  overflow-hidden">

            {/* Background Texture: Subtle Grid in a darker green */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#065f46 1px, transparent 1px), linear-gradient(90deg, #065f46 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />

            {/* Radial glow to add depth to the green */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] z-10" />

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-20">

                {/* Left Side: Copy & CTA */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-black text-xs font-mono mb-6 backdrop-blur-md">
                        <Activity size={14} className="animate-pulse" />
                        <span>v2.6.0_STABLE_RELEASE</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black text-black tracking-tighter mb-6 leading-[0.9] italic uppercase">
                        ENGINEER <br />
                        <span className="text-white drop-shadow-md">BEYOND</span> <br />
                        THE STACK.
                    </h1>

                    <p className="max-w-md text-emerald-950 font-medium text-lg mb-10 leading-relaxed">
                        The ultimate LMS for low-level engineering. Master Rust, Kernel Dev, and Distributed Systems through raw terminal access.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-black hover:bg-zinc-900 text-white font-black px-8 py-4 uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl">
                            Get_Access <ChevronRight size={18} />
                        </button>
                        <button className="border border-black/20 bg-white hover:bg-white/20 text-black font-bold px-8 py-4 uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
                            View_Docs <Download size={16} />
                        </button>
                    </div>

                </div>

                {/* Right Side: Code Terminal UI */}
                <div className="relative hidden lg:block">
                    {/* Shadow for the terminal to make it pop off the green */}
                    <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-full" />

                    <div className="relative bg-white border border-emerald-600/20 rounded-xl shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
                        {/* Terminal Header */}
                        <div className="bg-emerald-50 px-4 py-3 border-b border-emerald-100 flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-emerald-200" />
                                <div className="w-3 h-3 rounded-full bg-emerald-200" />
                                <div className="w-3 h-3 rounded-full bg-emerald-200" />
                            </div>
                            <span className="text-emerald-800/40 text-[10px] uppercase tracking-tighter font-bold">main.rs — intellicode-lab</span>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 text-slate-700">
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">1</span>
                                <span><span className="text-purple-500 font-bold">use</span> intellicode::prelude::*;</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">2</span>
                                <span></span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">3</span>
                                <span><span className="text-emerald-600 font-bold">#[tokio::main]</span></span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">4</span>
                                <span><span className="text-purple-500 font-bold">async fn</span> <span className="text-blue-600">deploy_career</span>() {"{"}</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">5</span>
                                <span className="pl-4">  <span className="text-purple-500 font-bold">let</span> engineer = Engineer::<span className="text-amber-600">new</span>(<span className="text-emerald-600">"YOU"</span>);</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">6</span>
                                <span className="pl-4">  engineer.<span className="text-amber-600">initialize_mastery</span>().<span className="text-purple-500 font-bold">await</span>?;</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">7</span>
                                <span className="pl-4 italic text-slate-400">  Deploying to Global Infrastructure...</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-emerald-200 select-none">8</span>
                                <span>{"}"}</span>
                            </div>

                            {/* Command Line Prompt */}
                            <div className="mt-6 pt-6 border-t border-emerald-50 flex items-center gap-2">
                                <span className="text-emerald-600 font-bold">$</span>
                                <span className="text-slate-500 border-r-2 border-emerald-500 animate-pulse"> cargo run --release</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
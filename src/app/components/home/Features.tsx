import React from 'react';
import { Code2, Cpu, Globe, Zap, Shield, Rocket } from "lucide-react";

interface Feature {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string; // Dynamic color for specific icons
}

const features: Feature[] = [
    { title: "Interactive Labs", desc: "Real-time terminal access with zero latency.", icon: <Code2 />, color: "text-emerald-400" },
    { title: "AI Debugger", desc: "Automated stack trace analysis for your projects.", icon: <Cpu />, color: "text-purple-400" },
    { title: "Global Mesh", desc: "Deploy your code to 300+ edge locations globally.", icon: <Globe />, color: "text-blue-400" },
    { title: "Turbo Build", desc: "Next-gen caching layer for 10x faster compilation.", icon: <Zap />, color: "text-amber-400" },
    { title: "Kernel Security", desc: "Isolated runtime environments for every student.", icon: <Shield />, color: "text-rose-400" },
    { title: "Career API", desc: "Direct pipeline to Y-Combinator & FAANG hiring bots.", icon: <Rocket />, color: "text-cyan-400" },
];

export const FeaturesSection = () => {
    return (
        <section className="py-24 bg-[#09090B] text-zinc-400">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-16">
                    <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono mb-4">
                        System.Status: Optimized
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tighter mb-4 italic">
                        DECODE THE <span className="text-emerald-500">FUTURE.</span>
                    </h2>
                    <p className="max-w-xl text-zinc-500 font-medium">
                        Stop watching tutorials. Start building systems. IntelliCode provides the
                        low-level access required to master the stack.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-[#09090B] p-10 hover:bg-zinc-900/50 transition-all duration-300"
                        >
                            {/* Icon with colored glow */}
                            <div className={`mb-6 ${feature.color} transition-transform duration-500 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]`}>
                                {React.cloneElement(feature.icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
                            </div>

                            <h4 className="text-lg font-bold text-zinc-100 mb-3 flex items-center gap-2">
                                <span className="text-emerald-500 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    &gt;
                                </span>
                                {feature.title}
                            </h4>

                            <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                {feature.desc}
                            </p>

                            {/* Terminal-style footer */}
                            <div className="mt-8 font-mono text-[10px] text-zinc-700 uppercase tracking-widest flex justify-between">
                                <span>Ref: 0x{index}4F</span>
                                <span className="group-hover:text-emerald-500 transition-colors">Ready_</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
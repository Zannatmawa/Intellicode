import React from 'react';
import { BarChart3, Users, PlayCircle, Star, Terminal } from "lucide-react";

const stats = [
    { label: "Active Nodes", value: "12,842", detail: "+12% MoM", icon: <Users /> },
    { label: "Hours Compiled", value: "840K", detail: "Real-time", icon: <PlayCircle /> },
    { label: "Success Rate", value: "99.9%", detail: "SLA Guaranteed", icon: <BarChart3 /> },
];

const popularItems = [
    { title: "Low-Level Rust", level: "Advanced", students: "2.4k", tag: "Hot" },
    { title: "Distributed Systems", level: "Expert", students: "1.1k", tag: "New" },
    { title: "Kernel Dev 101", level: "Intermediate", students: "5.8k", tag: "Popular" },
];

export const StatsAndPopular = () => {
    return (
        <section className="py-24 bg-[#09090B] border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Stats Column */}
                    <div className="lg:col-span-1 space-y-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-6 border border-zinc-800 bg-zinc-900/20 rounded-lg group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-zinc-500">{stat.icon}</div>
                                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                                        {stat.detail}
                                    </span>
                                </div>
                                <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-zinc-600 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Popular Items Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <Terminal className="text-emerald-500" size={20} />
                            <h3 className="text-2xl font-bold text-white italic uppercase tracking-tighter">
                                Trending_Stacks
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {popularItems.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-6 border border-zinc-800 hover:border-emerald-500/50 transition-colors group cursor-pointer">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-white font-bold text-lg">{item.title}</span>
                                            <span className="text-[10px] border border-zinc-700 px-2 text-zinc-500 font-mono">{item.level}</span>
                                        </div>
                                        <div className="text-sm text-zinc-600">{item.students} engineers enrolled</div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-500 text-black px-4 py-2 font-bold text-xs uppercase tracking-widest">
                                        Initialize
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
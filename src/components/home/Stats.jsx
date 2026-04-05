"use client"
import React from 'react';
import { Globe, Smartphone, Server, Zap } from "lucide-react";

export const CourseStatsBar = () => {
    const metrics = [
        { label: "Web Deploys", value: "45.2K", icon: <Globe size={16} />, trend: "+12.5%", color: "text-emerald-500" },
        { label: "Mobile Installs", value: "18.9K", icon: <Smartphone size={16} />, trend: "+8.2%", color: "text-blue-500" },
        { label: "API Requests", value: "2.4M", icon: <Server size={16} />, trend: "Stable", color: "text-purple-500" },
        { label: "Execution", value: "892K", icon: <Zap size={16} />, trend: "High", color: "text-amber-500" }
    ];

    return (
        <section className="bg-[#050a08] py-12">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-xl overflow-hidden">
                    {metrics.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-8 border-r border-b md:border-b-0 last:border-r-0 border-white/10 bg-[#0a0f0d] hover:bg-emerald-400 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`${item.color} opacity-80`}>
                                    {item.icon}
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                                    {item.label}
                                </span>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-3xl font-bold text-white tracking-tighter">
                                    {item.value}
                                </h3>
                                <p className="text-[11px] font-semibold text-emerald-500/80">
                                    {item.trend} <span className="text-slate-600 ml-1">this week</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CourseStatsBar;
"use client"
import React from 'react';
import { Quote, ExternalLink, Star } from "lucide-react";

const successStories = [
    {
        id: 1,
        name: "Arjun Mehta",
        role: "Software Engineer @ Google",
        story: "The V8 internals module changed how I write JavaScript. I went from 'guessing' to 'knowing' how my code executes.",
        avatar: "https://i.pravatar.cc/150?u=arjun",
        company: "Google"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Frontend Lead @ Vercel",
        story: "Mastering React architecture patterns here was the turning point in my career. The project-based approach is unmatched.",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        company: "Vercel"
    },
    {
        id: 3,
        name: "Marcus Chen",
        role: "Backend Architect",
        story: "Scaling distributed systems felt like magic until I took the Go course. Now I design systems for millions of users.",
        avatar: "https://i.pravatar.cc/150?u=marcus",
        company: "Freelance"
    }
];

export const SuccessSection = () => {
    return (
        <section className="py-24 bg-[#050a08] border-t border-white/5 font-sans">
            <div className="max-w-5xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-500 mb-3">
                        <Star size={14} fill="currentColor" />
                        <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Alumni_Output</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Success Stories</h2>
                    <p className="text-slate-500 text-sm mt-2">Join 50,000+ developers scaling their careers.</p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {successStories.map((item) => (
                        <div
                            key={item.id}
                            className="group p-6 rounded-xl bg-[#0a0f0d] border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
                        >
                            <Quote className="text-emerald-500/20 mb-4 group-hover:text-emerald-500/40 transition-colors" size={24} />

                            <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                                "{item.story}"
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div className="overflow-hidden">
                                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                                    <p className="text-[10px] text-emerald-500/70 font-mono truncate">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Link */}
                <div className="mt-12 flex justify-center">
                    <button className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-emerald-400 transition-all tracking-widest uppercase">
                        View_All_Placements <ExternalLink size={12} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessSection;
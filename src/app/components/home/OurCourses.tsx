"use client"
import React, { useState } from 'react';
import { Globe, Smartphone, Cpu, ChevronRight, ArrowUpRight, Command, PlayCircle } from "lucide-react";
import Link from 'next/link';

const courses = [
    {
        id: "01",
        title: "High-Performance React",
        category: "Web",
        level: "Advanced",
        icon: <Globe size={18} />,
        price: "$89",
        tags: ["Next.js", "V8 Engine"],
        description: "Master the art of building lightning-fast web applications with Next.js and deep-dive into the V8 engine internals.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800"
    },
    {
        id: "02",
        title: "iOS Swift Internals",
        category: "Mobile",
        level: "Intermediate",
        icon: <Smartphone size={18} />,
        price: "$129",
        tags: ["LLVM", "SwiftUI"],
        description: "Go beyond the basics of SwiftUI and explore how LLVM compiles your code for maximum mobile performance.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800"
    },
    {
        id: "03",
        title: "Backend Scalability",
        category: "Systems",
        level: "Expert",
        icon: <Cpu size={18} />,
        price: "$110",
        tags: ["Go", "Distributed"],
        description: "Learn to build distributed systems that handle millions of requests using Go and modern architectural patterns.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800"
    }
];

export const CourseSection = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filtered = activeTab === 'All'
        ? courses
        : courses.filter(c => c.category === activeTab);

    return (
        <section className="py-20 bg-[#050a08] font-sans text-slate-200 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-500 mb-3">
                            <Command size={14} />
                            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">System_Modules</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-white">Expand your stack.</h2>
                    </div>

                    {/* Minimalist Tabs */}
                    <div className="flex gap-6 border-b border-white/5 w-full md:w-auto">
                        {['All', 'Web', 'Mobile', 'Systems'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-xs font-bold transition-all relative tracking-wide ${activeTab === tab ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* The Card Grid */}
                <div className="flex flex-col gap-16">
                    {filtered.map((course) => (
                        <div
                            key={course.id}
                            className="group flex flex-col lg:flex-row items-center gap-10 transition-all"
                        >
                            {/* LEFT: IMAGE SECTION (Smaller & Sleeker) */}
                            <div className="w-full lg:w-[45%] relative aspect-[16/10] rounded-xl overflow-hidden bg-emerald-950 border border-emerald-500/20">
                                <div className="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                                    <div className="bg-black/60 backdrop-blur-md w-fit p-2.5 rounded-lg border border-white/10 text-emerald-400">
                                        {course.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
                                        <button className="flex items-center gap-2 bg-emerald-500 text-black px-4 py-1.5 rounded text-xs font-bold hover:bg-emerald-400 transition-colors">
                                            <PlayCircle size={14} />
                                            LET'S CODE
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: DETAILS SECTION (Refined Typography) */}
                            <div className="w-full lg:w-[55%]">
                                <h2 className="text-2xl font-bold mb-4 leading-snug text-white">
                                    Kickstart your journey in <br />
                                    <span className="text-emerald-500">{course.title}</span>
                                </h2>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
                                    {course.description} Built for developers who want to master the architecture behind the code.
                                </p>

                                <div className="flex flex-wrap gap-10 mb-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-emerald-500/50 uppercase font-bold tracking-widest">Level</span>
                                        <span className="text-sm font-semibold text-slate-200">{course.level}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-emerald-500/50 uppercase font-bold tracking-widest">Tuition</span>
                                        <span className="text-sm font-bold text-white">{course.price}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-emerald-500/50 uppercase font-bold tracking-widest">Stack</span>
                                        <div className="flex gap-2">
                                            {course.tags.map(tag => (
                                                <span key={tag} className="text-[11px] font-medium text-emerald-400/80">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Link href={`/course-details/${course.id}`}>
                                        <button className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2.5 rounded text-xs font-bold flex items-center gap-2 hover:bg-emerald-500 hover:text-black transition-all">
                                            EXPLORE MODULE <ArrowUpRight size={14} />
                                        </button>
                                    </Link>

                                    <button className="text-slate-500 px-4 py-2.5 rounded text-xs font-bold hover:text-white transition-all">
                                        Success Stories
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-20 pt-10 border-t border-white/5 flex justify-center">
                    <button className="group flex items-center gap-2 text-[10px] font-bold text-slate-600 hover:text-emerald-500 transition-colors tracking-widest uppercase">
                        <span>Terminal_Catalog</span>
                        <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
"use client"
import React, { useEffect, useState } from 'react';
import { Search, Filter, Code, Terminal, Clock, Users, ChevronRight, Cpu, ArrowUpRight } from "lucide-react";
import axios from 'axios';
import Link from 'next/link';



export default function CoursesPage() {
    const [filter, setFilter] = useState('All');

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/data/data.json');

                setCourses(response.data.courses);
                setLoading(false);
            } catch (err) {
                console.error("DATA_FETCH_FAILURE:", err);
                // setError();
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="min-h-screen bg-[#09090B] text-zinc-400 font-sans pt-20">
            {/* Header / Search Bar */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-b border-zinc-900">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-2">
                            <span className="animate-pulse">●</span> SYSTEM_QUERY: ALL_MODULES
                        </div>
                        <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase">
                            Available <span className="text-emerald-500 text-glow">Payloads</span>
                        </h1>
                    </div>

                    <div className="relative group w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="grep course_name..."
                            className="w-full bg-zinc-950 border border-zinc-800 p-3 pl-10 text-emerald-500 font-mono focus:outline-none focus:border-emerald-500 transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 space-y-8">
                    <div>
                        <h3 className="text-zinc-100 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <Filter size={14} className="text-emerald-500" /> Filter_By
                        </h3>
                        <div className="space-y-2">
                            {['All', 'FrontEnd', 'BackEnd', 'Cybersecurity', 'AI Infrastructure'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`w-full text-left px-3 py-2 text-sm font-mono transition-all ${filter === cat ? 'bg-emerald-500/10 text-emerald-500 border-l-2 border-emerald-500' : 'hover:text-zinc-200 text-zinc-600'}`}
                                >
                                    {`> ${cat}`}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Course Grid */}
                <main className="flex-1">
                    <div className="flex flex-col gap-16">
                        {courses.map((course) => (
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
                                                {/* <PlayCircle size={14} /> */}
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
                                            <span className="text-sm font-semibold text-slate-200">{course.status}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-mono text-emerald-500/50 uppercase font-bold tracking-widest">Tuition</span>
                                            <span className="text-sm font-bold text-white">{course.price}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-mono text-emerald-500/50 uppercase font-bold tracking-widest">Duration</span>
                                            <span className="text-sm font-bold text-white">{course.duration}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Link href={`/course-details/${course.id}`}>
                                            <button className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2.5 rounded text-xs font-bold flex items-center gap-2 hover:bg-emerald-500 hover:text-black transition-all">
                                                EXPLORE MODULE <ArrowUpRight size={14} />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};
"use client"
import React, { useEffect, useState } from 'react';
import { Search, Filter, Code, Terminal, Clock, Users, ChevronRight, Cpu } from "lucide-react";
import axios from 'axios';
import Link from 'next/link';

// Assuming the JSON data from the previous step is imported here
// const coursesData = [
//     { id: "crs_0x1A", title: "Low-Level Rust & Memory Safety", category: "Systems Programming", difficulty: "Advanced", duration: "42 Hours", stack: ["Rust", "Wasm"], price: 199, status: "Stable", description: "Master ownership and borrowing by building a custom memory allocator." },
//     { id: "crs_0x2B", title: "Distributed Systems with Go", category: "Cloud Architecture", difficulty: "Expert", duration: "38 Hours", stack: ["Go", "gRPC"], price: 249, status: "Beta", description: "Architecting fault-tolerant microservices using Raft consensus." },
//     { id: "crs_0x4D", title: "Linux Kernel Hacking", category: "Cybersecurity", difficulty: "Expert", duration: "60 Hours", stack: ["C", "Assembly"], price: 299, status: "Stable", description: "Writing loadable kernel modules and understanding process scheduling." },
//     // ... add more from the JSON
// ];





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
                            {['All', 'Systems Programming', 'Cloud Architecture', 'Cybersecurity', 'AI Infrastructure'].map((cat) => (
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-[#09090B] p-8 group hover:bg-zinc-900/40 transition-all border border-transparent hover:border-emerald-500/30">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-zinc-900 text-emerald-500 border border-zinc-800">
                                        <Cpu size={24} />
                                    </div>
                                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest bg-zinc-900 px-2 py-1">
                                        {course.id}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {course.title}
                                </h2>

                                <p className="text-sm text-zinc-500 mb-6 line-clamp-2 font-medium">
                                    {course.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {course.stack.map(tech => (
                                        <span key={tech} className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-zinc-900 mt-auto">
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-1 text-[10px] font-mono">
                                            <Clock size={12} className="text-emerald-500" /> {course.duration}
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] font-mono">
                                            <Users size={12} className="text-emerald-500" /> {course.difficulty}
                                        </div>
                                    </div>
                                    <div className="text-white font-black font-mono">
                                        ${course.price}
                                    </div>
                                </div>
                                <Link href={`/course-details/${course.id}`}>
                                    <button className="w-full mt-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest group-hover:bg-emerald-500 group-hover:text-black transition-all flex items-center justify-center gap-2">
                                        Get Details <ChevronRight size={14} />
                                    </button>
                                </Link>

                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};
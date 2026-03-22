"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'; // Hook to get the ID
import { Terminal, Clock, Users, ShieldCheck } from "lucide-react";

export default function CourseDetails() {
    const { id } = useParams(); // This matches the [id] in your folder name
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(course)

    useEffect(() => {
        const getCourseData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                const allCourses = response.data.courses;

                // Find the specific course where id matches the URL param
                const selectedCourse = allCourses.find(c => c.id === id);

                setCourse(selectedCourse);
                setLoading(false);
            } catch (error) {
                console.error("INITIALIZATION_ERROR:", error);
                setLoading(false);
            }
        };

        if (id) getCourseData();
    }, [id]);

    if (loading) return <div className="bg-[#09090B] min-h-screen text-emerald-500 font-mono p-20 animate-pulse"> {`> DECRYPTING_MODULE_${id}...`} </div>;

    if (!course) return <div className="bg-[#09090B] min-h-screen text-rose-500 font-mono p-20"> {`[ERROR]: MODULE_NOT_FOUND`} </div>;

    return (
        <main className="min-h-screen bg-[#09090B] text-zinc-400 py-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* ID Badge */}
                <div className="text-[10px] font-mono text-emerald-500 mb-4 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 w-fit">
                    OBJECT_ID: {course.id}
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6">
                    {course.title}
                </h1>

                <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-zinc-900 font-mono text-xs uppercase">
                    <div className="flex items-center gap-2"><Clock size={16} className="text-emerald-500" /> {course.duration}</div>
                    <div className="flex items-center gap-2"><Users size={16} className="text-emerald-500" /> {course.difficulty}</div>
                    <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-500" /> {course.status}</div>
                </div>

                <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                    {course.description}
                </p>

                {/* Tech Stack Rendering */}
                <div className="space-y-4">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase">Required_Prerequisites</h3>
                    <div className="flex gap-2">
                        {course.stack.map(tech => (
                            <span key={tech} className="bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-mono text-zinc-500">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <button className="mt-12 w-full md:w-auto bg-emerald-500 text-black px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all">
                    Initialize_Learning_Sequence — ${course.price}
                </button>
            </div>
        </main>
    );
}
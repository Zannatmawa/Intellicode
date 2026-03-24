"use client"
import React from 'react';
import { Target, Zap, Shield, ArrowRight } from "lucide-react";

const objectives = [
    {
        icon: <Target size={20} />,
        label: "01",
        title: "Precision Engineering",
        text: "We bridge the gap between academic theory and high-scale production."
    },
    {
        icon: <Zap size={20} />,
        label: "02",
        title: "Maximum Velocity",
        text: "Information-dense curriculum designed to get you job-ready faster."
    },
    {
        icon: <Shield size={20} />,
        label: "03",
        title: "Deep Internals",
        text: "We teach the engines and the architecture that others ignore."
    }
];

export const MissionSection = () => {
    return (
        <section className="py-24 bg-emerald-400 font-sans text-black">
            <div className="max-w-5xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: TEXT */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[2px] bg-black"></div>
                            <span className="font-mono text-xs font-bold tracking-widest uppercase">OUR_MANIFESTO</span>
                        </div>
                        <h2 className="text-5xl font-black mb-6 leading-tight tracking-tighter">
                            Engineering the <br />
                            Next Generation.
                        </h2>
                        <p className="text-black/80 text-sm leading-relaxed mb-8 max-w-md font-medium">
                            The world doesn't need more "code-monkeys." It needs architects.
                            Our mission is to provide high-density technical education focusing
                            on the systems that drive the modern web.
                        </p>

                        <button className="flex items-center gap-2 bg-black text-emerald-400 px-6 py-3 rounded-full font-bold text-xs hover:scale-105 transition-transform shadow-lg">
                            JOIN THE ACADEMY <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* RIGHT SIDE: OBJECTIVE CARDS */}
                    <div className="grid grid-cols-1 gap-4">
                        {objectives.map((obj, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="mb-4 bg-emerald-400 p-2 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {obj.icon}
                                    </div>
                                    <span className="font-mono text-xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                                        {obj.label}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-1 tracking-tight">{obj.title}</h3>
                                <p className="text-xs text-black/70 font-medium leading-relaxed">
                                    {obj.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionSection;
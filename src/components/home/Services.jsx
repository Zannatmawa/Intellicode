import React from 'react';
import { Terminal, ShieldCheck, Zap, Users, Cloud, HardDrive } from "lucide-react";


const services = [
    {
        id: "SRV-01",
        title: "Managed Learning Paths",
        description: "Curated engineering roadmaps from Junior Dev to L6 Systems Architect with automated progress tracking.",
        icon: <HardDrive />,
        status: "STABLE"
    },
    {
        id: "SRV-02",
        title: "Ephemeral Dev Environments",
        description: "Spin up a full-stack Ubuntu instance in 2 seconds. No setup required. Persists in the cloud.",
        icon: <Cloud />,
        status: "STABLE"
    },
    {
        id: "SRV-03",
        title: "AI-Powered Code Reviews",
        description: "Get instant feedback on your PRs using our proprietary LLM trained on 500k+ high-quality repos.",
        icon: <Zap />,
        status: "BETA"
    },
    {
        id: "SRV-04",
        title: "1-on-1 Debugging Sessions",
        description: "Direct access to senior engineers for pair programming and architectural guidance.",
        icon: <Users />,
        status: "STABLE"
    },
    {
        id: "SRV-05",
        title: "Enterprise Compliance",
        description: "SOC2 Type II certified training environments for corporate upskilling and security audits.",
        icon: <ShieldCheck />,
        status: "STABLE"
    },
    {
        id: "SRV-06",
        title: "Custom Compiler API",
        description: "Run and test code for 40+ languages with our low-latency execution engine.",
        icon: <Terminal />,
        status: "BETA"
    }
];

export const ServicesSection = () => {
    return (
        <section className="py-24 bg-[#09090B] text-zinc-400 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase">
                            CORE <span className="text-emerald-500">SERVICES</span>
                        </h2>
                        <p className="mt-4 text-zinc-500 max-w-md font-mono text-sm leading-relaxed">
                            [EXEC] protocol initiated. Deploying infrastructure for the next generation of engineers.
                        </p>
                    </div>
                    <div className="hidden md:block text-right font-mono text-[10px] text-zinc-700">
                        LATENCY: 14ms <br />
                        UPTIME: 99.99%
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative group p-8 border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900/40 transition-all duration-300"
                        >
                            {/* Status Badge */}
                            <div className={`absolute top-4 right-4 text-[9px] font-mono px-2 py-0.5 border ${service.status === 'BETA' ? 'text-amber-500 border-amber-500/20' : 'text-emerald-500 border-emerald-500/20'
                                }`}>
                                {service.status}
                            </div>

                            {/* Service ID */}
                            <div className="text-[10px] font-mono text-zinc-700 mb-6 tracking-widest">
                                {service.id}
                            </div>

                            {/* Icon & Title */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-zinc-800/50 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                                    {/* {React.cloneElement(service.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })} */}
                                </div>
                                <h3 className="text-lg font-bold text-zinc-100 mt-2">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Decorative Bottom Bar */}
                            <div className="h-0.5 w-0 group-hover:w-full bg-emerald-500 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
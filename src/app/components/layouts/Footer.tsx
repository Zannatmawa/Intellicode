import Link from "next/link";
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Terminal } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#09090B] text-zinc-400 py-16 border-t border-zinc-900 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* 1. Brand & System Status */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Image
                            className='brightness-0 invert opacity-80'
                            width={40}
                            height={32}
                            src={"/assets/logo.png"}
                            alt='IntelliCode Logo'
                        />
                        <span className="text-white font-black tracking-tighter text-xl italic uppercase">
                            Intelli<span className="text-emerald-500 font-mono italic">Code</span>
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                        Deploying the next generation of engineers. Our platform provides high-fidelity labs and kernel-level insights for the modern stack.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-500/60 bg-emerald-500/5 border border-emerald-500/10 px-2 py-1 w-fit rounded">
                        <span className="animate-pulse">●</span> ALL_SYSTEMS_OPERATIONAL
                    </div>
                </div>

                {/* 2. Quick Navigation */}
                <div>
                    <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Terminal size={14} className="text-emerald-500" /> Root_Dir
                    </h3>
                    <ul className="space-y-3 font-mono text-xs">
                        {['Home', 'Explore', 'About', 'Dashboard', 'Blog'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                                >
                                    <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">{`>`}</span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Contact Information */}
                <div>
                    <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Contact_Params</h3>
                    <ul className="space-y-4 text-xs font-mono">
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-zinc-600" />
                            <a href="mailto:ops@intellicode.dev" className="hover:text-emerald-400">ops@intellicode.dev</a>
                        </li>
                        <li className="flex items-center gap-3 text-zinc-500">
                            <MapPin size={16} className="text-zinc-600" />
                            0xNode, Cloud-Mesh-1
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={16} className="text-zinc-600" />
                            <span className="text-zinc-500">+1 (555) 010-1101</span>
                        </li>
                    </ul>
                </div>

                {/* 4. Social & Connect */}
                <div>
                    <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Social_Links</h3>
                    <div className="flex gap-4 mb-8">
                        {[
                            { icon: <Twitter size={18} />, link: "#" },
                            { icon: <Github size={18} />, link: "#" },
                            { icon: <Linkedin size={18} />, link: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                className="p-2 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-all bg-zinc-900/50"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <div className="pt-6 border-t border-zinc-900">
                        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                            © 2026 IntelliCode <br />
                            Build_0x7FF_Final
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
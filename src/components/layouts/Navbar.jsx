import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, Terminal } from "lucide-react"; // Using Lucide for the mobile toggle
import AuthBtn from "../buttons/AuthBtn";

export default function Navbar() {
    const links = <>
        <li className="menu-title text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Navigation</li>
        <li><Link href="/" className="text-zinc-300 hover:text-emerald-400">Home</Link></li>
        <li><Link href="/courses" className="text-zinc-300 hover:text-emerald-400">Courses</Link></li>
        <li><Link href="/explore" className="text-zinc-300 hover:text-emerald-400">Explore</Link></li>
        <li><Link href="/about" className="text-zinc-300 hover:text-emerald-400">About</Link></li>
        <li><Link href="/blog" className="text-zinc-300 hover:text-emerald-400">Blog</Link></li>
        <li><Link href="/dashboard" className="text-zinc-300 hover:text-emerald-400 text-emerald-400 font-bold">Dashboard</Link></li>
    </>
    return (
        <nav className="sticky top-0 z-[100] w-full border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Navbar Start: Logo & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer">
                            <Menu size={24} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-[#09090B] border border-zinc-800 rounded-lg w-64 space-y-1"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2 group">
                        {/* <Logo /> */}
                        <span className="hidden sm:block font-black text-xl tracking-tighter text-white group-hover:text-emerald-500 transition-colors italic">
                            INTELLICODE<span className="text-emerald-500">_</span>
                        </span>
                    </Link>
                </div>

                {/* Navbar Center: Desktop Links */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-1">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Courses", path: "/courses" },
                            { name: "Explore", path: "/explore" },
                            { name: "About", path: "/about" },
                            { name: "Blog", path: "/blog" },
                            { name: "Dashboard", path: "/dashboard" },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-all relative group"
                                >
                                    {link.name}
                                    {/* Hover Underline effect */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar End: Auth Actions */}
                <div className="flex items-center gap-3">
                    <AuthBtn />
                    <Link
                        href="/auth/signup"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2"
                    >
                        <Terminal size={14} />
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
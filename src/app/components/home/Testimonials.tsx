import { Quote, LayoutGrid } from "lucide-react";

const testimonials = [
    { name: "Sarah.dev", role: "SDE @ Vercel", text: "The AI debugger alone saved me 40 hours of hair-pulling. This isn't a course; it's an OS for your career." },
    { name: "0xAbstract", role: "Smart Contract Lead", text: "IntelliCode's labs are the only ones that don't lag when building heavy Docker environments." }
];

const categories = ["Systems Programming", "Cloud Architecture", "Cybersecurity", "AI Infrastructure", "Frontend Ops"];

export const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-[#09090B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left: Categories */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-white font-bold mb-8 flex items-center gap-2 tracking-widest uppercase text-sm">
                            <LayoutGrid size={16} className="text-emerald-500" /> Catalog_Index
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat, i) => (
                                <span key={i} className="px-4 py-2 border border-zinc-800 text-zinc-400 text-xs hover:bg-emerald-500 hover:text-black transition-all cursor-default font-mono">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Testimonials */}
                    <div className="w-full md:w-2/3 grid gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-8 bg-zinc-900/30 border-l-2 border-emerald-500 relative">
                                <Quote className="absolute top-4 right-4 text-zinc-800" size={40} />
                                <p className="text-zinc-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 bg-zinc-800 rounded-full border border-emerald-500/30" />
                                    <div>
                                        <div className="text-white font-bold text-sm">{t.name}</div>
                                        <div className="text-zinc-600 text-[10px] font-mono uppercase">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
import { Plus, Send } from "lucide-react";

export const FAQAndNewsletter = () => {
    return (
        <section className="py-24 bg-[#09090B]">
            <div className="max-w-4xl mx-auto px-6">
                {/* FAQ */}
                <div className="mb-24">
                    <h2 className="text-2xl font-black text-white italic mb-12 uppercase tracking-tight">Frequently_Asked_Queries</h2>
                    <div className="space-y-4">
                        {[
                            ["Is there a certification?", "Every module completed issues a cryptographically signed hash on our private ledger."],
                            ["Can I use my own IDE?", "Yes. We provide SSH access to our interactive labs for Pro users."]
                        ].map(([q, a], i) => (
                            <details key={i} className="group border-b border-zinc-800 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none text-zinc-200 font-medium hover:text-emerald-500 transition-colors">
                                    <span>{q}</span>
                                    <Plus size={16} className="group-open:rotate-45 transition-transform" />
                                </summary>
                                <p className="mt-4 text-sm text-zinc-500 leading-relaxed font-mono">{a}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Newsletter (Call to Action) */}
                <div className="p-12 border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-black text-white mb-4 italic">JOIN THE <span className="text-emerald-500 text-shadow-glow">INNER CIRCLE.</span></h3>
                        <p className="text-zinc-400 mb-8 max-w-md mx-auto text-sm">Get low-level system design tips and early access to new kernels directly in your inbox.</p>

                        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="root@user.dev"
                                className="flex-1 bg-black border border-zinc-800 p-3 text-emerald-500 font-mono focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                            />
                            <button className="bg-emerald-500 text-black px-6 py-3 font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors uppercase text-sm">
                                Subscribe <Send size={14} />
                            </button>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-[100px] pointer-events-none select-none">
                        0101
                    </div>
                </div>
            </div>
        </section>
    );
};
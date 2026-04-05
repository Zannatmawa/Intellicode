export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-24">
            <div className="relative max-w-6xl mx-auto px-6 py-20">
                {/* Background Grid Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                    {/* Left Side: Info */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6">
                                ESTABLISH<br />
                                <span className="text-emerald-500 underline decoration-2 underline-offset-8">CONNECTION</span>
                            </h1>
                            <p className="text-gray-500 font-mono text-sm max-w-sm leading-relaxed">
                                // System is ready for incoming inquiries. Reach out for technical support,
                                enterprise solutions, or partnership requests.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="group">
                                <p className="text-[10px] font-mono text-emerald-500 tracking-[0.3em] uppercase mb-2">Location_Data</p>
                                <p className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">Chattogram, Bangladesh</p>
                            </div>

                            <div className="group">
                                <p className="text-[10px] font-mono text-emerald-500 tracking-[0.3em] uppercase mb-2">Digital_Address</p>
                                <p className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors underline decoration-white/10">hello@intellicode.dev</p>
                            </div>

                            <div className="group">
                                <p className="text-[10px] font-mono text-emerald-500 tracking-[0.3em] uppercase mb-2">Uptime_Hours</p>
                                <p className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">Sat — Thu, 09:00 — 18:00</p>
                            </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">System_Online</span>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative">
                        <div className="p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Full_Name</label>
                                        <input
                                            type="text"
                                            placeholder="Alex"
                                            className="w-full bg-black border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email_ID</label>
                                        <input
                                            type="email"
                                            placeholder="engineer@dev.com"
                                            className="w-full bg-black border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Subject_Header</label>
                                    <select className="w-full bg-black border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm appearance-none text-gray-400">
                                        <option>General Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Course Access</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Payload_Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Enter your message here..."
                                        className="w-full bg-black border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-lg transition-all transform active:scale-[0.98] font-mono tracking-widest text-sm">
                                    SEND_TRANSMISSION
                                </button>
                            </form>
                        </div>

                        {/* Abstract Decorative Corner */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-emerald-500/20 rounded-br-2xl pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
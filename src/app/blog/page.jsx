import Image from "next/image";
import Link from "next/link";

// Mock data - replace with your CMS or database fetch
const posts = [
    {
        id: "1",
        title: "Deep Dive into V8 Engine Internals",
        excerpt: "Exploring how JavaScript is compiled into machine code and the optimization phases involved.",
        date: "APR 04, 2026",
        category: "ENGINEERING",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
        readTime: "12 min read"
    },
    {
        id: "2",
        title: "Memory Management in Distributed Systems",
        excerpt: "Strategies for handling garbage collection and memory leaks in high-throughput environments.",
        date: "MAR 28, 2026",
        category: "ARCHITECTURE",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
        readTime: "8 min read"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-24">
            {/* Header Section */}
            <div className="relative border-b border-white/5 py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-4xl font-black tracking-tighter mb-4 italic">
                        THE_LOG<span className="text-emerald-500">.</span>
                    </h1>
                    <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                        Insights for the next generation of engineers
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <main className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="group block space-y-6"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[10px] font-mono tracking-widest uppercase">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-sm line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                    READ_FULL_ACCESS <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter / Terminal Box */}
                <div className="mt-32 p-12 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-700">
                        STATUS: READY
                    </div>
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-bold mb-4">Stay Synchronized</h3>
                        <p className="text-gray-500 mb-8 font-mono text-sm">Receive technical deep-dives and system updates directly in your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="engineer@domain.com"
                                className="flex-1 bg-black border border-white/10 px-6 py-4 rounded-lg focus:outline-none focus:border-emerald-500 font-mono text-sm"
                            />
                            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded-lg transition-colors font-mono text-sm">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
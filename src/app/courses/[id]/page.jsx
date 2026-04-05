import { getSingleCourse } from "../../../actions/server/product";
import Image from "next/image";
import CardBtn from "../../../components/buttons/CardBtn";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const course = await getSingleCourse(id);

    if (!course) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <h2 className="text-2xl font-mono text-emerald-500">_COURSE_NOT_FOUND</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-emerald-500/30">
            {/* Hero Section with Grid Background */}
            <div className="relative bg-black border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                {course.level || "ENGINEERING_TRACK"}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
                                {course.title}
                            </h1>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                                {course.subtitle || "Master low-level engineering and scalable architecture through terminal-driven learning."}
                            </p>
                            <div className="flex items-center gap-8 mb-10">
                                <div>
                                    <p className="text-[10px] text-emerald-500 uppercase font-mono tracking-widest">Entry_Fee</p>
                                    <p className="text-3xl font-bold">৳{course.price}</p>
                                </div>
                                <div className="h-10 w-px bg-white/10"></div>
                                <div>
                                    <p className="text-[10px] text-emerald-500 uppercase font-mono tracking-widest">Runtime</p>
                                    <p className="text-xl font-semibold text-gray-300">{course.duration || "12.5 hrs"}</p>
                                </div>
                            </div>
                            <div className="max-w-xs">
                                <CardBtn course={course} />
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">// Documentation</h2>
                            <h3 className="text-3xl font-bold mb-6">Course Brief</h3>
                            <div className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                                {course.description}
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-emerald-500">01.</span> Syllabus
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                                    <li> System Kernel Analysis</li>
                                    <li> Memory Management</li>
                                    <li> Concurrent Patterns</li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-lg bg-emerald-500 text-black">
                                <h4 className="font-black text-lg mb-2 italic">CORE_OUTCOME</h4>
                                <p className="text-sm font-medium leading-relaxed">
                                    Build enterprise-grade systems with deep understanding of V8 internals and memory safety.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-6">
                        <div className="p-1 w-full bg-gradient-to-b from-white/10 to-transparent rounded-xl">
                            <div className="bg-[#0D0D0D] p-8 rounded-[10px] space-y-6">
                                <h3 className="font-bold text-sm uppercase tracking-widest text-gray-500">System_Specs</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Modules', value: course.lessons || '18' },
                                        { label: 'Access', value: 'Perpetual' },
                                        { label: 'Platform', value: 'Cloud IDE' },
                                        { label: 'Cert', value: 'Encoded' }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 font-mono">
                                            <span className="text-gray-600 text-xs">{stat.label}</span>
                                            <span className="text-emerald-400 text-xs">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
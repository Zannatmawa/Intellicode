import { getProducts } from "../../actions/server/product";
import CourseCard from "../cards/CourseCard";
import Link from "next/link";

const HomeCourses = async () => {
    const courses = (await getProducts() || []);
    const plainCourses = courses.map(course => ({
        ...course,
        id: course._id?.toString(),
    }));
    const allCourses = plainCourses.slice(0, 4);

    return (
        <section className="bg-[#09090B] py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-3xl font-black italic text-white tracking-tighter uppercase">
                            Featured_Courses<span className="text-emerald-500">.</span>
                        </h2>
                    </div>

                    <Link
                        href="/courses"
                        className="text-gray-500 hover:text-emerald-400 font-mono text-xs tracking-widest transition-colors flex items-center gap-2 group"
                    >
                        VIEW_ALL_RECORDS
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                {/* Grid Container */}
                {allCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allCourses.map(course => (
                            <CourseCard
                                course={course}
                                key={course.id || course._id}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="h-64 flex items-center justify-center border border-dashed border-white/10 rounded-2xl">
                        <p className="font-mono text-gray-600 text-sm animate-pulse">
                            SCANNING_DATABASE... NO_COURSES_FOUND
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HomeCourses;
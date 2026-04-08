import { getProducts } from "../../actions/server/product";
import CourseCard from "../cards/CourseCard";

const OurCourses = async () => {
    const courses = (await getProducts() || []);
    const plainCourses = courses.map(course => ({
        ...course,
        id: course._id?.toString(),
    }));
    return (
        <div className="bg-[#0A0A0A] min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-12 bg-emerald-500"></div>
                        <span className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase underline-offset-4 underline">
                            System_Registry
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black italic text-white tracking-tighter">
                        OUR_COURSES<span className="text-emerald-500">.</span>
                    </h1>
                </div>

                {/* Toolbar: Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between border-b border-white/5 pb-8">
                    {/* Filter & Sort */}
                    <div className="flex gap-4 w-full md:w-auto">
                        <select className="bg-black border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-gray-400 focus:outline-none focus:border-emerald-500/50 appearance-none cursor-pointer hover:bg-white/[0.02]">
                            <option>ALL_LEVELS</option>
                            <option>BEGINNER</option>
                            <option>INTERMEDIATE</option>
                            <option>ADVANCED_ENGINEERING</option>
                        </select>

                        <select className="bg-black border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-gray-400 focus:outline-none focus:border-emerald-500/50 appearance-none cursor-pointer hover:bg-white/[0.02]">
                            <option>SORT: LATEST</option>
                            <option>PRICE: LOW_TO_HIGH</option>
                            <option>PRICE: HIGH_TO_LOW</option>
                        </select>
                    </div>
                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-md group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500 font-mono text-xs">
                            $
                        </span>
                        <input
                            type="text"
                            placeholder="Search_Database..."
                            className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm font-mono text-gray-300 focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-700"
                        />
                    </div>


                </div>

                {/* Course Grid */}
                {plainCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map(course => (
                            <CourseCard course={course} key={course.id || course._id} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
                        <p className="font-mono text-gray-600 text-sm">NO_RECORDS_FOUND_IN_LOCAL_DATABASE</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurCourses;
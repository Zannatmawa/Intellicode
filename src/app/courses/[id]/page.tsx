

import { getSingleCourse } from "@/actions/server/product";
import Image from "next/image";
type CoursePageProps = {
    params: { id: string };
};

const CourseDetailsPage = async ({ params }: CoursePageProps) => {
    const { id } = await params;
    const course = await getSingleCourse(id);

    console.log(course)
    if (!course) {
        return <h2 className="text-center mt-10">Course not found</h2>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">

            {/* Image */}
            <div className="relative w-full h-80 mb-6">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
                {course.title}
            </h1>

            {/* Info */}
            <div className="flex gap-6 mb-4 text-sm text-gray-500">
                <span>Level: {course.level}</span>
                <span>Price: ৳{course.price}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
                {course.description}
            </p>

            {/* Extra */}
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What you'll learn:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>Build real-world projects</li>
                    <li>Understand core concepts deeply</li>
                    <li>Hands-on practice</li>
                </ul>
            </div>

        </div>
    );
};

export default CourseDetailsPage;
// import courses from "../../data/data.json"
import { getSingleCourse, getProducts } from "../../actions/server/product"
import CourseCard from "../cards/CourseCard"

const OurCourses = async () => {
    const courses = (await getProducts() || [])
    return (
        <div className="bg-[#0b1512]">
            {/* <h1>our courses</h1> */}
            <div className="grid md:grid-cols-4 gap-5">
                {
                    courses.map(course => (
                        <CourseCard course={course} key={course.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurCourses
"use server";
type Course = {
    _id: string;
    title: string;
    description: string;
    image: string;
    level?: string;
    price?: string;
    category?: string;
    tags?: string[];
};
import { collections, dbConnect } from '@/lib/dbConnect';
// import { collections, dbConnect } from '@/app/lib/db';
import { ObjectId } from 'mongodb';

export const getProducts = async () => {
    const courses = await (await dbConnect(collections.COURSES)).find().toArray();
    return courses;
}

export const getSingleCourse = async (id: string) => {
    try {
        if (!id || id.length !== 24) {
            return null;
        }

        const query = { _id: new ObjectId(id) };

        const courses = await (await dbConnect(collections.COURSES)).findOne(query);
        if (!courses) return null;
        return {
            ...courses,
            _id: courses._id.toString(),
        } as Course;
    } catch (error) {
        console.error("Error fetching course:", error);
        return null;
    }
}
"use server";

import { collections, dbConnect } from '../../lib/dbConnect';
// import { collections, dbConnect } from '@/app/lib/db';
import { ObjectId } from 'mongodb';

export const getProducts = async () => {
    const courses = await (await dbConnect(collections.COURSES)).find().toArray();
    return courses;
}

export const getSingleCourse = async (id) => {
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
        };
    } catch (error) {
        console.error("Error fetching course:", error);
        return null;
    }
}
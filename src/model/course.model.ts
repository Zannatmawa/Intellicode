// import { Schema, model } from 'mongoose';
// import { ICourse } from '../types/course.interface';

// const courseSchema = new Schema<ICourse>(
//     {
//         title: { type: String, required: true },
//         description: { type: String, required: true },
//         instructor: { type: String, required: true },
//         price: { type: Number, default: 0 },
//         duration: { type: Number }, // in hours or minutes
//         level: {
//             type: String,
//             enum: ['beginner', 'intermediate', 'advanced'],
//             default: 'beginner',
//         },
//         thumbnail: { type: String },
//     },
//     {
//         timestamps: true,
//     }
// );

// export const Course = model<ICourse>('Course', courseSchema);
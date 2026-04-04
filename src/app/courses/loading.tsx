import { CourseSkeleton } from '@/components/Skeleton';
import React from 'react';

const Loading = () => {
    return (
        <div className="grid md:grid-cols-4 gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
                <CourseSkeleton key={index} />
            ))}
        </div>
    );
};

export default Loading;
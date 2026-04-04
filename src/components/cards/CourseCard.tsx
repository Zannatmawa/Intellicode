"use client";

import Image from "next/image";
import Link from "next/link";
import { PlayCircle, ArrowRight } from "lucide-react";
import CardBtn from "../buttons/CardBtn";

const CourseCard = ({ course }) => {
    const {
        _id,
        title,
        image,
        price,
        level,
        description
    } = course;

    return (
        <div className="group bg-[#141414] border border-gray-800 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#00e699] hover:-translate-y-1 flex flex-col h-full shadow-2xl">

            {/* Image Container with Fill to solve the error */}
            <div className="relative h-44 w-full overflow-hidden border-b border-gray-800">
                <Image
                    fill
                    src={image}
                    alt={title}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Overlay Tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent flex flex-col justify-between p-4">
                    <span className="font-mono text-[10px] bg-[#00e699] text-black px-2 py-0.5 rounded-sm w-fit font-bold tracking-tighter uppercase">
                        {level}
                    </span>

                    <button className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-sm text-[10px] font-bold w-fit hover:bg-[#00e699] hover:text-black transition-colors uppercase tracking-wider">
                        <PlayCircle size={12} />
                        Preview Lab
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow bg-[#141414]">

                {/* Title */}
                <h2 className="text-white text-lg font-bold mb-2 line-clamp-1 group-hover:text-[#00e699] transition-colors uppercase tracking-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed font-medium">
                    {description}
                </p>

                {/* Price & Specs */}
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-800/50">
                    <span className="font-mono text-[#00e699] font-bold text-sm">
                        ৳{price}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">v2.6.0_STABLE</span>
                </div>

                {/* Buttons Stack */}
                <div className="flex flex-col gap-2 mt-auto">
                    <div className="w-full">
                        <CardBtn course={course} />
                    </div>

                    <Link
                        href={`/courses/${_id}`}
                        className="w-full text-center border border-gray-700 text-gray-300 py-2 rounded-sm text-xs font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                    >
                        View Docs <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
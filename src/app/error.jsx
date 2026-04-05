"use client";

import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0d0d0d] text-center px-4">
            {/* Icon/Graphic */}
            <div className="mb-6">
                <div className="text-6xl font-bold text-[#333] select-none">500</div>
                <div className="h-1 w-12 bg-red-500 mx-auto mt-2"></div>
            </div>

            {/* Text Content */}
            <h1 className="text-white text-2xl font-bold mb-3 tracking-tight">
                Something went wrong
            </h1>
            <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
                An unexpected error occurred while processing your request.
                Our systems have been notified.
            </p>

            {/* Simple Error Code (Optional) */}
            {error.digest && (
                <code className="block mb-8 py-1 px-3 bg-[#1a1a1a] border border-gray-800 text-gray-500 text-[10px] rounded-sm font-mono lowercase">
                    ID: {error.digest}
                </code>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
                <button
                    onClick={() => reset()}
                    className="flex items-center justify-center gap-2 bg-white text-black py-2.5 px-6 rounded-sm text-sm font-bold hover:bg-gray-200 transition-colors"
                >
                    <RefreshCw size={16} />
                    Try Again
                </button>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 border border-gray-700 text-white py-2.5 px-6 rounded-sm text-sm font-bold hover:bg-gray-800 transition-all"
                >
                    <Home size={16} />
                    Go Home
                </Link>
            </div>
        </div>
    );
}
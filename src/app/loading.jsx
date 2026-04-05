"use client"
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#0A0A0A] selection:bg-emerald-500/30">
            {/* System Status Container */}
            <div className="flex flex-col items-center space-y-6">

                <div className="relative flex items-center justify-center">
                    <div className="absolute h-16 w-16 rounded-full border border-emerald-500/20 animate-ping"></div>
                    <div className="h-12 w-12 rounded-full border-2 border-t-emerald-500 border-r-transparent border-b-emerald-500/10 border-l-transparent animate-spin"></div>
                </div>

                {/* Terminal Style Text */}
                <div className="text-center">
                    <p className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase animate-pulse mb-2">
                    </p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-gray-600 font-mono text-[10px]">STATUS:</span>
                        <span className="text-gray-400 font-mono text-[10px] tracking-widest">
                            FETCHING_DATA_FROM_REGISTRY...
                        </span>
                    </div>
                </div>

                {/* Progress Bar Detail */}
                <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-1/3 animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(250%); }
                }
            `}</style>
        </div>
    );
}
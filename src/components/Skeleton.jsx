export const CourseSkeleton = () => (
  <div className="bg-[#0D0D0D] border border-white/5 rounded-lg overflow-hidden animate-pulse shadow-2xl">
    {/* Image Area - darker slate to match your image placeholders */}
    <div className="w-full h-48 bg-white/5 relative">
      {/* Subtle diagonal line pattern often seen in tech skeletons */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #10b981 25%, transparent 25%, transparent 50%, #10b981 50%, #10b981 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>
    </div>

    <div className="p-6 space-y-5">
      {/* Category/Level Tag */}
      <div className="flex justify-between items-center">
        <div className="h-2 w-16 bg-emerald-500/20 rounded-full" />
        <div className="h-2 w-8 bg-white/5 rounded-full" />
      </div>

      {/* Course Title */}
      <div className="space-y-3">
        <div className="h-5 w-full bg-white/10 rounded-sm" />
        <div className="h-5 w-2/3 bg-white/10 rounded-sm" />
      </div>

      {/* Description Lines */}
      <div className="space-y-2">
        <div className="h-3 w-full bg-white/[0.03] rounded-sm" />
        <div className="h-3 w-4/5 bg-white/[0.03] rounded-sm" />
      </div>

      {/* Pricing & Button Area */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
        <div className="h-6 w-20 bg-white/10 rounded-sm" />
        <div className="h-10 flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md" />
      </div>
    </div>

    {/* Terminal-style status bar at very bottom (Optional) */}
    <div className="h-1 bg-white/[0.02] w-full relative">
      <div className="absolute inset-y-0 left-0 bg-emerald-500/30 w-1/3 animate-[loading_2s_infinite]"></div>
    </div>
  </div>
);
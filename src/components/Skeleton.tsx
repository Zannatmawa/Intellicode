export const CourseSkeleton = () => (
  <div className="bg-[#141414] border border-gray-800 rounded-sm p-0 animate-pulse">
    <div className="w-full h-48 bg-gray-800" />
    <div className="p-6">
      <div className="h-3 w-16 bg-gray-700 rounded mb-4" />
      <div className="h-6 w-3/4 bg-gray-700 rounded mb-4" />
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full bg-gray-800 rounded" />
        <div className="h-3 w-5/6 bg-gray-800 rounded" />
      </div>
      <div className="h-10 w-full bg-gray-800 rounded-sm" />
    </div>
  </div>
);
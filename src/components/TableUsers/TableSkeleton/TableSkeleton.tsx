const TableSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-4 bg-gray-200 rounded w-1/2 sm:w-1/4" />
        <div className="h-4 bg-gray-200 rounded w-1/3 sm:w-1/6" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-2 sm:px-4">
                <div className="h-4 bg-gray-200 rounded w-16 sm:w-24" />
              </th>
              <th className="px-2 py-2 sm:px-4">
                <div className="h-4 bg-gray-200 rounded w-20 sm:w-32" />
              </th>
              <th className="px-2 py-2 sm:px-4">
                <div className="h-4 bg-gray-200 rounded w-12 sm:w-16" />
              </th>
              <th className="px-2 py-2 sm:px-4">
                <div className="h-4 bg-gray-200 rounded w-16 sm:w-20" />
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-b border-gray-200">
                {/* First Column */}
                <td className="px-2 py-4 sm:px-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-200 rounded-full" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 sm:w-3/4" />
                  </div>
                </td>
                {/* Second Column */}
                <td className="px-2 py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </td>
                {/* Third Column */}
                <td className="px-2 py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-2/3 sm:w-3/4" />
                </td>
                {/* Fourth Column */}
                <td className="px-2 py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-1/2 sm:w-1/2" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;

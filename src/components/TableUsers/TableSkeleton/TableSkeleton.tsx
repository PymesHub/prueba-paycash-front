"use client";

import { Skeleton } from "@nextui-org/react";

const TableSkeleton: React.FC = () => {
  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md">
      <div className="w-full bg-gray-300 dark:bg-gray-900 rounded-md">
        {/* Skeleton rows */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center py-3 px-4 space-x-4 animate-pulse"
          >
            <div className="flex items-center space-x-2">
              <Skeleton
                className="rounded-full"
                style={{ width: 40, height: 40 }}
              />
              <Skeleton className="rounded w-3/4" style={{ height: 16 }} />
            </div>
            <Skeleton className="rounded w-3/5" style={{ height: 16 }} />
            <Skeleton className="rounded w-1/3" style={{ height: 16 }} />
            <Skeleton className="rounded w-1/2" style={{ height: 16 }} />
            <div className="flex space-x-2">
              <Skeleton className="rounded" style={{ width: 32, height: 32 }} />
              <Skeleton className="rounded" style={{ width: 32, height: 32 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;

// [Pagination.tsx]
import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  totalEntries: number;
  startEntry: number;
  endEntry: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  totalEntries,
  startEntry,
  endEntry,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-slate-600 sm:flex-row">
      <p>
        {totalEntries === 0
          ? "Showing 0 entries"
          : `Showing ${startEntry} to ${endEntry} of ${totalEntries} entries`}
      </p>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="rounded px-2 py-1 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => onPageChange(n)}
            className={`h-6 w-6 rounded text-[11px] font-medium ${
              page === n
                ? "bg-orange-500 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="rounded px-2 py-1 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          Next
        </button>
      </div>
    </div>
  );
}
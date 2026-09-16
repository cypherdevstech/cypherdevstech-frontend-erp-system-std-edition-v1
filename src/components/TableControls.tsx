// [TableControls.tsx]
import React from "react";
import { Search } from "lucide-react";

interface TableControlsProps {
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

export default function TableControls({
  pageSize,
  onPageSizeChange,
  search,
  onSearchChange,
}: TableControlsProps) {
  return (
    <div className="flex flex-col gap-2 px-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="rounded border border-slate-300 px-1.5 py-0.5 text-xs focus:border-orange-400 focus:outline-none"
        >
          {PAGE_SIZE_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-600">
        <span>Search:</span>
        <div className="relative">
          <Search
            size={12}
            className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Type to search..."
            className="w-48 rounded border border-slate-300 py-0.5 pl-6 pr-2 text-xs focus:border-orange-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
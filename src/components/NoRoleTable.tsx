// [NoRoleTable.tsx]
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { NoRoleRow, NoRoleSortKey, NoRoleSortState } from "./types";

interface NoRoleTableProps {
  rows: NoRoleRow[];
  columns: { key: NoRoleSortKey; label: string }[];
  sort: NoRoleSortState;
  onSort: (key: NoRoleSortKey) => void;
  onViewProfile?: (row: NoRoleRow) => void;
}

export default function NoRoleTable({
  rows,
  columns,
  sort,
  onSort,
  onViewProfile,
}: NoRoleTableProps) {
  return (
    <div className="mt-2 overflow-x-auto px-4">
      <table className="min-w-full border-collapse text-xs">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-600">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => onSort(col.key)}
                className="cursor-pointer select-none whitespace-nowrap px-2 py-2 font-medium hover:text-slate-900"
              >
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  <span className="flex flex-col leading-none text-[9px] text-slate-400">
                    <ChevronUp
                      size={10}
                      className={
                        sort.key === col.key && sort.dir === "asc"
                          ? "text-orange-500"
                          : ""
                      }
                    />
                    <ChevronDown
                      size={10}
                      className={
                        sort.key === col.key && sort.dir === "desc"
                          ? "text-orange-500"
                          : ""
                      }
                    />
                  </span>
                </span>
              </th>
            ))}
            <th className="px-2 py-2 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-2 py-5 text-center text-slate-400"
              >
                No data available in table
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="whitespace-nowrap px-2 py-2">{row.firstName}</td>
                <td className="whitespace-nowrap px-2 py-2">{row.lastName}</td>
                <td className="px-2 py-2">{row.address}</td>
                <td className="whitespace-nowrap px-2 py-2 text-slate-500">
                  {row.email}
                </td>
                <td className="whitespace-nowrap px-2 py-2">{row.contact}</td>
                <td className="whitespace-nowrap px-2 py-2">
                  <button
                    onClick={() => onViewProfile?.(row)}
                    className="rounded bg-slate-800 px-2 py-1 text-[11px] font-medium text-white hover:bg-slate-700"
                  >
                    See Profile
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
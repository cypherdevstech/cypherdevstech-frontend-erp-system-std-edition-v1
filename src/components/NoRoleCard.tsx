// [NoRoleCard.tsx]
import React, { useMemo, useState } from "react";
import type { NoRoleRow, NoRoleSortKey, NoRoleSortState } from "./types";
import TableControls from "./TableControls";
import NoRoleTable from "./NoRoleTable";
import Pagination from "./Pagination";

interface NoRoleCardProps {
  title: string;
  rows: NoRoleRow[];
  columns: { key: NoRoleSortKey; label: string }[];
  onViewProfile?: (row: NoRoleRow) => void;
  onAddUser?: () => void;
}

export default function NoRoleCard({
  title,
  rows,
  columns,
  onViewProfile,
  onAddUser,
}: NoRoleCardProps) {
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<NoRoleSortState>({ key: null, dir: "asc" });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let result = rows;
    if (q) {
      result = result.filter((r) =>
        [r.firstName, r.lastName, r.address, r.email, r.contact]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    if (sort.key) {
      const key = sort.key;
      result = [...result].sort((a, b) => {
        const av = a[key].toLowerCase();
        const bv = b[key].toLowerCase();
        if (av < bv) return sort.dir === "asc" ? -1 : 1;
        if (av > bv) return sort.dir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [rows, search, sort]);

  const totalEntries = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const startEntry = totalEntries === 0 ? 0 : (page - 1) * pageSize + 1;
  const endEntry = Math.min(page * pageSize, totalEntries);

  const handleSort = (key: NoRoleSortKey) => {
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    );
  };

  return (
    <div className="mx-auto max-w-[1499px] overflow-hidden rounded-md bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
        <button
          onClick={() => onAddUser?.()}
          className="rounded bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-slate-800"
        >
          Add User
        </button>
      </div>

      <TableControls
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      <NoRoleTable
        rows={pageRows}
        columns={columns}
        sort={sort}
        onSort={handleSort}
        onViewProfile={onViewProfile}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        totalEntries={totalEntries}
        startEntry={startEntry}
        endEntry={endEntry}
        onPageChange={setPage}
      />
    </div>
  );
}
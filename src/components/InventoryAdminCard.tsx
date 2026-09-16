// [InventoryAdminCard.tsx]
import React, { useMemo, useState } from "react";
import type {
  InventoryAdminRow,
  InventoryAdminSortKey,
  InventoryAdminSortState,
} from "./types";
import TableControls from "./TableControls";
import InventoryAdminTable from "./InventoryAdminTable";
import Pagination from "./Pagination";

interface InventoryAdminCardProps {
  title: string;
  rows: InventoryAdminRow[];
  columns: { key: InventoryAdminSortKey; label: string }[];
  onViewProfile?: (row: InventoryAdminRow) => void;
  onLinkBranch?: (row: InventoryAdminRow) => void;
}

export default function InventoryAdminCard({
  title,
  rows,
  columns,
  onViewProfile,
  onLinkBranch,
}: InventoryAdminCardProps) {
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<InventoryAdminSortState>({
    key: null,
    dir: "asc",
  });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let result = rows;
    if (q) {
      result = result.filter((r) =>
        [r.firstName, r.lastName, r.address, r.email, r.contact, r.branch]
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

  const handleSort = (key: InventoryAdminSortKey) => {
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    );
  };

  return (
    <div className="mx-auto max-w-[1499px] overflow-hidden rounded-md bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
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

      <InventoryAdminTable
        rows={pageRows}
        columns={columns}
        sort={sort}
        onSort={handleSort}
        onViewProfile={onViewProfile}
        onLinkBranch={onLinkBranch}
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
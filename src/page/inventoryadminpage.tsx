// [InventoryAdminPage.tsx]
import React from "react";
import TopBar from "../components/TopBar";
import InventoryAdminCard from "../components/InventoryAdminCard";
import { INVENTORY_ADMIN_ROWS, INVENTORY_ADMIN_COLUMNS } from "../components/data";
import type { InventoryAdminRow } from "../components/types";

export default function InventoryAdminPage() {
  const handleViewProfile = (row: InventoryAdminRow) => {
    // Wire this up to a modal, drawer, or route as needed.
    console.log("View profile:", row);
  };

  const handleLinkBranch = (row: InventoryAdminRow) => {
    // Wire this up to a branch-assignment modal or route as needed.
    console.log("Link branch for:", row);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-100 font-sans text-slate-800">
      <TopBar title="System Administrator" />

      <main className="flex-1 overflow-y-auto bg-[#3f7791] p-4">
        <InventoryAdminCard
          title="Companies List of Inventory Administrators"
          rows={INVENTORY_ADMIN_ROWS}
          columns={INVENTORY_ADMIN_COLUMNS}
          onViewProfile={handleViewProfile}
          onLinkBranch={handleLinkBranch}
        />
      </main>
    </div>
  );
}
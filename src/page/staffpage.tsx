// [StaffPage.tsx]
import React from "react";
import TopBar from "../components/TopBar";
import StaffCard from "../components/StaffCard";
import { STAFF_ROWS, STAFF_COLUMNS } from "../components/data";
import type { StaffRow } from "../components/types";

export default function StaffPage() {
  const handleViewProfile = (row: StaffRow) => {
    // Wire this up to a modal, drawer, or route as needed.
    console.log("View profile:", row);
  };

  const handleLinkBranch = (row: StaffRow) => {
    // Wire this up to a branch-assignment modal or route as needed.
    console.log("Link branch for:", row);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-100 font-sans text-slate-800">
      <TopBar title="System Administrator" />

      <main className="flex-1 overflow-y-auto bg-[#3f7791] p-4">
        <StaffCard
          title="Companies List of Staff"
          rows={STAFF_ROWS}
          columns={STAFF_COLUMNS}
          onViewProfile={handleViewProfile}
          onLinkBranch={handleLinkBranch}
        />
      </main>
    </div>
  );
}
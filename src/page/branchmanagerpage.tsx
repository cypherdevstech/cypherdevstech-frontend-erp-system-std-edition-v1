// [BranchManagerPage.tsx]
import React from "react";
import TopBar from "../components/TopBar";
import BranchManagerCard from "../components/BranchManagerCard";
import { BRANCH_MANAGER_ROWS, BRANCH_MANAGER_COLUMNS } from "../components/data";
import type { BranchManagerRow } from "../components/types";

export default function BranchManagerPage() {
  const handleViewProfile = (row: BranchManagerRow) => {
    // Wire this up to a modal, drawer, or route as needed.
    console.log("View profile:", row);
  };

  const handleLinkBranch = (row: BranchManagerRow) => {
    // Wire this up to a branch-assignment modal or route as needed.
    console.log("Link branch for:", row);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-100 font-sans text-slate-800">
      <TopBar title="System Administrator" />

      <main className="flex-1 overflow-y-auto bg-[#3f7791] p-4">
        <BranchManagerCard
          title="Companies List of Branch Managers"
          rows={BRANCH_MANAGER_ROWS}
          columns={BRANCH_MANAGER_COLUMNS}
          onViewProfile={handleViewProfile}
          onLinkBranch={handleLinkBranch}
        />
      </main>
    </div>
  );
}
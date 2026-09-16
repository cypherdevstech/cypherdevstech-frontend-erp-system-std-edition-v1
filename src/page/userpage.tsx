// [UserPage.tsx]
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import DataCard from "../components/DataCard";
import { ADMIN_ROWS, COLUMNS } from "../components/data";
import type { AdminRow } from "../components/types";

export default function UserPage() {
  const [activeSub] = useState("Administrators");

  const handleViewProfile = (row: AdminRow) => {
    // Wire this up to a modal, drawer, or route as needed.
    console.log("View profile:", row);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-100 font-sans text-slate-800">
      <TopBar title="System Administrator" />

      <main className="flex-1 overflow-y-auto bg-[#3f7791] p-4">
        <DataCard
          title={activeSub}
          rows={ADMIN_ROWS}
          columns={COLUMNS}
          onViewProfile={handleViewProfile}
        />
      </main>
    </div>
  );
}
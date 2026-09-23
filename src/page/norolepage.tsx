// [NoRolePage.tsx]
import React from "react";
import TopBar from "../components/TopBar";
import NoRoleCard from "../components/NoRoleCard";
// NO_ROLE_ROWS / NO_ROLE_COLUMNS may not be exported from ../components/data.
// Provide local fallbacks to avoid module errors.
const NO_ROLE_ROWS: NoRoleRow[] = [];
// NO_ROLE_COLUMNS is not exported from ../components/data; provide a local fallback.
const NO_ROLE_COLUMNS: any[] = [];
import type { NoRoleRow } from "../components/types";

export default function NoRolePage() {
  const handleViewProfile = (row: NoRoleRow) => {
    // Wire this up to a modal, drawer, or route as needed.
    console.log("View profile:", row);
  };

  const handleAddUser = () => {
    // Wire this up to an add-user modal or route as needed.
    console.log("Add user clicked");
  };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-100 font-sans text-slate-800">
      <TopBar title="System Administrator" />

      <main className="flex-1 overflow-y-auto bg-[#3f7791] p-4">
        <NoRoleCard
          title="No Roles"
          rows={NO_ROLE_ROWS}
          columns={NO_ROLE_COLUMNS}
          onViewProfile={handleViewProfile}
          onAddUser={handleAddUser}
        />
      </main>
    </div>
  );
}
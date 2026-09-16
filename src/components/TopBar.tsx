// [TopBar.tsx]
import React from "react";
import { Menu, Bell, User } from "lucide-react";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4">
      <div className="flex items-center gap-3">
        <button className="text-slate-500 hover:text-slate-800">
          <Menu size={18} />
        </button>
        <h1 className="text-sm font-semibold text-slate-800">{title}</h1>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <button className="relative hover:text-slate-800">
          <Bell size={16} />
          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-orange-500" />
        </button>
        <button className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200">
          <User size={14} />
        </button>
      </div>
    </header>
  );
}
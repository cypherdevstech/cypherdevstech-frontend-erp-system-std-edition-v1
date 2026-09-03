import type { LucideIcon } from "lucide-react";

export default function DashboardStatCard({
    icon: Icon,
    label,
    value,
}: {
    icon: LucideIcon;
    label: string;
    value: string | number;
}) {
    return (
        <div className="flex flex-1 items-center gap-3 rounded-md border border-[#E2E2E2] bg-white px-4 py-3 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDEBEA]">
                <Icon size={20} strokeWidth={2} className="text-[#E4443A]" />
            </span>
            <div className="flex flex-col">
                <span className="text-[11px] text-[#9A9A9A]">{label}</span>
                <span className="text-[15px] font-semibold text-black">{value}</span>
            </div>
        </div>
    );
}
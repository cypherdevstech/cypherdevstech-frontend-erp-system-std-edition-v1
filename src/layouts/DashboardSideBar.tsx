import {
    LayoutGrid,
    CircleUserRound,
    GitBranch,
    FileText,
    Workflow,
    AlignLeft,
    Clock,
    Settings,
    ChevronRight,
    type LucideIcon,
} from "lucide-react";

type Item = {
    label: string;
    icon: LucideIcon;
    chevron?: boolean;
};

const items: Item[] = [
    { label: "Dashboard", icon: LayoutGrid },
    { label: "Users", icon: CircleUserRound, chevron: true },
    { label: "Branches", icon: GitBranch },
    { label: "Inventory", icon: FileText },
    { label: "Assembly", icon: Workflow },
    { label: "General Transaction", icon: AlignLeft },
    { label: "Daily Time Record", icon: Clock },
    { label: "System Settings", icon: Settings },
];

export default function DashboardSideBar({
    activeItem = "Branches",
    logoSrc,
    onSelect,
}: {
    activeItem?: string;
    logoSrc?: string;
    onSelect?: (label: string) => void;
}) {
    return (
        <aside
            className="flex h-full min-h-[1093px] w-full max-w-[275px] flex-col bg-[#242423] font-['Roboto',sans-serif]"
            style={{ width: 275 }}
        >
            {/* Logo container */}
            <div
                className="relative flex h-20 shrink-0 items-center gap-3 bg-[#232325] pl-[18px]"
                style={{ boxShadow: "inset -1px -1px 5px rgba(255,255,255,0.05)" }}
            >
                {logoSrc ? (
                    <img
                        src={logoSrc}
                        alt="Fayeed Electronics logo"
                        className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
                    />
                ) : (
                    <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#F26522] bg-[#1a1a19] text-[22px] font-bold text-[#F26522]">
                        F
                    </span>
                )}
                <span className="text-[24px] leading-[28px] tracking-[0.05em] text-[rgba(255,184,143,0.75)]">
                    Fayeed
                    <br />
                    Electronics
                </span>
            </div>

            {/* Section label */}
            <div className="relative h-[53px] shrink-0">
                <span className="absolute left-7 top-[33px] text-[12px] leading-[14px] tracking-[0.05em] text-[rgba(255,255,255,0.5)]">
                    MAIN MENU
                </span>
            </div>

            {/* Nav */}
            <nav className="flex flex-col">
                {items.map((item) => {
                    const Icon = item.icon;
                    const active = item.label === activeItem;
                    return (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => onSelect?.(item.label)}
                            aria-current={active ? "page" : undefined}
                            className={[
                                "relative flex h-[70px] w-full shrink-0 items-center text-left transition-colors",
                                active
                                    ? "bg-[#F26522]"
                                    : "bg-[#242423] hover:bg-[rgba(255,255,255,0.06)]",
                            ].join(" ")}
                        >
                            <span className="absolute left-[36px] flex w-[30px] items-center justify-center">
                                <Icon
                                    className={active ? "text-[#F8F8F8]" : "text-[rgba(248,248,248,0.4)]"}
                                    size={28}
                                    strokeWidth={2}
                                />
                            </span>
                            <span
                                className={[
                                    "absolute left-[85px] text-[18px] leading-[21px] tracking-[0.05em]",
                                    active ? "text-white" : "text-[rgba(248,248,248,0.4)]",
                                ].join(" ")}
                            >
                                {item.label}
                            </span>
                            {item.chevron && (
                                <ChevronRight
                                    className="absolute right-[19px] text-[rgba(248,248,248,0.4)]"
                                    size={22}
                                    strokeWidth={2}
                                />
                            )}
                        </button>
                    );
                })}
            </nav>

            <div className="flex-1 bg-[#242423]" />
        </aside>
    );
}

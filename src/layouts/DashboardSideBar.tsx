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
    activeItem = "System Settings",
    logoSrc,
    onSelect,
    collapsed = false,
}: {
    activeItem?: string;
    logoSrc?: string;
    onSelect?: (label: string) => void;
    collapsed?: boolean;
}) {
    return (
        <aside
            className={[
                "flex h-full min-h-[820px] flex-col bg-[#242423] font-['Roboto',sans-serif] transition-[width] duration-200",
                collapsed ? "w-[72px]" : "w-full max-w-[210px]",
            ].join(" ")}
            style={{ width: collapsed ? 72 : 210 }}
        >
            {/* Logo container */}
            <div
                className={[
                    "relative flex h-[60px] shrink-0 items-center bg-[#232325]",
                    collapsed ? "justify-center gap-0 px-0" : "gap-2.5 pl-[14px]",
                ].join(" ")}
                style={{ boxShadow: "inset -1px -1px 5px rgba(255,255,255,0.05)" }}
            >
                {logoSrc ? (
                    <img
                        src={logoSrc}
                        alt="Fayeed Electronics logo"
                        className="h-[45px] w-[45px] shrink-0 rounded-full object-cover"
                    />
                ) : (
                    <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#F26522] bg-[#1a1a19] text-[17px] font-bold text-[#F26522]">
                        F
                    </span>
                )}
                {!collapsed && (
                    <span className="text-[18px] leading-[21px] tracking-[0.05em] text-[rgba(255,184,143,0.75)]">
                        Fayeed
                        <br />
                        Electronics
                    </span>
                )}
            </div>

            {/* Section label */}
            {!collapsed && (
                <div className="relative h-[40px] shrink-0">
                    <span className="absolute left-[21px] top-[25px] text-[11px] leading-[13px] tracking-[0.05em] text-[rgba(255,255,255,0.5)]">
                        MAIN MENU
                    </span>
                </div>
            )}
            {collapsed && <div className="h-[16px] shrink-0" />}

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
                            title={collapsed ? item.label : undefined}
                            className={[
                                "relative flex h-[52px] w-full shrink-0 items-center transition-colors",
                                collapsed ? "justify-center" : "text-left",
                                active
                                    ? "bg-[#F26522]"
                                    : "bg-[#242423] hover:bg-[rgba(255,255,255,0.06)]",
                            ].join(" ")}
                        >
                            {collapsed ? (
                                <Icon
                                    className={active ? "text-[#F8F8F8]" : "text-[rgba(248,248,248,0.4)]"}
                                    size={21}
                                    strokeWidth={2}
                                />
                            ) : (
                                <>
                                    <span className="absolute left-[27px] flex w-[22px] items-center justify-center">
                                        <Icon
                                            className={active ? "text-[#F8F8F8]" : "text-[rgba(248,248,248,0.4)]"}
                                            size={21}
                                            strokeWidth={2}
                                        />
                                    </span>
                                    <span
                                        className={[
                                            "absolute left-[64px] text-[14px] leading-[16px] tracking-[0.05em]",
                                            active ? "text-white" : "text-[rgba(248,248,248,0.4)]",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </span>
                                    {item.chevron && (
                                        <ChevronRight
                                            className="absolute right-[14px] text-[rgba(248,248,248,0.4)]"
                                            size={17}
                                            strokeWidth={2}
                                        />
                                    )}
                                </>
                            )}
                        </button>
                    );
                })}
            </nav>

            <div className="flex-1 bg-[#242423]" />
        </aside>
    );
}
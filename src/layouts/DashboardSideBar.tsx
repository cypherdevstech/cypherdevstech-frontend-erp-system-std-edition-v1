import {
    LayoutGrid,
    CircleUserRound,
    GitBranch,
    FileText,
    Workflow,
    AlignLeft,
    Clock,
    Settings,
    ChevronDown,
    type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type SubItem = {
    label: string;
    dividerBefore?: boolean;
};

type Item = {
    label: string;
    icon: LucideIcon;
    children?: SubItem[];
};

const items: Item[] = [
    { label: "Dashboard", icon: LayoutGrid },
    {
        label: "Users",
        icon: CircleUserRound,
        children: [
            { label: "Administrators" },
            { label: "Branch Manager" },
            { label: "Inventory Admin" },
            { label: "Staffs" },
            { label: "No Roles", dividerBefore: true },
        ],
    },
    { label: "Branches", icon: GitBranch },
    { label: "Inventory", icon: FileText },
    { label: "Assembly", icon: Workflow },
    { label: "General Transaction", icon: AlignLeft },
    { label: "Daily Time Record", icon: Clock },
    { label: "System Settings", icon: Settings },
];

export default function DashboardSideBar({
    activeItem = "System Settings",
    activeSubItem,
    logoSrc,
    onSelect,
    onSelectSub,
    collapsed = false,
}: {
    activeItem?: string;
    activeSubItem?: string;
    logoSrc?: string;
    onSelect?: (label: string) => void;
    onSelectSub?: (parentLabel: string, subLabel: string) => void;
    collapsed?: boolean;
}) {
    const [expandedItem, setExpandedItem] = useState<string | null>(
        activeItem === "Users" ? "Users" : null
    );

    const renderSubmenuItems = (item: Item) =>
        item.children!.map((sub) => {
            const subActive = sub.label === activeSubItem;
            return (
                <button
                    key={sub.label}
                    type="button"
                    onClick={() => onSelectSub?.(item.label, sub.label)}
                    className={[
                        "relative flex h-[38px] w-full shrink-0 cursor-pointer items-center pl-[22px] text-left text-[13px] tracking-[0.05em] transition-colors hover:text-white",
                        sub.dividerBefore
                            ? "mt-2 border-t border-dashed border-[#6366F1]/40 pt-2"
                            : "",
                        subActive ? "font-medium text-white" : "text-[rgba(248,248,248,0.55)]",
                    ].join(" ")}
                >
                    {sub.label}
                </button>
            );
        });

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
                    const hasChildren = !!item.children?.length;
                    const isExpanded = expandedItem === item.label;

                    return (
                        <div key={item.label} className="relative flex flex-col">
                            <div
                                className={[
                                    "relative flex h-[52px] w-full shrink-0 items-center transition-colors",
                                    active
                                        ? "bg-[#F26522]"
                                        : "bg-[#242423] hover:bg-[rgba(255,255,255,0.06)]",
                                ].join(" ")}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (collapsed && hasChildren) {
                                            setExpandedItem(isExpanded ? null : item.label);
                                        }
                                        onSelect?.(item.label);
                                    }}
                                    aria-current={active ? "page" : undefined}
                                    title={collapsed ? item.label : undefined}
                                    className={[
                                        "flex h-full flex-1 cursor-pointer items-center",
                                        collapsed ? "justify-center" : "text-left",
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
                                        </>
                                    )}
                                </button>

                                {hasChildren && !collapsed && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setExpandedItem(isExpanded ? null : item.label)
                                        }
                                        aria-expanded={isExpanded}
                                        aria-label={`Toggle ${item.label} submenu`}
                                        className="flex h-full w-[46px] shrink-0 cursor-pointer items-center justify-center"
                                    >
                                        <ChevronDown
                                            className={[
                                                "transition-transform",
                                                active ? "text-white" : "text-[rgba(248,248,248,0.4)]",
                                                isExpanded ? "rotate-180" : "rotate-0",
                                            ].join(" ")}
                                            size={17}
                                            strokeWidth={2}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Inline submenu — expanded sidebar */}
                            {hasChildren && isExpanded && !collapsed && (
                                <div className="flex flex-col bg-[#3A332D] py-2 pl-[42px]">
                                    {renderSubmenuItems(item)}
                                </div>
                            )}

                            {/* Flyout submenu — collapsed sidebar */}
                            {hasChildren && isExpanded && collapsed && (
                                <div className="absolute left-full top-0 z-50 flex w-[190px] flex-col shadow-lg">
                                    <div className="flex h-[52px] w-full items-center bg-[#F26522] pl-[22px] text-[14px] font-medium tracking-[0.05em] text-white">
                                        {item.label}
                                    </div>
                                    <div className="flex flex-col bg-[#3A332D] py-2">
                                        {renderSubmenuItems(item)}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="flex-1 bg-[#242423]" />
        </aside>
    );
}
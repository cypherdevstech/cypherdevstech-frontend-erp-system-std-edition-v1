import { Bell, ArrowRight, User, LogOut } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type Notification = {
    id: string;
    message: string;
    time: string;
};

const defaultNotifications: Notification[] = [
    {
        id: "1",
        message: "You have appointed John Doe as the Inventory manager",
        time: "3:20 am",
    },
];

export default function DashboardTopBar({
    title = "System Administrator",
    avatarSrc,
    onMenuClick,
    onBellClick,
    onAvatarClick,
    onViewAllNotifications,
    onProfileClick,
    onLogoutConfirm,
    hasNotification = true,
    collapsed = false,
    notifications = defaultNotifications,
    style,
}: {
    title?: string;
    avatarSrc?: string;
    onMenuClick?: () => void;
    onBellClick?: () => void;
    onAvatarClick?: () => void;
    onViewAllNotifications?: () => void;
    onProfileClick?: () => void;
    onLogoutConfirm?: () => void;
    hasNotification?: boolean;
    collapsed?: boolean;
    notifications?: Notification[];
    style?: CSSProperties;
}) {
    const [notifOpen, setNotifOpen] = useState(false);
    const [avatarOpen, setAvatarOpen] = useState(false);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const notifRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
                setNotifOpen(false);
            }
            if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
                setAvatarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            className="relative z-50 flex h-[60px] w-full items-center bg-white font-['Roboto',sans-serif]"
            style={{
                borderBottom: "0.5px solid #000000",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                ...style,
            }}
        >
            {/* Inner navbar */}
            <div className="flex h-[42px] w-full items-center justify-between px-[40px]">
                {/* Left: menu toggle + title */}
                <div className="flex items-center gap-[14px]">
                    {collapsed ? (
                        <button
                            type="button"
                            onClick={onMenuClick}
                            aria-label="Expand menu"
                            className="flex h-[19px] w-[38px] shrink-0 cursor-pointer items-center justify-start"
                        >
                            <ArrowRight size={20} strokeWidth={2} className="text-black" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={onMenuClick}
                            aria-label="Collapse menu"
                            className="relative flex h-[19px] w-[38px] shrink-0 cursor-pointer items-center"
                        >
                            <span className="absolute left-[11.6px] top-[19px] h-0 w-[25.9px] border-t-[2px] border-black" />
                            <span className="absolute left-[10.9px] top-0 h-0 w-[27.1px] border-t-[2px] border-black" />
                            <span className="absolute left-0 top-[9.4px] h-0 w-[38px] border-t-[2px] border-black" />
                        </button>
                    )}

                    {/* Page title */}
                    <h1
                        className="m-0 flex items-center text-[22px] font-medium leading-[26px] tracking-[0.05em] text-black"
                        style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
                    >
                        {title}
                    </h1>
                </div>

                {/* Right: bell + avatar */}
                <div className="flex h-[42px] items-center gap-[20px]">
                    {/* Notification bell */}
                    <div ref={notifRef} className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setNotifOpen((o) => !o);
                                setAvatarOpen(false);
                                onBellClick?.();
                            }}
                            aria-label="Notifications"
                            aria-expanded={notifOpen}
                            className="relative flex h-[22px] w-[22px] cursor-pointer items-center justify-center text-black"
                        >
                            <Bell size={22} strokeWidth={2} className="text-black" />
                            {hasNotification && (
                                <span className="absolute right-0 top-0 h-[6px] w-[6px] rounded-full bg-[#6366F1] ring-2 ring-white" />
                            )}
                        </button>

                        {notifOpen && (
                            <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[260px] rounded-md bg-white p-4 shadow-lg ring-1 ring-black/10">
                                {notifications.length === 0 ? (
                                    <p className="text-[13px] text-[#6B6B6B]">No notifications yet.</p>
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        {notifications.map((n) => (
                                            <div key={n.id} className="flex gap-2">
                                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(128,128,128,0.1)]">
                                                    <User size={14} className="text-[#6B6B6B]" />
                                                </span>
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[13px] leading-[17px] text-black">
                                                        {n.message}
                                                    </p>
                                                    <span className="text-[11px] text-[#9A9A9A]">
                                                        {n.time}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={() => {
                                        onViewAllNotifications?.();
                                        setNotifOpen(false);
                                    }}
                                    className="mt-3 flex cursor-pointer items-center gap-1 text-[13px] font-medium text-[#4C6FFF] hover:text-[#F26522]"
                                >
                                    See all notifications
                                    <ArrowRight size={14} strokeWidth={2} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Profile avatar */}
                    <div ref={avatarRef} className="relative">
                        <button
                            type="button"
                            onClick={() => {
                                setAvatarOpen((o) => !o);
                                setNotifOpen(false);
                                onAvatarClick?.();
                            }}
                            aria-label="Profile"
                            aria-expanded={avatarOpen}
                            className="flex h-[40px] w-[40px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[rgba(128,128,128,0.1)]"
                        >
                            {avatarSrc ? (
                                <img
                                    src={avatarSrc}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="#000000"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="8" r="4.2" />
                                    <path d="M4 20c0-4 3.6-6.8 8-6.8s8 2.8 8 6.8c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1z" />
                                </svg>
                            )}
                        </button>

                        {avatarOpen && (
                            <div className="absolute right-0 top-[calc(100%+10px)] z-50 flex w-[150px] flex-col gap-1 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/10">
                                <button
                                    type="button"
                                    onClick={() => {
                                        onProfileClick?.();
                                        setAvatarOpen(false);
                                    }}
                                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-2 text-left text-[13px] text-[#4C6FFF] hover:bg-[rgba(76,111,255,0.08)]"
                                >
                                    <User size={15} strokeWidth={2} />
                                    Profile
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setAvatarOpen(false);
                                        setLogoutModalOpen(true);
                                    }}
                                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-2 text-left text-[13px] text-black hover:bg-[rgba(0,0,0,0.05)]"
                                >
                                    <LogOut size={15} strokeWidth={2} />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Logout confirmation modal */}
            {logoutModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
                    <div className="mx-4 flex w-full max-w-[420px] flex-col items-center gap-3 rounded-lg border border-[#E2E2E2] bg-white px-8 py-8 text-center shadow-xl">
                        <h2 className="text-[26px] font-semibold leading-[32px] text-black">
                            Are You Sure
                            <br />
                            you want to logout?
                        </h2>
                        <p className="text-[14px] text-[#9A9A9A]">
                            If confirm, you will be redirected to the login page now
                        </p>

                        <div className="mt-4 flex w-full gap-4">
                            <button
                                type="button"
                                onClick={() => {
                                    setLogoutModalOpen(false);
                                    onLogoutConfirm?.();
                                }}
                                className="h-11 flex-1 cursor-pointer rounded-md bg-[#F26522] text-[14px] font-medium text-white transition-colors hover:bg-[#d9581c]"
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => setLogoutModalOpen(false)}
                                className="h-11 flex-1 cursor-pointer rounded-md bg-[#8A8A8A] text-[14px] font-medium text-white transition-colors hover:bg-[#767676]"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
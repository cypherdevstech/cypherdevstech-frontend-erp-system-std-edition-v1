import { Bell, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * Top navigation bar — white 60px bar with a thin black bottom border and soft
 * drop shadow. Left side: menu toggle (hamburger when sidebar open, arrow when
 * collapsed) + page title. Right side: notification bell (with a blue unread
 * dot) and a circular profile avatar.
 */
export default function DashboardTopBar({
  title = "System Administrator",
  avatarSrc,
  onMenuClick,
  onBellClick,
  onAvatarClick,
  hasNotification = true,
  collapsed = false,
  style,
}: {
  title?: string;
  avatarSrc?: string;
  onMenuClick?: () => void;
  onBellClick?: () => void;
  onAvatarClick?: () => void;
  hasNotification?: boolean;
  collapsed?: boolean;
  style?: CSSProperties;
}) {
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
          <button
            type="button"
            onClick={onBellClick}
            aria-label="Notifications"
            className="relative flex h-[22px] w-[22px] items-center justify-center text-black"
          >
            <Bell size={22} strokeWidth={2} className="text-black" />
            {hasNotification && (
              <span className="absolute right-0 top-0 h-[6px] w-[6px] rounded-full bg-[#6366F1] ring-2 ring-white" />
            )}
          </button>

          {/* Profile avatar (40x40, gray circle with silhouette) */}
          <button
            type="button"
            onClick={onAvatarClick}
            aria-label="Profile"
            className="flex h-[40px] w-[40px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[rgba(128,128,128,0.1)]"
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
        </div>
      </div>
    </header>
  );
}
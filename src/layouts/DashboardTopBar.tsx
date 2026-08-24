import { Menu, Bell } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * Top navigation bar — white 80px bar with a thin black bottom border and soft
 * drop shadow. Left side: hamburger menu icon + page title. Right side:
 * notification bell (with a blue unread dot) and a circular profile avatar.
 *
 * Styled to match the Figma spec (Roboto, 32px title, 0.05em tracking) while
 * remaining responsive — it stretches to full width instead of the fixed
 * 1645px design width.
 */
export default function DashboardTopBar({
  title = "System Administrator",
  avatarSrc,
  onMenuClick,
  onBellClick,
  onAvatarClick,
  hasNotification = true,
  style,
}: {
  title?: string;
  avatarSrc?: string;
  onMenuClick?: () => void;
  onBellClick?: () => void;
  onAvatarClick?: () => void;
  hasNotification?: boolean;
  style?: CSSProperties;
}) {
  return (
    <header
      className="relative z-50 flex h-[80px] w-full items-center bg-white font-['Roboto',sans-serif]"
      style={{
        borderBottom: "0.5px solid #000000",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        ...style,
      }}
    >
      {/* Inner navbar — 1551px in design, full width minus 60px gutters here */}
      <div className="flex h-[56px] w-full items-center justify-between px-[60px]">
        {/* Left: menu + title */}
        <div className="flex items-center gap-[19px]">
          {/* Hamburger menu (50x25) */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="relative flex h-[25px] w-[50px] shrink-0 items-center"
          >
            <span className="absolute left-[15.3px] top-[25px] h-0 w-[34.06px] border-t-[2px] border-black" />
            <span className="absolute left-[14.29px] top-0 h-0 w-[35.62px] border-t-[2px] border-black" />
            <span className="absolute left-0 top-[12.36px] h-0 w-[50px] border-t-[2px] border-black" />
          </button>

          {/* Page title */}
          <h1
            className="m-0 flex items-center text-[32px] font-medium leading-[38px] tracking-[0.05em] text-black"
            style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
          >
            {title}
          </h1>
        </div>

        {/* Right: bell + avatar */}
        <div className="flex h-[56px] items-center gap-[28px]">
          {/* Notification bell */}
          <button
            type="button"
            onClick={onBellClick}
            aria-label="Notifications"
            className="relative flex h-[30px] w-[30px] items-center justify-center text-black"
          >
            <Bell size={30} strokeWidth={2} className="text-black" />
            {hasNotification && (
              <span className="absolute right-0 top-0 h-[8px] w-[8px] rounded-full bg-[#6366F1] ring-2 ring-white" />
            )}
          </button>

          {/* Profile avatar (56x56, gray circle with silhouette) */}
          <button
            type="button"
            onClick={onAvatarClick}
            aria-label="Profile"
            className="flex h-[56px] w-[56px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[rgba(128,128,128,0.1)]"
          >
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <svg
                width="30"
                height="30"
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

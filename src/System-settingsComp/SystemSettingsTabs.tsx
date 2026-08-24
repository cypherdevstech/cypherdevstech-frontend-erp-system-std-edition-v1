export type SettingsTabKey =
    | "system-information"
    | "email-protocol"
    | "control-alert"
    | "attendance-alert";

const TABS: { key: SettingsTabKey; label: string }[] = [
    { key: "system-information", label: "System Information" },
    { key: "email-protocol", label: "Email Protocol" },
    { key: "control-alert", label: "Control Alert" },
    { key: "attendance-alert", label: "Attendance Alert" },
];

export default function SystemSettingsTabs({
    activeTab,
    onTabChange,
}: {
    activeTab: SettingsTabKey;
    onTabChange: (tab: SettingsTabKey) => void;
}) {
    return (
        <div className="mb-6 flex items-center gap-8 border-b border-[#EDEDED] pb-3">
            {TABS.map((tab) => {
                const active = tab.key === activeTab;
                return (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => onTabChange(tab.key)}
                        className={[
                            "text-[14px] tracking-[0.02em] transition-colors",
                            active
                                ? "font-medium text-[#F26522]"
                                : "text-[#4C6FFF] hover:text-[#F26522]",
                        ].join(" ")}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
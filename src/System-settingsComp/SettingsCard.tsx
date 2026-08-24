import { useState } from "react";
import SystemInformationForm from "./SystemInformationForm";

type SettingsTabKey = "system-information" | "general" | "notifications" | "security";

function SystemSettingsTabs({
    activeTab,
    onTabChange,
}: {
    activeTab: SettingsTabKey;
    onTabChange: (tab: SettingsTabKey) => void;
}) {
    const tabs: { key: SettingsTabKey; label: string }[] = [
        { key: "system-information", label: "System Information" },
        { key: "general", label: "General" },
        { key: "notifications", label: "Notifications" },
        { key: "security", label: "Security" },
    ];

    return (
        <div className="mb-6 flex gap-6 border-b border-[#E5E5E5]">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    type="button"
                    onClick={() => onTabChange(tab.key)}
                    className={`pb-3 text-[14px] ${
                        activeTab === tab.key
                            ? "border-b-2 border-[#1D4ED8] font-medium text-[#1D4ED8]"
                            : "text-[#6B6B6B]"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export default function SettingsCard() {
    const [activeTab, setActiveTab] = useState<SettingsTabKey>("system-information");

    return (
        <div className="w-full rounded-md bg-white p-6 shadow-sm">
            <SystemSettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === "system-information" && <SystemInformationForm />}

            {activeTab !== "system-information" && (
                <p className="text-[14px] text-[#6B6B6B]">Not implemented yet.</p>
            )}
        </div>
    );
}
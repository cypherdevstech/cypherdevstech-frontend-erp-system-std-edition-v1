import { useState } from "react";
import SystemSettingsTabs, { type SettingsTabKey } from "./SystemSettingsTabs";
import SystemInformationForm from "./SystemInformationForm";
import EmailProtocolForm from "./EmailProtocolForm";
import ControlAlertForm from "./ControlAlertForm";

export default function SettingsCard() {
    const [activeTab, setActiveTab] = useState<SettingsTabKey>("system-information");

    return (
        <div className="w-full rounded-md bg-white p-6 shadow-sm">
            <SystemSettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === "system-information" && <SystemInformationForm />}
            {activeTab === "email-protocol" && <EmailProtocolForm />}
            {activeTab === "control-alert" && <ControlAlertForm />}

            {activeTab !== "system-information" &&
                activeTab !== "email-protocol" &&
                activeTab !== "control-alert" && (
                    <p className="text-[14px] text-[#6B6B6B]">Not implemented yet.</p>
                )}
        </div>
    );
}
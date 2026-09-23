import { useState } from "react";
import SystemSettingsTabs, { type SettingsTabKey } from "./SystemSettingsTabs";
import SystemInformationForm from "./SystemInformationForm";
import EmailProtocolForm from "./EmailProtocolForm";
import ControlAlertForm from "./ControlAlertForm";
import AttendanceAlertForm from "./AttendanceAlertForm";

export default function SettingsCard() {
    const [activeTab, setActiveTab] = useState<SettingsTabKey>("system-information");

    return (
        <div className="w-full rounded-md bg-white p-6 shadow-sm">
            <SystemSettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === "system-information" && <SystemInformationForm />}
            {activeTab === "email-protocol" && <EmailProtocolForm />}
            {activeTab === "control-alert" && <ControlAlertForm />}
            {activeTab === "attendance-alert" && <AttendanceAlertForm />}
        </div>
    );
}
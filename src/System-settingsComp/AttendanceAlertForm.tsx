import { Clock } from "lucide-react";
import { useState } from "react";

type AttendanceAlertValues = {
    timeInMorning: string;
    timeInAfternoon: string;
};

export default function AttendanceAlertForm() {
    const [values, setValues] = useState<AttendanceAlertValues>({
        timeInMorning: "09:15",
        timeInAfternoon: "13:15",
    });

    const handleChange =
        (field: keyof AttendanceAlertValues) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSave = () => {
        // TODO: wire up save request
        console.log("Saving attendance alert details", values);
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Time In Morning</span>
                    <div className="relative">
                        <input
                            type="time"
                            value={values.timeInMorning}
                            onChange={handleChange("timeInMorning")}
                            className="h-10 w-full rounded-md border border-[#E2E2E2] px-3 pr-9 text-[14px] text-black outline-none focus:border-[#F26522] [&::-webkit-calendar-picker-indicator]:opacity-0"
                        />
                        <Clock
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
                            size={16}
                            strokeWidth={2}
                        />
                    </div>
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Time in Afternoon</span>
                    <div className="relative">
                        <input
                            type="time"
                            value={values.timeInAfternoon}
                            onChange={handleChange("timeInAfternoon")}
                            className="h-10 w-full rounded-md border border-[#E2E2E2] px-3 pr-9 text-[14px] text-black outline-none focus:border-[#F26522] [&::-webkit-calendar-picker-indicator]:opacity-0"
                        />
                        <Clock
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
                            size={16}
                            strokeWidth={2}
                        />
                    </div>
                </label>
            </div>

            <div className="flex justify-start">
                <button
                    type="button"
                    onClick={handleSave}
                    className="h-10 rounded-md bg-[#242423] px-5 text-[14px] font-medium text-white transition-colors hover:bg-black"
                >
                    Save Details
                </button>
            </div>
        </div>
    );
}
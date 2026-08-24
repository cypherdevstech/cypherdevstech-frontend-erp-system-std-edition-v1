import { useState } from "react";

type SystemInfoValues = {
    systemName: string;
    systemContactNumber: string;
    systemEmail: string;
};

export default function SystemInformationForm() {
    const [values, setValues] = useState<SystemInfoValues>({
        systemName: "Fayeed Electronics",
        systemContactNumber: "09123456789",
        systemEmail: "example@123@gmail.com",
    });

    const handleChange =
        (field: keyof SystemInfoValues) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSave = () => {
        // TODO: wire up save request
        console.log("Saving system details", values);
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">System Name</span>
                    <input
                        type="text"
                        value={values.systemName}
                        onChange={handleChange("systemName")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">System Contact Number</span>
                    <input
                        type="tel"
                        value={values.systemContactNumber}
                        onChange={handleChange("systemContactNumber")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
                </label>
            </div>

            <label className="flex max-w-[calc(50%-10px)] flex-col gap-1.5">
                <span className="text-[13px] text-[#6B6B6B]">System Email</span>
                <input
                    type="email"
                    value={values.systemEmail}
                    onChange={handleChange("systemEmail")}
                    className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                />
            </label>

            <div className="flex justify-end">
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
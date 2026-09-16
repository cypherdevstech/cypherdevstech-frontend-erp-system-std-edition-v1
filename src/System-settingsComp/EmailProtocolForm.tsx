import { useState } from "react";

type EmailProtocolValues = {
    email: string;
    password: string;
    provider: string;
    port: string;
};

export default function EmailProtocolForm() {
    const [values, setValues] = useState<EmailProtocolValues>({
        email: "example#123@gmai.com",
        password: "iloveyou123",
        provider: "Fayeed Electronics",
        port: "578",
    });

    const handleChange =
        (field: keyof EmailProtocolValues) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSave = () => {
        // TODO: wire up save request
        console.log("Saving email protocol details", values);
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Email</span>
                    <input
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Password</span>
                    <input
                        type="password"
                        value={values.password}
                        onChange={handleChange("password")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
                </label>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Provider</span>
                    <input
                        type="text"
                        value={values.provider}
                        onChange={handleChange("provider")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Port</span>
                    <input
                        type="text"
                        value={values.port}
                        onChange={handleChange("port")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
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
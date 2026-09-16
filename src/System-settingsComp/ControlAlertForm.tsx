import { useState } from "react";

type ControlAlertValues = {
    systemLink: string;
    productQuantityLimit: string;
};

export default function ControlAlertForm() {
    const [values, setValues] = useState<ControlAlertValues>({
        systemLink: "http://fayeed.com",
        productQuantityLimit: "10",
    });

    const handleChange =
        (field: keyof ControlAlertValues) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSave = () => {
        // TODO: wire up save request
        console.log("Saving control alert details", values);
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">System Link</span>
                    <input
                        type="text"
                        value={values.systemLink}
                        onChange={handleChange("systemLink")}
                        className="h-10 rounded-md border border-[#E2E2E2] px-3 text-[14px] text-black outline-none focus:border-[#F26522]"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] text-[#6B6B6B]">Product Quantity Limit</span>
                    <input
                        type="number"
                        value={values.productQuantityLimit}
                        onChange={handleChange("productQuantityLimit")}
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
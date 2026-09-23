export default function DashboardGreeting({
    name = "welcome back",
    date = new Date(),
}: {
    name?: string;
    date?: Date;
}) {
    const formatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "2-digit",
        year: "numeric",
    });
    const time = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="mb-4 flex flex-col gap-0.5">
            <p className="text-[15px] font-medium text-[#F26522]">
                Hi, {name}!
            </p>
            <p className="text-[13px] text-[#6B6B6B]">
                {formatted}, {time}
            </p>
        </div>
    );
}
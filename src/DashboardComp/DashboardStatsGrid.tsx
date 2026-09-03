import {
    Layers,
    ClipboardList,
    GitBranch,
    User,
    UserX,
    CircleCheck,
    Boxes,
    CircleAlert,
} from "lucide-react";
import DashboardStatCard from "./DashboardStatCard";

type Stat = {
    label: string;
    value: string | number;
    icon: typeof Layers;
};

const stats: Stat[] = [
    { label: "Sales", value: "\u20B1 55478.00", icon: Layers },
    { label: "Assembly", value: 0, icon: ClipboardList },
    { label: "Branch", value: 2, icon: GitBranch },
    { label: "Personnel", value: 0, icon: User },
    { label: "Assets", value: 0, icon: UserX },
    { label: "Retrieval", value: 0, icon: CircleCheck },
    { label: "Inventory", value: 0, icon: Boxes },
    { label: "Inventory Alert", value: 0, icon: CircleAlert },
];

export default function DashboardStatsGrid() {
    return (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s) => (
                <DashboardStatCard key={s.label} icon={s.icon} label={s.label} value={s.value} />
            ))}
        </div>
    );
}
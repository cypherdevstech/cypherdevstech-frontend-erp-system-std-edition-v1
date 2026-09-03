import DashboardGreeting from "../DashboardComp/DashboardGreeting";
import DashboardStatsGrid from "../DashboardComp/DashboardStatsGrid";
import LatestTransactionsCard from "../DashboardComp/LatestTransactionsCard";

export default function DashboardPage() {
    return (
        <div className="w-full">
            <DashboardGreeting />
            <DashboardStatsGrid />
            <LatestTransactionsCard />
        </div>
    );
}
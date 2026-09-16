import { useState } from "react";
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import DashboardSideBar from './DashboardSideBar'
import DashboardTopBar from './DashboardTopBar'

const routeMap: Record<string, string> = {
    Dashboard: "/",
    Branches: "/branches",
    Inventory: "/inventory",
    "System Settings": "/system-settings",
};

const subRouteMap: Record<string, string> = {
    // Users > child routes — add these once those pages/routes exist
    // Administrators: "/users/administrators",
    // "Branch Manager": "/users/branch-manager",
    // "Inventory Admin": "/users/inventory-admin",
    // Staffs: "/users/staffs",
    // "No Roles": "/users/no-roles",
};

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [manualActiveItem, setManualActiveItem] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const routeActiveItem =
        Object.entries(routeMap).find(([, path]) => path === location.pathname)?.[0] ??
        "Dashboard";

    // Items without a route (like "Users") stay highlighted from a manual click
    // until a routed item is clicked, which takes back over via the URL.
    const activeItem = manualActiveItem ?? routeActiveItem;

    const handleSelect = (label: string) => {
        const path = routeMap[label];
        if (path) {
            setManualActiveItem(null);
            navigate(path);
        } else {
            setManualActiveItem(label);
        }
    };

    const handleSelectSub = (parentLabel: string, subLabel: string) => {
        const path = subRouteMap[subLabel];
        if (path) {
            setManualActiveItem(null);
            navigate(path);
        } else {
            console.warn(`No route defined yet for "${parentLabel} > ${subLabel}"`);
        }
    };

    return (
        <main className="w-full h-screen mx-auto flex overflow-hidden">
            <DashboardSideBar
                collapsed={collapsed}
                activeItem={activeItem}
                onSelect={handleSelect}
                onSelectSub={handleSelectSub}
            />
            <section className="flex-1 bg-[#FAFAFA] flex flex-col min-h-0 overflow-hidden scrollbar-hide">
                <DashboardTopBar
                    collapsed={collapsed}
                    onMenuClick={() => setCollapsed((c) => !c)}
                />

                <section
                    id="dashboard-scroll-container"
                    className="mt-4 flex-1 overflow-auto w-full mx-auto lg:px-6 pb-10 bg-[#FAFAFA]"
                >
                    <Outlet />
                </section>
            </section>
        </main>
    )
}

export default MainLayout
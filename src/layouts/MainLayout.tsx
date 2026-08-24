import { useState } from "react";
import { Outlet } from 'react-router-dom'
import DashboardSideBar from './DashboardSideBar'
import DashboardTopBar from './DashboardTopBar'

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <main className="w-full h-screen mx-auto flex overflow-hidden">
            <DashboardSideBar collapsed={collapsed} />
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
import MainLayout from "../layouts/MainLayout";
import BranchesPage from "../page/branchespage";
import CreateBranchPage from "../page/createbranchpage";
import CreateInvtoryPage from "../page/createinvtorypage";
import InventoryPage from "../page/inventorypage";
import ListInventoryPage from "../page/listinventorypage";
import SystemstSetingsPage from "../page/systemsteetingspage";

export const routeConfig = [
    {
        element: <MainLayout />,
        // errorElement: <NotFound />,
        children: [
            //    inventory routes
            {
                path: 'inventory',
                children: [
                    { index: true, element: <InventoryPage /> },
                    { path: 'list', element: <ListInventoryPage /> },
                    { path: 'create', element: <CreateInvtoryPage /> }

                ],
            },
            // system settings
            {
                path: 'system-settings',
                children: [
                    { index: true, element: <SystemstSetingsPage /> }
                ]
            },
            // branches
            {
                path: 'branches',
                children: [
                    {
                        index: true, element: <BranchesPage />
                    },
                    {
                        path: 'create', element: <CreateBranchPage />
                    }
                ]
            }
        ],
    },
]
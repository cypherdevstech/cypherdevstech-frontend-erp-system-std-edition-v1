import MainLayout from "../layouts/MainLayout";
import BranchesPage from "../page/branchespage";
import CreateBranchPage from "../page/createbranchpage";
import CreateInvtoryPage from "../page/createinvtorypage";
import InventoryPage from "../page/inventorypage";
import ListInventoryPage from "../page/listinventorypage";
import SystemstSetingsPage from "../page/systemsteetingspage";
import UserPage from "../page/userpage";
import BranchManagerPage from "../page/branchmanagerpage";
import InventoryAdminPage from "../page/inventoryadminpage";
import StaffPage from "../page/staffpage"
import NoRolePage from "../page/norolepage"
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
            {
                path: 'branches',
                children: [
                    {
                        index: true, element: <BranchesPage />
                    },
                    {
                        path: 'create', element: <CreateBranchPage />
                    },

                ]
            },
            {
                path: 'user-page',
                children: [
                    {
                        index: true, element: <UserPage />
                    }
                ]
            },

            {
                path: 'manager', element: <BranchManagerPage />
            },
            {
                path: 'inventories', element: <InventoryAdminPage/>
            },
            {
                path: "staff", element: <StaffPage/>
            },
            {
                path: "norole", element: <NoRolePage/>
            }

        ],
    },
]
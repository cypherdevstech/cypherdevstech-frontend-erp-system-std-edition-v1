// [data.ts]
import {
  LayoutGrid,
  Users,
  GitBranch,
  Package,
  Wrench,
  Repeat,
  Clock,
  Settings,
} from "lucide-react";
import type {
  AdminRow,
  NavItem,
  SortKey,
  BranchManagerRow,
  BranchManagerSortKey,
  InventoryAdminRow,
  InventoryAdminSortKey,
  StaffRow,
  StaffSortKey,
} from "./types";

export const ADMIN_ROWS: AdminRow[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "789 Oak St, Barangay L03, Z.C. 7000",
    email: "john_doe@gmail.com",
    contact: "+(63) 955 789 3456",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    address: "321 Maple St, Barangay L04, Z.C. 7000",
    email: "jane_doe@gmail.com",
    contact: "+(63) 906 784 5454",
  },
];

export const USER_SUBNAV = [
  "Administrators",
  "Branch Manager",
  "Inventory Admin",
  "Staffs",
  "No Roles",
];

export const NAV_ITEMS: NavItem[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { key: "users", label: "Users", icon: Users, children: USER_SUBNAV },
  { key: "branches", label: "Branches", icon: GitBranch },
  { key: "inventory", label: "Inventory", icon: Package },
  { key: "assembly", label: "Assembly", icon: Wrench },
  { key: "general", label: "General Transaction", icon: Repeat },
  { key: "dtr", label: "Daily Time Record", icon: Clock },
  { key: "settings", label: "System Settings", icon: Settings },
];

export const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "address", label: "Address" },
  { key: "email", label: "Email" },
  { key: "contact", label: "Contact Number" },
];

export const BRANCH_MANAGER_ROWS: BranchManagerRow[] = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Tempest",
    address: "123 Main St, Barangay L01, Z.C. 7000",
    email: "tempest123@gmail.com",
    contact: "+(63) 955 789 5275",
    branch: "Fayeed Electronics Main",
  },
  {
    id: 2,
    firstName: "Garry",
    lastName: "Washinton",
    address: "456 Elm St, Barangay L02, Z.C. 7000",
    email: "garry.washi123@gmail.com",
    contact: "+(63) 955 789 4556",
    branch: "Fayeed Electronics 2",
  },
];

export const BRANCH_MANAGER_COLUMNS: { key: BranchManagerSortKey; label: string }[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "address", label: "Address" },
  { key: "email", label: "Email" },
  { key: "contact", label: "Contact Number" },
  { key: "branch", label: "Branch" },
];

export const INVENTORY_ADMIN_ROWS: InventoryAdminRow[] = [
  {
    id: 1,
    firstName: "Michael",
    lastName: "Lopez",
    address: "654 Pine St, Tumaga, Z.C. 7000",
    email: "michael.lopez@gmail.com",
    contact: "+(63) 956 789 0123",
    branch: "Fayeed Electronics Main",
  },
  {
    id: 2,
    firstName: "Christopher",
    lastName: "Hernandez",
    address: "234 Birch St, Barangay L07, Z.C. 7000",
    email: "christopher.hernandez@gmail.com",
    contact: "+(63) 978 901 2345",
    branch: "Fayeed Electronics 2",
  },
];

export const INVENTORY_ADMIN_COLUMNS: { key: InventoryAdminSortKey; label: string }[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "address", label: "Address" },
  { key: "email", label: "Email" },
  { key: "contact", label: "Contact Number" },
  { key: "branch", label: "Branch" },
];

export const STAFF_ROWS: StaffRow[] = [
  {
    id: 1,
    firstName: "Ethan",
    lastName: "Wilson",
    address: "654 Pine St, Barangay Baliwasan, Z.C. 7000",
    email: "ethan.wilson@example.com",
    contact: "+(63) 922 345 6789",
    branch: "Fayeed Electronics Main",
  },
  {
    id: 2,
    firstName: "Noah",
    lastName: "Hernandez",
    address: "890 Pineapple St, Barangay San Roque, Z.C. 7000",
    email: "noah.hernandez@example.com",
    contact: "+(63) 988 012 3456",
    branch: "Fayeed Electronics Main",
  },
  {
    id: 3,
    firstName: "Sophia",
    lastName: "Martinez",
    address: "321 Maple St, Barangay San Jose Cawa-cawa, Z.C. 7000",
    email: "sophia.anderson@example.com",
    contact: "+(63) 933 567 8901",
    branch: "Fayeed Electronics Main",
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Cruz",
    address: "456 Elm St, Barangay Sinunuc, Z.C. 7000",
    email: "james.cruz@example.com",
    contact: "+(63) 911 234 5678",
    branch: "Fayeed Electronics 2",
  },
  {
    id: 5,
    firstName: "Ava",
    lastName: "Torres",
    address: "432 Mango St, Barangay Sta. Maria, Z.C. 7000",
    email: "ava.torres@example.com",
    contact: "+(63) 977 901 2345",
    branch: "Fayeed Electronics Main",
  },
  {
    id: 6,
    firstName: "Samuel",
    lastName: "Hayes",
    address: "123 Main St, Barangay Putik, Z.C. 7000",
    email: "christopher.hayes@example.com",
    contact: "+(63) 966 890 1234",
    branch: "Fayeed Electronics 2",
  },
  {
    id: 7,
    firstName: "Matthew",
    lastName: "Bennett",
    address: "789 Oak St, Barangay Canelar, Z.C. 7000",
    email: "matthew.powell@example.com",
    contact: "+(63) 922 345 6789",
    branch: "Fayeed Electronics 2",
  },
];

export const STAFF_COLUMNS: { key: StaffSortKey; label: string }[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "address", label: "Address" },
  { key: "email", label: "Email" },
  { key: "contact", label: "Contact Number" },
  { key: "branch", label: "Branch" },
];
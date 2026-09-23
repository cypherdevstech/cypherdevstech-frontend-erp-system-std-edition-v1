// [types.ts]
import type { ComponentType } from "react";

export interface AdminRow {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  contact: string;
}

export interface NavItem {
  key: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  children?: string[];
}

export type SortKey = keyof Pick<
  AdminRow,
  "firstName" | "lastName" | "address" | "email" | "contact"
>;

export interface SortState {
  key: SortKey | null;
  dir: "asc" | "desc";
}

export interface BranchManagerRow {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  contact: string;
  branch: string;
}

export type BranchManagerSortKey = keyof Pick<
  BranchManagerRow,
  "firstName" | "lastName" | "address" | "email" | "contact" | "branch"
>;

export interface BranchManagerSortState {
  key: BranchManagerSortKey | null;
  dir: "asc" | "desc";
}

export interface InventoryAdminRow {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  contact: string;
  branch: string;
}

export type InventoryAdminSortKey = keyof Pick<
  InventoryAdminRow,
  "firstName" | "lastName" | "address" | "email" | "contact" | "branch"
>;

export interface InventoryAdminSortState {
  key: InventoryAdminSortKey | null;
  dir: "asc" | "desc";
}

export interface StaffRow {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  contact: string;
  branch: string;
}

export type StaffSortKey = keyof Pick<
  StaffRow,
  "firstName" | "lastName" | "address" | "email" | "contact" | "branch"
>;

export interface StaffSortState {
  key: StaffSortKey | null;
  dir: "asc" | "desc";
}

export interface NoRoleRow {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  contact: string;
}

export type NoRoleSortKey = keyof Pick<
  NoRoleRow,
  "firstName" | "lastName" | "address" | "email" | "contact"
>;

export interface NoRoleSortState {
  key: NoRoleSortKey | null;
  dir: "asc" | "desc";
}
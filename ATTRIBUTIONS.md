import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ServiceMenu } from "./pages/ServiceMenu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AdminLayout } from "./pages/AdminLayout";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminAppointments } from "./pages/AdminAppointments";
import { AdminClients } from "./pages/AdminClients";
import { AdminInventory } from "./pages/AdminInventory";
import { AdminNotifications } from "./pages/AdminNotifications";
import { AdminPlaceholder } from "./pages/AdminPlaceholder";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: ServiceMenu },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "appointments", Component: AdminAppointments },
      { path: "clients", Component: AdminClients },
      { path: "inventory", Component: AdminInventory },
      { path: "notifications", Component: AdminNotifications },
      { 
        path: "trends", 
        Component: () => React.createElement(AdminPlaceholder, { title: "Market Trends", description: "Analyze industry data and clinic performance metrics." })
      },
      { 
        path: "staff", 
        Component: () => React.createElement(AdminPlaceholder, { title: "Staff Workspace", description: "Manage employee schedules, roles, and payroll." })
      },
      { 
        path: "settings", 
        Component: () => React.createElement(AdminPlaceholder, { title: "Admin Command", description: "Configure clinic settings and administrative permissions." })
      },
    ]
  }
]);

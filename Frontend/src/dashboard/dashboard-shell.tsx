import React from "react";
import Sidebar from "./menu/sidebar"
import Taskboard from './taskboard/taskboard'
import './dashboard-shell.scss'

function DashboardShell() {
    return (
        <div className="dashboard_container">
            <div><Sidebar></Sidebar></div>
            <div><Taskboard></Taskboard></div>
        </div>
    )
}

export default DashboardShell
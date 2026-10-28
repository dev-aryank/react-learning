import React from 'react'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a dashboard</p>

      <Outlet />

      <p>Footer from Dashboard</p>
    </div>
  )
}

export default Dashboard

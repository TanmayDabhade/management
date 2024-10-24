"use client"

import DashboardOverview from '../app/components/DashboardOverview'
import TenantList from '../app/components/TenantList'
import MaintenanceRequests from '../app/components/MaintenanceRequests'
import FinancialSummary from '../app/components/FinancialSummary'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <TenantList />
        <MaintenanceRequests />
      </div>
      <div className='text-3xl font-bold mb-8 py-8'>
      <FinancialSummary />
      </div>
    </div>
  )
}
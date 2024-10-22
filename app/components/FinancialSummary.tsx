"use client"

import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

// Updated data with income and expenses
const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 2000, expenses: 9800 },
  { month: "Apr", income: 2780, expenses: 3908 },
  { month: "May", income: 1890, expenses: 4800 },
  { month: "Jun", income: 2390, expenses: 3800 },
]

// Update chartConfig if needed
const chartConfig = {
  income: {
    label: "Income",
    color: "#2563eb",
  },
  expenses: {
    label: "Expenses",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function FinancialSummary() {
  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill={chartConfig.income.color} radius={4} />
            <Bar dataKey="expenses" fill={chartConfig.expenses.color} radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>

  )
}

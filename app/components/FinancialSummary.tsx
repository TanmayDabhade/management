"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

// Data: Rent Income and Expenses per Property
const propertiesData = [
  { property: "Apt 101", rentIncome: 1800, expenses: 350 },
  { property: "House 202", rentIncome: 2500, expenses: 500 },
  { property: "Condo 303", rentIncome: 2200, expenses: 450 },
  { property: "Apt 104", rentIncome: 1900, expenses: 300 },
  { property: "House 305", rentIncome: 2600, expenses: 600 },
  { property: "Condo 306", rentIncome: 2000, expenses: 400 },
  { property: "Apt 204", rentIncome: 1850, expenses: 370 },
  { property: "House 102", rentIncome: 2450, expenses: 520 },
  { property: "Condo 107", rentIncome: 2150, expenses: 390 },
  { property: "Apt 303", rentIncome: 1950, expenses: 320 },
  { property: "House 404", rentIncome: 2700, expenses: 610 },
  { property: "Condo 504", rentIncome: 2250, expenses: 470 },
]

// Aggregated Data: Total Monthly Rent Income vs. Expenses
const aggregateData = [
  { month: "January", totalIncome: 24400, totalExpenses: 4780 },
  { month: "February", totalIncome: 24600, totalExpenses: 4600 },
  { month: "March", totalIncome: 25000, totalExpenses: 4950 },
  { month: "April", totalIncome: 25200, totalExpenses: 4700 },
  { month: "May", totalIncome: 25500, totalExpenses: 4800 },
  { month: "June", totalIncome: 25700, totalExpenses: 4900 },
]

// Chart Configurations
const propertyChartConfig = {
  rentIncome: {
    label: "Rent Income",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const aggregateChartConfig = {
  totalIncome: {
    label: "Total Income",
    color: "hsl(var(--chart-1))",
  },
  totalExpenses: {
    label: "Total Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function RentExpenseSummary() {
  return (
    <div className="flex flex-col gap-8">
      {/* Chart 1: Property-level Rent vs. Expenses */}
      <Card>
        <CardHeader>
          <CardTitle>Property-Level Rent vs. Expenses</CardTitle>
          <CardDescription>Comparing Rent Income and Expenses for Each Property</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ChartContainer config={propertyChartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={propertiesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="property" tickLine={false} tickMargin={10} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="rentIncome"
                  fill="var(--chart-1)"
                  radius={4}
                  name="Rent Income"
                />
                <Bar
                  dataKey="expenses"
                  fill="var(--chart-2)"
                  radius={4}
                  name="Expenses"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Chart 2: Aggregated Monthly Rent vs. Expenses */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Rent vs. Expenses Summary</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ChartContainer config={aggregateChartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aggregateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="totalIncome"
                  fill="var(--chart-1)"
                  radius={4}
                  name="Total Income"
                />
                <Bar
                  dataKey="totalExpenses"
                  fill="var(--chart-2)"
                  radius={4}
                  name="Total Expenses"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Monthly rent income vs. expenses summary for the last 6 months.
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

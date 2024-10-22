import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const tenants = [
  { id: 1, name: "John Doe", property: "Apt 101", status: "Paid", dueDate: "2024-03-01" },
  { id: 2, name: "Jane Smith", property: "House 202", status: "Late", dueDate: "2024-02-28" },
  { id: 3, name: "Bob Johnson", property: "Condo 303", status: "Pending", dueDate: "2024-03-05" },
]

export default function TenantList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tenants</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell>{tenant.name}</TableCell>
                <TableCell>{tenant.property}</TableCell>
                <TableCell>
                  {/* <Badge variant={tenant.status === "Paid" ? "success" : tenant.status === "Late" ? "destructive" : "default"}>
                    {tenant.status}
                  </Badge> */}
                </TableCell>
                <TableCell>{tenant.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
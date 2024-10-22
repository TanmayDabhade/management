import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const requests = [
  { id: 1, tenant: "John Doe", property: "Apt 101", issue: "Leaky faucet", status: "Pending" },
  { id: 2, tenant: "Jane Smith", property: "House 202", issue: "Broken AC", status: "In Progress" },
  { id: 3, tenant: "Bob Johnson", property: "Condo 303", issue: "Electrical issue", status: "Completed" },
]

export default function MaintenanceRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.tenant}</TableCell>
                <TableCell>{request.property}</TableCell>
                <TableCell>{request.issue}</TableCell>
                <TableCell>
                  <Badge variant={request.status === "Completed" ? "success" : request.status === "In Progress" ? "warning" : "default"}>
                    {request.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
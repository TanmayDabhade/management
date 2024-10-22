import Link from "next/link"
import { Home, Users, Tool, DollarSign, FileText, LogOut } from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Tenants", href: "/tenants" },
  { icon: Tool, label: "Maintenance", href: "/maintenance" },
  { icon: DollarSign, label: "Finances", href: "/finances" },
  { icon: FileText, label: "Reports", href: "/reports" },
]

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <item.icon className="inline-block w-6 h-6 mr-2 -mt-1" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-full">
        <Link href="/logout" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <LogOut className="inline-block w-6 h-6 mr-2 -mt-1" />
          Logout
        </Link>
      </div>
    </div>
  )
}
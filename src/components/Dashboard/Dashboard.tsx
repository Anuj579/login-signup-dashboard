import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { User, Settings, LogOut, Menu, CircleUserRound, LayoutDashboard, Bell } from "lucide-react"
import { Link, NavLink, Outlet } from "react-router-dom"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const NavLinks = () => (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          isActive
            ? "flex items-center mt-6 px-4 py-3 text-center text-white bg-green-700 rounded-lg"
            : "flex items-center mt-6 px-4 py-3 text-center text-green-700 hover:bg-green-50 hover:text-green-900 rounded-lg"
        }

        onClick={() => setIsSidebarOpen(false)}
      >
        <LayoutDashboard className="h-5 w-5 mr-2" />
        Dashboard
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? "flex items-center mt-2 px-4 py-3 text-center text-white bg-green-700 rounded-lg"
            : "flex items-center mt-2 px-4 py-3 text-center text-green-700 hover:bg-green-50 hover:text-green-900 rounded-lg"
        }
        onClick={() => setIsSidebarOpen(false)}
      >
        <User className="h-5 w-5 mr-2" />
        Profile
      </NavLink>
      <NavLink
        to="/dashboard/settings"
        className={({ isActive }) =>
          isActive
            ? "flex items-center mt-2 px-4 py-3 text-center text-white bg-green-700 rounded-lg"
            : "flex items-center mt-2 px-4 py-3 text-center text-green-700 hover:bg-green-50 hover:text-green-900 rounded-lg"
        }
        onClick={() => setIsSidebarOpen(false)}
      >
        <Settings className="h-5 w-5 mr-2" />
        Settings
      </NavLink>
      <Link
        to="/"
        className="flex items-center px-4 py-3 text-center mt-auto mb-4 lg:mb-8 text-red-700 hover:bg-red-50 hover:text-red-900 rounded-lg"
        onClick={() => setIsSidebarOpen(false)}
      >
        <LogOut className="h-5 w-5 mr-2" />
        Logout
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm sticky top-0">
        <div className="mx-auto px-4 lg:pe-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open sidebar</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px] py-6 px-2">
                  <nav>
                    <div className="py-4">
                      <NavLinks />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
              <p className="text-2xl font-semibold italic ml-2 lg:ml-5">Grocery<span className="text-green-700">Shop</span></p>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="ml-3 relative">
                <span className="sr-only">Notifications</span>
                <Bell />
              </Button>
              <Button variant="ghost" size="icon" className="ml-3 relative">
                <span className="sr-only">Open user menu</span>
                <CircleUserRound />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="hidden lg:block w-64 bg-white shadow-md h-[calc(100vh-4rem)] sticky top-16 px-4">
          <nav>
            <NavLinks />
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
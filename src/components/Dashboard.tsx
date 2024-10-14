import { useState } from "react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Home, User, Settings, LogOut, Menu, CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom"

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link
        to="/dashboard"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => setIsSidebarOpen(false)}
      >
        <Home className="h-5 w-5 mr-2" />
        Dashboard
      </Link>
      <Link
        to="/profile"
        className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => setIsSidebarOpen(false)}
      >
        <User className="h-5 w-5 mr-2" />
        Profile
      </Link>
      <Link
        to="/settings"
        className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => setIsSidebarOpen(false)}
      >
        <Settings className="h-5 w-5 mr-2" />
        Settings
      </Link>
      <Button
        variant="ghost"
        className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full justify-start"
        onClick={() => setIsSidebarOpen(false)}
      >
        <LogOut className="h-5 w-5 mr-2" />
        Logout
      </Button>
    </>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open sidebar</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                  <nav className="flex flex-col h-full">
                    <div className="flex-1 py-4">
                      <NavLinks />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
              <span className="text-2xl font-bold text-primary ml-2 lg:ml-0">AppName</span>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="ml-3 relative">
                <span className="sr-only">Open user menu</span> 
                <CircleUserRound />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="hidden lg:block w-64 bg-white shadow-md h-[calc(100vh-4rem)] sticky top-16">
          <nav className="h-full overflow-y-auto py-4">
            <NavLinks />
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-4 text-gray-600">Welcome to your dashboard. Here you can view and manage your account.</p>
          
          {/* Example content */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white shadow rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Card {item}</h3>
                <p className="text-gray-600">This is some example content for the dashboard.</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
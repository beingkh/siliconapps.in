"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, LogOut, MessageSquare, Phone, Package, FileText, Settings, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"
import { ContentManagement } from "@/components/content-management"
import { AdminStats } from "@/components/admin-stats"
import { ProductManagement } from "@/components/product-management"
import { StatsManagement } from "@/components/stats-management"
import { LegalManagement } from "@/components/legal-management"
import { MessagesManagement } from "@/components/messages-management"

export function AdminDashboard() {
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem("admin_authenticated")
    router.push("/admin")
  }

  const handleViewSite = () => {
    window.open("/", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Si</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Content Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={handleViewSite}>
              <Home className="w-4 h-4 mr-2" />
              View Site
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <AdminStats />

        {/* Main Content */}
        <div className="mt-8">
          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="content" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Content</span>
              </TabsTrigger>
              <TabsTrigger value="products" className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Products</span>
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Stats</span>
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </TabsTrigger>
              <TabsTrigger value="callbacks" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Callbacks</span>
              </TabsTrigger>
              <TabsTrigger value="legal" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Legal</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <ContentManagement />
            </TabsContent>

            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Management</CardTitle>
                  <CardDescription>Manage your products and services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductManagement />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>Statistics Management</CardTitle>
                  <CardDescription>Update the statistics displayed on your homepage</CardDescription>
                </CardHeader>
                <CardContent>
                  <StatsManagement />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Messages & Requests</CardTitle>
                  <CardDescription>
                    View and manage all incoming messages, callbacks, and project requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MessagesManagement />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="callbacks">
              <Card>
                <CardHeader>
                  <CardTitle>Callback Requests</CardTitle>
                  <CardDescription>Manage callback requests from clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Callback management is now integrated into the Messages tab above.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legal">
              <Card>
                <CardHeader>
                  <CardTitle>Legal Pages</CardTitle>
                  <CardDescription>Manage privacy policy, terms of service, etc.</CardDescription>
                </CardHeader>
                <CardContent>
                  <LegalManagement />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure system-wide settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Settings interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

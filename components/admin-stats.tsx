"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Phone, Package, BarChart3 } from "lucide-react"

interface StatsData {
  total_messages: number
  unread_messages: number
  total_callbacks: number
  unread_callbacks: number
  total_projects: number
  unread_projects: number
}

export function AdminStats() {
  const [stats, setStats] = useState<StatsData>({
    total_messages: 0,
    unread_messages: 0,
    total_callbacks: 0,
    unread_callbacks: 0,
    total_projects: 0,
    unread_projects: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/stats")
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          setStats(data.stats)
        }
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const statsCards = [
    {
      title: "New Messages",
      value: loading ? "..." : stats.unread_messages.toString(),
      total: loading ? "..." : `(${stats.total_messages} total)`,
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      title: "Callback Requests",
      value: loading ? "..." : stats.unread_callbacks.toString(),
      total: loading ? "..." : `(${stats.total_callbacks} total)`,
      icon: Phone,
      color: "text-green-600",
    },
    {
      title: "Project Requests",
      value: loading ? "..." : stats.unread_projects.toString(),
      total: loading ? "..." : `(${stats.total_projects} total)`,
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Total Inquiries",
      value: loading ? "..." : (stats.total_messages + stats.total_callbacks + stats.total_projects).toString(),
      total: "All time",
      icon: BarChart3,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.total}</p>
              </div>
              <div className={`p-3 rounded-full bg-muted/50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

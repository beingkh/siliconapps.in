"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

interface Stat {
  number: string
  label: string
}

export function StatsManagement() {
  const [stats, setStats] = useState<Stat[]>([
    { number: "0", label: "Products Developed" },
    { number: "0", label: "Happy Clients" },
  ])

  useEffect(() => {
    const savedStats = localStorage.getItem("websiteStats")
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }
  }, [])

  const handleStatChange = (index: number, field: keyof Stat, value: string) => {
    const updatedStats = stats.map((stat, i) => (i === index ? { ...stat, [field]: value } : stat))
    setStats(updatedStats)
  }

  const handleSaveStats = () => {
    localStorage.setItem("websiteStats", JSON.stringify(stats))
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent("statsUpdated"))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Website Statistics</h3>
        <p className="text-sm text-gray-600">Update the statistics displayed on the homepage</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`number-${index}`}>Number/Value</Label>
                <Input
                  id={`number-${index}`}
                  value={stat.number}
                  onChange={(e) => handleStatChange(index, "number", e.target.value)}
                  placeholder="e.g., 50+, 100+"
                />
              </div>
              <div>
                <Label htmlFor={`label-${index}`}>Label</Label>
                <Input
                  id={`label-${index}`}
                  value={stat.label}
                  onChange={(e) => handleStatChange(index, "label", e.target.value)}
                  placeholder="e.g., Products Developed"
                />
              </div>
            </div>
          ))}

          <Button onClick={handleSaveStats} className="bg-green-600 hover:bg-green-700 text-white">
            <Save className="w-4 h-4 mr-2" />
            Save Statistics
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

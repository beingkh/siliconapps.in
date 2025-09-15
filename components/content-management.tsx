"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Save } from "lucide-react"

export function ContentManagement() {
  const [content, setContent] = useState({
    heroTitle: "Enterprise SaaS.\nReimagined.",
    heroSubtitle:
      "We build next-generation SaaS applications using vibe coding, advanced DevOps, and cloud-native architectures.",
    servicesTitle: "Built for the future.",
    servicesSubtitle:
      "We specialize in building scalable SaaS applications using cutting-edge methodologies and robust DevOps practices.",
    aboutText:
      "Silicon Apps specializes in building scalable SaaS applications using cutting-edge methodologies and robust DevOps practices.",
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate saving to database
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)

    // In a real app, this would save to your database
    console.log("Content saved:", content)
    alert("Content saved successfully!")
  }

  const handleInputChange = (field: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Content Management</CardTitle>
        <CardDescription>Update all website content from this central location</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Hero Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Hero Section</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Hero Title</label>
              <Textarea
                value={content.heroTitle}
                onChange={(e) => handleInputChange("heroTitle", e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Hero Subtitle</label>
              <Textarea
                value={content.heroSubtitle}
                onChange={(e) => handleInputChange("heroSubtitle", e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Services Section</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Services Section Title</label>
              <Input
                value={content.servicesTitle}
                onChange={(e) => handleInputChange("servicesTitle", e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Services Section Subtitle</label>
              <Textarea
                value={content.servicesSubtitle}
                onChange={(e) => handleInputChange("servicesSubtitle", e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">About Section</h3>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">About Section Text</label>
            <Textarea
              value={content.aboutText}
              onChange={(e) => handleInputChange("aboutText", e.target.value)}
              rows={4}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6 border-t border-border">
          <Button onClick={handleSave} disabled={isSaving} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Saving Changes..." : "Save Content Changes"}
          </Button>
        </div>

        {/* Preview Note */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> In a production environment, this would be connected to a database to persist
            changes. Currently, changes are stored locally for demonstration purposes.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

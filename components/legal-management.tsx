"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Save, FileText, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface LegalContent {
  id: number
  page_type: string
  content: string
  updated_at: string
}

export function LegalManagement() {
  const [privacyPolicy, setPrivacyPolicy] = useState("")
  const [termsOfService, setTermsOfService] = useState("")
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchLegalContent()
  }, [])

  const fetchLegalContent = async () => {
    setLoading(true)
    try {
      // Fetch Privacy Policy
      const privacyResponse = await fetch("http://localhost:5000/api/legal/privacy_policy")
      if (privacyResponse.ok) {
        const privacyData = await privacyResponse.json()
        setPrivacyPolicy(privacyData.content.content)
      }

      // Fetch Terms of Service
      const termsResponse = await fetch("http://localhost:5000/api/legal/terms_of_service")
      if (termsResponse.ok) {
        const termsData = await termsResponse.json()
        setTermsOfService(termsData.content.content)
      }
    } catch (error) {
      console.error("Error fetching legal content:", error)
      toast({
        title: "Error",
        description: "Failed to load legal content",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const saveLegalContent = async (pageType: string, content: string) => {
    setSaving(true)
    try {
      const response = await fetch(`http://localhost:5000/api/legal/${pageType}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: `${pageType === "privacy_policy" ? "Privacy Policy" : "Terms of Service"} updated successfully`,
        })
      } else {
        throw new Error("Failed to save content")
      }
    } catch (error) {
      console.error("Error saving legal content:", error)
      toast({
        title: "Error",
        description: "Failed to save legal content",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading legal content...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="privacy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="privacy" className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Privacy Policy</span>
          </TabsTrigger>
          <TabsTrigger value="terms" className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Privacy Policy</span>
              </CardTitle>
              <CardDescription>
                Manage your privacy policy content. This will be displayed on the Privacy Policy page.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="privacy-content">Privacy Policy Content</Label>
                <Textarea
                  id="privacy-content"
                  value={privacyPolicy}
                  onChange={(e) => setPrivacyPolicy(e.target.value)}
                  placeholder="Enter your privacy policy content here..."
                  className="min-h-[400px] resize-none"
                />
              </div>
              <Button
                onClick={() => saveLegalContent("privacy_policy", privacyPolicy)}
                disabled={saving}
                className="w-full"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Save Privacy Policy"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Terms of Service</span>
              </CardTitle>
              <CardDescription>
                Manage your terms of service content. This will be displayed on the Terms of Service page.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="terms-content">Terms of Service Content</Label>
                <Textarea
                  id="terms-content"
                  value={termsOfService}
                  onChange={(e) => setTermsOfService(e.target.value)}
                  placeholder="Enter your terms of service content here..."
                  className="min-h-[400px] resize-none"
                />
              </div>
              <Button
                onClick={() => saveLegalContent("terms_of_service", termsOfService)}
                disabled={saving}
                className="w-full"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Save Terms of Service"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

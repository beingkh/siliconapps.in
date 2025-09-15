"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Target, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ProjectRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project_type: "",
    budget_range: "",
    timeline: "",
    project_description: "",
    technical_requirements: "",
    target_audience: "",
    additional_notes: "",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.project_type ||
      !formData.project_description
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description:
            "Your project request has been submitted successfully. We'll review it and get back to you within 24 hours with a detailed proposal.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          project_type: "",
          budget_range: "",
          timeline: "",
          project_description: "",
          technical_requirements: "",
          target_audience: "",
          additional_notes: "",
        })
      } else {
        throw new Error("Failed to submit project request")
      }
    } catch (error) {
      console.error("Error submitting project request:", error)
      toast({
        title: "Error",
        description: "Failed to submit project request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-8">
            <Lightbulb className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Start Your <span className="text-blue-600">Project</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Share your product idea with us. We'll analyze, architect, and provide a detailed quotation for your next
            SaaS venture.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-base text-slate-600">Experienced developers and architects</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Tailored Solutions</h3>
              <p className="text-base text-slate-600">Custom-built for your specific needs</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Zap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Fast Delivery</h3>
              <p className="text-base text-slate-600">Rapid development with vibe coding</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Form */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl font-bold text-slate-900">Project Details</CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Tell us about your vision and we'll get back to you within 24 hours with a comprehensive proposal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Full Name *</label>
                  <Input
                    placeholder="John Doe"
                    className="h-14 border-slate-200 focus:border-blue-500 text-base"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="h-14 border-slate-200 focus:border-blue-500 text-base"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Company Name</label>
                  <Input
                    placeholder="Your Company Ltd."
                    className="h-14 border-slate-200 focus:border-blue-500 text-base"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Phone Number *</label>
                  <Input
                    placeholder="+91 98765 43210"
                    className="h-14 border-slate-200 focus:border-blue-500 text-base"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-3">
                <label className="text-base font-semibold text-slate-900">Project Type *</label>
                <Select
                  value={formData.project_type}
                  onValueChange={(value) => handleInputChange("project_type", value)}
                >
                  <SelectTrigger className="h-14 border-slate-200 focus:border-blue-500">
                    <SelectValue placeholder="Select your project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS Application</SelectItem>
                    <SelectItem value="web">Web Application</SelectItem>
                    <SelectItem value="mobile">Mobile Application</SelectItem>
                    <SelectItem value="enterprise">Enterprise Solution</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Budget Range</label>
                  <Select
                    value={formData.budget_range}
                    onValueChange={(value) => handleInputChange("budget_range", value)}
                  >
                    <SelectTrigger className="h-14 border-slate-200 focus:border-blue-500">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                      <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                      <SelectItem value="250k+">₹2,50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Timeline</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="h-14 border-slate-200 focus:border-blue-500">
                      <SelectValue placeholder="Expected timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2months">1-2 Months</SelectItem>
                      <SelectItem value="3-4months">3-4 Months</SelectItem>
                      <SelectItem value="5-6months">5-6 Months</SelectItem>
                      <SelectItem value="6months+">6+ Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <label className="text-base font-semibold text-slate-900">Project Description *</label>
                <Textarea
                  placeholder="Describe your product idea in detail. Include:
• What problem does it solve?
• Who is your target audience?
• Key features you envision
• Any specific technologies or integrations needed
• Your business goals and vision"
                  rows={8}
                  className="border-slate-200 focus:border-blue-500 resize-none text-base"
                  value={formData.project_description}
                  onChange={(e) => handleInputChange("project_description", e.target.value)}
                  required
                />
              </div>

              {/* Technical Requirements */}
              <div className="space-y-3">
                <label className="text-base font-semibold text-slate-900">Technical Requirements</label>
                <Textarea
                  placeholder="Any specific technical requirements, integrations, or preferences..."
                  rows={4}
                  className="border-slate-200 focus:border-blue-500 resize-none text-base"
                  value={formData.technical_requirements}
                  onChange={(e) => handleInputChange("technical_requirements", e.target.value)}
                />
              </div>

              {/* Target Audience */}
              <div className="space-y-3">
                <label className="text-base font-semibold text-slate-900">Target Audience</label>
                <Textarea
                  placeholder="Describe your target audience and user personas..."
                  rows={3}
                  className="border-slate-200 focus:border-blue-500 resize-none text-base"
                  value={formData.target_audience}
                  onChange={(e) => handleInputChange("target_audience", e.target.value)}
                />
              </div>

              {/* Additional Notes */}
              <div className="space-y-3">
                <label className="text-base font-semibold text-slate-900">Additional Notes</label>
                <Textarea
                  placeholder="Any additional information or special requirements..."
                  rows={3}
                  className="border-slate-200 focus:border-blue-500 resize-none text-base"
                  value={formData.additional_notes}
                  onChange={(e) => handleInputChange("additional_notes", e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Project Request"}
                </Button>
                <p className="text-sm text-slate-500 text-center mt-3">
                  We'll review your request and get back to you within 24 hours with a detailed proposal.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

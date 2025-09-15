"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service_interest: "",
    project_details: "",
  })
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    preferred_time: "",
    brief_notes: "",
  })
  const [contactLoading, setContactLoading] = useState(false)
  const [callbackLoading, setCallbackLoading] = useState(false)
  const { toast } = useToast()

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!contactForm.name || !contactForm.email || !contactForm.project_details) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setContactLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        })
        setContactForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          service_interest: "",
          project_details: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setContactLoading(false)
    }
  }

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!callbackForm.name || !callbackForm.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setCallbackLoading(true)
    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(callbackForm),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your callback request has been submitted. We'll call you soon!",
        })
        setCallbackForm({
          name: "",
          phone: "",
          preferred_time: "",
          brief_notes: "",
        })
      } else {
        throw new Error("Failed to submit callback request")
      }
    } catch (error) {
      console.error("Error submitting callback request:", error)
      toast({
        title: "Error",
        description: "Failed to submit callback request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setCallbackLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Ready to Transform Your <span className="text-blue-600">Ideas?</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Reach out to us for any enquiries about your next enterprise SaaS project. We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Send Message Form */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Send us a message</h3>
              <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-slate-900">Name *</label>
                    <Input
                      placeholder="Your name"
                      className="h-14 border-slate-200 focus:border-blue-500 text-base"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-slate-900">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-14 border-slate-200 focus:border-blue-500 text-base"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-slate-900">Company</label>
                    <Input
                      placeholder="Your company name"
                      className="h-14 border-slate-200 focus:border-blue-500 text-base"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-slate-900">Phone</label>
                    <Input
                      placeholder="+91 98765 43210"
                      className="h-14 border-slate-200 focus:border-blue-500 text-base"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Service Interest</label>
                  <Select
                    value={contactForm.service_interest}
                    onValueChange={(value) => setContactForm({ ...contactForm, service_interest: value })}
                  >
                    <SelectTrigger className="h-14 border-slate-200 focus:border-blue-500 text-base">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS Development</SelectItem>
                      <SelectItem value="vibe">Vibe Coding</SelectItem>
                      <SelectItem value="devops">DevOps Solutions</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Project Details *</label>
                  <Textarea
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    rows={4}
                    className="border-slate-200 focus:border-blue-500 resize-none text-base"
                    value={contactForm.project_details}
                    onChange={(e) => setContactForm({ ...contactForm, project_details: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  disabled={contactLoading}
                >
                  {contactLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Request Callback Form */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Request a Callback</h3>
              <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                Schedule a call with our experts to discuss your requirements.
              </p>

              <form onSubmit={handleCallbackSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-slate-900">Name *</label>
                    <Input
                      placeholder="Your name"
                      className="h-14 border-slate-200 focus:border-blue-500 text-base"
                      value={callbackForm.name}
                      onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-slate-900">Phone *</label>
                    <Input
                      placeholder="+91 98765 43210"
                      className="h-14 border-slate-200 focus:border-blue-500 text-base"
                      value={callbackForm.phone}
                      onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Preferred Time</label>
                  <Select
                    value={callbackForm.preferred_time}
                    onValueChange={(value) => setCallbackForm({ ...callbackForm, preferred_time: value })}
                  >
                    <SelectTrigger className="h-14 border-slate-200 focus:border-blue-500 text-base">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-base font-semibold text-slate-900">Brief Notes</label>
                  <Textarea
                    placeholder="Brief description of what you'd like to discuss..."
                    rows={3}
                    className="border-slate-200 focus:border-blue-500 resize-none text-base"
                    value={callbackForm.brief_notes}
                    onChange={(e) => setCallbackForm({ ...callbackForm, brief_notes: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  disabled={callbackLoading}
                >
                  {callbackLoading ? "Submitting..." : "Request Callback"}
                </Button>

                {/* Contact Information */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600">business@siliconapps.in</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600">+91 7989951676</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600">India</span>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Mail, MailOpen, Phone, User, Building, Clock, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactMessage {
  id: number
  name: string
  email: string
  company?: string
  phone?: string
  service_interest?: string
  project_details: string
  is_read: boolean
  created_at: string
}

interface CallbackRequest {
  id: number
  name: string
  phone: string
  preferred_time?: string
  brief_notes?: string
  is_read: boolean
  created_at: string
}

interface ProjectRequest {
  id: number
  name: string
  email: string
  company?: string
  phone?: string
  project_type?: string
  budget_range?: string
  timeline?: string
  project_description: string
  technical_requirements?: string
  target_audience?: string
  additional_notes?: string
  is_read: boolean
  created_at: string
}

export function MessagesManagement() {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([])
  const [callbackRequests, setCallbackRequests] = useState<CallbackRequest[]>([])
  const [projectRequests, setProjectRequests] = useState<ProjectRequest[]>([])
  const [loading, setLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | "read" | "unread">("all")
  const { toast } = useToast()

  useEffect(() => {
    fetchAllMessages()
  }, [activeFilter])

  const fetchAllMessages = async () => {
    setLoading(true)
    try {
      // Fetch contact messages
      const contactResponse = await fetch(`/api/contact?filter=${activeFilter}`)
      if (contactResponse.ok) {
        const contactData = await contactResponse.json()
        setContactMessages(contactData.messages || [])
      }

      // Fetch callback requests
      const callbackResponse = await fetch(`/api/callback?filter=${activeFilter}`)
      if (callbackResponse.ok) {
        const callbackData = await callbackResponse.json()
        setCallbackRequests(callbackData.callbacks || [])
      }

      // Fetch project requests
      const projectResponse = await fetch(`/api/project?filter=${activeFilter}`)
      if (projectResponse.ok) {
        const projectData = await projectResponse.json()
        setProjectRequests(projectData.projects || [])
      }
    } catch (error) {
      console.error("Error fetching messages:", error)
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (type: "contact" | "callback" | "project", id: number) => {
    try {
      const endpoint = type === "contact" ? "contact" : type === "callback" ? "callback" : "project"
      const response = await fetch(`/api/${endpoint}/${id}/read`, {
        method: "PUT",
      })

      if (response.ok) {
        fetchAllMessages() // Refresh the data
        toast({
          title: "Success",
          description: "Message marked as read",
        })
      }
    } catch (error) {
      console.error("Error marking message as read:", error)
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive",
      })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading messages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex space-x-2">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => setActiveFilter("all")}
          size="sm"
        >
          All Messages
        </Button>
        <Button
          variant={activeFilter === "unread" ? "default" : "outline"}
          onClick={() => setActiveFilter("unread")}
          size="sm"
        >
          <Mail className="w-4 h-4 mr-2" />
          Unread
        </Button>
        <Button
          variant={activeFilter === "read" ? "default" : "outline"}
          onClick={() => setActiveFilter("read")}
          size="sm"
        >
          <MailOpen className="w-4 h-4 mr-2" />
          Read
        </Button>
      </div>

      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contact" className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>Contact Messages ({contactMessages.length})</span>
          </TabsTrigger>
          <TabsTrigger value="callbacks" className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Callbacks ({callbackRequests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center space-x-2">
            <Building className="w-4 h-4" />
            <span>Projects ({projectRequests.length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact" className="space-y-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {contactMessages.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600">No contact messages found</p>
                  </CardContent>
                </Card>
              ) : (
                contactMessages.map((message) => (
                  <Card key={message.id} className={`${!message.is_read ? "border-blue-200 bg-blue-50" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-slate-600" />
                            <span className="font-semibold">{message.name}</span>
                          </div>
                          {!message.is_read && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-sm text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{formatDate(message.created_at)}</span>
                          </div>
                          {!message.is_read && (
                            <Button size="sm" variant="outline" onClick={() => markAsRead("contact", message.id)}>
                              <Eye className="w-3 h-3 mr-1" />
                              Mark Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-slate-700">Email:</span>
                          <p className="text-slate-600">{message.email}</p>
                        </div>
                        {message.company && (
                          <div>
                            <span className="font-medium text-slate-700">Company:</span>
                            <p className="text-slate-600">{message.company}</p>
                          </div>
                        )}
                        {message.phone && (
                          <div>
                            <span className="font-medium text-slate-700">Phone:</span>
                            <p className="text-slate-600">{message.phone}</p>
                          </div>
                        )}
                        {message.service_interest && (
                          <div>
                            <span className="font-medium text-slate-700">Service Interest:</span>
                            <p className="text-slate-600">{message.service_interest}</p>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium text-slate-700">Project Details:</span>
                        <p className="text-slate-600 mt-1 whitespace-pre-wrap">{message.project_details}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="callbacks" className="space-y-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {callbackRequests.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600">No callback requests found</p>
                  </CardContent>
                </Card>
              ) : (
                callbackRequests.map((callback) => (
                  <Card key={callback.id} className={`${!callback.is_read ? "border-blue-200 bg-blue-50" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-slate-600" />
                            <span className="font-semibold">{callback.name}</span>
                          </div>
                          {!callback.is_read && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-sm text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{formatDate(callback.created_at)}</span>
                          </div>
                          {!callback.is_read && (
                            <Button size="sm" variant="outline" onClick={() => markAsRead("callback", callback.id)}>
                              <Eye className="w-3 h-3 mr-1" />
                              Mark Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-slate-700">Phone:</span>
                          <p className="text-slate-600">{callback.phone}</p>
                        </div>
                        {callback.preferred_time && (
                          <div>
                            <span className="font-medium text-slate-700">Preferred Time:</span>
                            <p className="text-slate-600">{callback.preferred_time}</p>
                          </div>
                        )}
                      </div>
                      {callback.brief_notes && (
                        <div>
                          <span className="font-medium text-slate-700">Notes:</span>
                          <p className="text-slate-600 mt-1 whitespace-pre-wrap">{callback.brief_notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {projectRequests.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Building className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600">No project requests found</p>
                  </CardContent>
                </Card>
              ) : (
                projectRequests.map((project) => (
                  <Card key={project.id} className={`${!project.is_read ? "border-blue-200 bg-blue-50" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-slate-600" />
                            <span className="font-semibold">{project.name}</span>
                          </div>
                          {!project.is_read && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-sm text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{formatDate(project.created_at)}</span>
                          </div>
                          {!project.is_read && (
                            <Button size="sm" variant="outline" onClick={() => markAsRead("project", project.id)}>
                              <Eye className="w-3 h-3 mr-1" />
                              Mark Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-slate-700">Email:</span>
                          <p className="text-slate-600">{project.email}</p>
                        </div>
                        {project.company && (
                          <div>
                            <span className="font-medium text-slate-700">Company:</span>
                            <p className="text-slate-600">{project.company}</p>
                          </div>
                        )}
                        {project.phone && (
                          <div>
                            <span className="font-medium text-slate-700">Phone:</span>
                            <p className="text-slate-600">{project.phone}</p>
                          </div>
                        )}
                        {project.project_type && (
                          <div>
                            <span className="font-medium text-slate-700">Project Type:</span>
                            <p className="text-slate-600">{project.project_type}</p>
                          </div>
                        )}
                        {project.budget_range && (
                          <div>
                            <span className="font-medium text-slate-700">Budget:</span>
                            <p className="text-slate-600">{project.budget_range}</p>
                          </div>
                        )}
                        {project.timeline && (
                          <div>
                            <span className="font-medium text-slate-700">Timeline:</span>
                            <p className="text-slate-600">{project.timeline}</p>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium text-slate-700">Project Description:</span>
                        <p className="text-slate-600 mt-1 whitespace-pre-wrap">{project.project_description}</p>
                      </div>
                      {project.technical_requirements && (
                        <div>
                          <span className="font-medium text-slate-700">Technical Requirements:</span>
                          <p className="text-slate-600 mt-1 whitespace-pre-wrap">{project.technical_requirements}</p>
                        </div>
                      )}
                      {project.target_audience && (
                        <div>
                          <span className="font-medium text-slate-700">Target Audience:</span>
                          <p className="text-slate-600 mt-1 whitespace-pre-wrap">{project.target_audience}</p>
                        </div>
                      )}
                      {project.additional_notes && (
                        <div>
                          <span className="font-medium text-slate-700">Additional Notes:</span>
                          <p className="text-slate-600 mt-1 whitespace-pre-wrap">{project.additional_notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

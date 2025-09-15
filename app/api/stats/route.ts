import { NextResponse } from "next/server"

// Import storage arrays (in production, these would be database queries)
const contactMessages: any[] = []
const callbackRequests: any[] = []
const projectRequests: any[] = []

export async function GET() {
  try {
    const totalMessages = contactMessages.length
    const unreadMessages = contactMessages.filter((msg) => !msg.is_read).length
    const totalCallbacks = callbackRequests.length
    const unreadCallbacks = callbackRequests.filter((cb) => !cb.is_read).length
    const totalProjects = projectRequests.length
    const unreadProjects = projectRequests.filter((proj) => !proj.is_read).length

    return NextResponse.json({
      success: true,
      stats: {
        total_messages: totalMessages,
        unread_messages: unreadMessages,
        total_callbacks: totalCallbacks,
        unread_callbacks: unreadCallbacks,
        total_projects: totalProjects,
        unread_projects: unreadProjects,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch stats",
      },
      { status: 400 },
    )
  }
}

import { NextResponse } from "next/server"
import { dataStore } from "@/lib/data-store"

export async function GET() {
  try {
    const totalMessages = dataStore.contactMessages.length
    const unreadMessages = dataStore.contactMessages.filter((msg) => !msg.is_read).length
    const totalCallbacks = dataStore.callbackRequests.length
    const unreadCallbacks = dataStore.callbackRequests.filter((cb) => !cb.is_read).length
    const totalProjects = dataStore.projectRequests.length
    const unreadProjects = dataStore.projectRequests.filter((proj) => !proj.is_read).length

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

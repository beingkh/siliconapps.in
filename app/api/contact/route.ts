import { type NextRequest, NextResponse } from "next/server"
import { dataStore } from "@/lib/data-store"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const message = {
      id: dataStore.counters.contactMessageId++,
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      service_interest: data.service_interest,
      project_details: data.project_details,
      is_read: false,
      created_at: new Date().toISOString(),
    }

    dataStore.contactMessages.push(message)

    return NextResponse.json(
      {
        success: true,
        message: "Contact message submitted successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit contact message",
      },
      { status: 400 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filter = searchParams.get("filter") || "all"

    let filteredMessages = dataStore.contactMessages

    if (filter === "read") {
      filteredMessages = dataStore.contactMessages.filter((msg) => msg.is_read)
    } else if (filter === "unread") {
      filteredMessages = dataStore.contactMessages.filter((msg) => !msg.is_read)
    }

    return NextResponse.json({
      success: true,
      messages: filteredMessages.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch messages",
      },
      { status: 400 },
    )
  }
}

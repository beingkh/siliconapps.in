import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, you would use a proper database
const contactMessages: any[] = []
let messageIdCounter = 1

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const message = {
      id: messageIdCounter++,
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      service_interest: data.service_interest,
      project_details: data.project_details,
      is_read: false,
      created_at: new Date().toISOString(),
    }

    contactMessages.push(message)

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

    let filteredMessages = contactMessages

    if (filter === "read") {
      filteredMessages = contactMessages.filter((msg) => msg.is_read)
    } else if (filter === "unread") {
      filteredMessages = contactMessages.filter((msg) => !msg.is_read)
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

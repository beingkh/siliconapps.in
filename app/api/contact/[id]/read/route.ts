import { type NextRequest, NextResponse } from "next/server"

// Import the same storage from the main contact route
// In production, this would be a database query
const contactMessages: any[] = []

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const messageId = Number.parseInt(params.id)
    const messageIndex = contactMessages.findIndex((msg) => msg.id === messageId)

    if (messageIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Message not found",
        },
        { status: 404 },
      )
    }

    contactMessages[messageIndex].is_read = true

    return NextResponse.json({
      success: true,
      message: "Message marked as read",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to mark message as read",
      },
      { status: 400 },
    )
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { dataStore } from "@/lib/data-store"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const callback = {
      id: dataStore.counters.callbackRequestId++,
      name: data.name,
      phone: data.phone,
      preferred_time: data.preferred_time,
      brief_notes: data.brief_notes,
      is_read: false,
      created_at: new Date().toISOString(),
    }

    dataStore.callbackRequests.push(callback)

    return NextResponse.json(
      {
        success: true,
        message: "Callback request submitted successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit callback request",
      },
      { status: 400 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filter = searchParams.get("filter") || "all"

    let filteredCallbacks = dataStore.callbackRequests

    if (filter === "read") {
      filteredCallbacks = dataStore.callbackRequests.filter((cb) => cb.is_read)
    } else if (filter === "unread") {
      filteredCallbacks = dataStore.callbackRequests.filter((cb) => !cb.is_read)
    }

    return NextResponse.json({
      success: true,
      callbacks: filteredCallbacks.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch callbacks",
      },
      { status: 400 },
    )
  }
}

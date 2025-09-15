import { type NextRequest, NextResponse } from "next/server"
import { dataStore } from "@/lib/data-store"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const project = {
      id: dataStore.counters.projectRequestId++,
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      project_type: data.project_type,
      budget_range: data.budget_range,
      timeline: data.timeline,
      project_description: data.project_description,
      technical_requirements: data.technical_requirements,
      target_audience: data.target_audience,
      additional_notes: data.additional_notes,
      is_read: false,
      created_at: new Date().toISOString(),
    }

    dataStore.projectRequests.push(project)

    return NextResponse.json(
      {
        success: true,
        message: "Project request submitted successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit project request",
      },
      { status: 400 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filter = searchParams.get("filter") || "all"

    let filteredProjects = dataStore.projectRequests

    if (filter === "read") {
      filteredProjects = dataStore.projectRequests.filter((proj) => proj.is_read)
    } else if (filter === "unread") {
      filteredProjects = dataStore.projectRequests.filter((proj) => !proj.is_read)
    }

    return NextResponse.json({
      success: true,
      projects: filteredProjects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
      },
      { status: 400 },
    )
  }
}

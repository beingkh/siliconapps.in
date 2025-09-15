import { type NextRequest, NextResponse } from "next/server"

const legalContent: { [key: string]: any } = {
  "privacy-policy": {
    page_type: "privacy-policy",
    content: "Default privacy policy content. Update this from the admin panel.",
    updated_at: new Date().toISOString(),
  },
  "terms-of-service": {
    page_type: "terms-of-service",
    content: "Default terms of service content. Update this from the admin panel.",
    updated_at: new Date().toISOString(),
  },
}

export async function GET(request: NextRequest, { params }: { params: { pageType: string } }) {
  try {
    const content = legalContent[params.pageType]

    if (!content) {
      return NextResponse.json(
        {
          success: false,
          error: "Legal content not found",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      content: content,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch legal content",
      },
      { status: 400 },
    )
  }
}

export async function PUT(request: NextRequest, { params }: { params: { pageType: string } }) {
  try {
    const data = await request.json()

    legalContent[params.pageType] = {
      page_type: params.pageType,
      content: data.content,
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      message: "Legal content updated successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update legal content",
      },
      { status: 400 },
    )
  }
}

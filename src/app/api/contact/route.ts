import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, projectType, message } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid corporate email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief description of your project requirements." },
        { status: 400 }
      );
    }

    // In a live system, this sends to an email or CRM pipeline.
    // For production marketing website, we return a structured success confirmation.
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to Miaga Technologies LLP. An engineering director will review your requirements and respond within 24 hours.",
        receivedData: {
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone ? phone.trim() : null,
          projectType: Array.isArray(projectType) ? projectType : [projectType],
        },
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { COMPANY_CONFIG } from "@/lib/company";

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
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief description of your requirements." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you for reaching out to ${COMPANY_CONFIG.legalName}. We have received your inquiry and will respond within 1–2 working days.`,
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

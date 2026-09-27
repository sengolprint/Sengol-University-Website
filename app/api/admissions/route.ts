import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, fatherName, email, phone, programType, courseName, state, district } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: "Full name, email and phone are required." }, { status: 400 });
    }

    const application = await prisma.admissionApplication.create({
      data: {
        fullName: String(fullName).trim(),
        fatherName: fatherName ? String(fatherName).trim() : null,
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        programType: programType ? String(programType).trim() : null,
        courseName: courseName ? String(courseName).trim() : null,
        state: state ? String(state).trim() : null,
        district: district ? String(district).trim() : null,
      },
    });

    return NextResponse.json({ ok: true, id: application.id }, { status: 201 });
  } catch (error) {
    console.error("Admission application error", error);
    return NextResponse.json({ error: "Unable to submit application." }, { status: 500 });
  }
}

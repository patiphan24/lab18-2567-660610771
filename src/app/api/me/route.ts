import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Patiphan Leknok",
    studentId: "660610771",
  });
};

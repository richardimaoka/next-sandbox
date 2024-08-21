import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const results = [
    { id: "8db3cf81-768b-490e-911d-276a4c8bb73b", name: "Earth" },
    { id: "bf233bd5-bcac-453e-9971-af047b9bb328", name: "Moon" },
    { id: "578b38d8-d498-43aa-9dda-162c828f0972", name: "Saturn" },
    { id: "6c5288f7-ef60-4668-a55a-09b859a04977", name: "Sun" },
  ];

  if (!query) {
    return NextResponse.json([]);
  } else {
    return NextResponse.json(
      results.filter((item) => item.name.toLowerCase().includes(query))
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const reqBody = await req.json();

		const { lat, lon } = reqBody;

		const res = await fetch(
			`https://api.weather.yandex.ru/v2/informers?lat=${lat}&lon=${lon}`,
			{
				headers: {
					"X-Yandex-API-Key": process.env.WEATHER_API_KEY!,
				},
				method: "GET",
				cache: "no-store",
			},
		);

		const body = await res.json();

		return NextResponse.json(body);
	} catch (error) {
		console.log("[WEATHER_GET]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}

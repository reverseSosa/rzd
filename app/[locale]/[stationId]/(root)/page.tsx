import { getScopedI18n } from "@/locales/server";

import NavBlock from "./components/NavBlock";
import RoutesBlock from "./components/RoutesBlock";

import { StationId } from "@/types";

export default async function Home({
	params,
}: { params: { locale: "ru" | "en"; stationId: StationId } }) {
	const t = await getScopedI18n(`${params.stationId}.home`);

	try {
		const data = await fetch(
			`https://rzd.bpium.ru/api/webrequest/station?id=${params.stationId}`,
			{ method: "GET" },
		).then((res) => res.json());

		return (
			<main className="flex min-h-screen flex-col items-center pt-[360px] text-center">
				<div className="absolute top-0 left-0 z-0 max-w-full overflow-hidden h-[800px]">
					<video
						id="video_background"
						preload="auto"
						autoPlay
						loop
						playsInline
						muted
						className="opacity-30 z-0"
						style={{ transform: "scale(1.5)" }}
						src="/nebo.webm"
					/>
					<div className="w-full h-[800px] bg-gradient-to-t from-white to-transparent z-[5] absolute top-0 left-0" />
				</div>

				<h2 className="text-[30px] z-10">{t("station")}</h2>
				<h1 className="text-[50px] font-bold text-red z-10">
					{params.locale === "ru" ? data.values["2"] : data.values["3"]}
				</h1>
				<p className="text-[15px] leading-[25px] mt-[39px] max-w-[800px] z-10">
					{params.locale === "ru" ? data.values["5"] : data.values["6"]}
				</p>
				<NavBlock stationId={params.stationId} />
				<RoutesBlock stationId={params.stationId} />
			</main>
		);
	} catch (error) {
		console.log(error);

		return (
			<main className="flex min-h-screen flex-col items-center pt-[360px] text-center">
				<div className="absolute top-0 left-0 z-0 max-w-full overflow-hidden h-[800px]">
					<video
						id="video_background"
						preload="auto"
						autoPlay
						loop
						playsInline
						muted
						className="opacity-30 z-0"
						style={{ transform: "scale(1.5)" }}
						src="/nebo.webm"
					/>
					<div className="w-full h-[800px] bg-gradient-to-t from-white to-transparent z-[5] absolute top-0 left-0" />
				</div>

				<h2 className="text-[30px] z-10">{t("station")}</h2>
				<h1 className="text-[50px] font-bold text-red z-10">Какой-то вокзал</h1>
				<p className="text-[15px] leading-[25px] mt-[39px] max-w-[800px] z-10">
					Очень крутой
				</p>
				<NavBlock stationId={params.stationId} />
				<RoutesBlock stationId={params.stationId} />
			</main>
		);
	}
}

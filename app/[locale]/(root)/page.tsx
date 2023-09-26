import { getScopedI18n } from "@/locales/server";
import NavBlock from "./components/NavBlock";
import RoutesBlock from "./components/RoutesBlock";

export default async function Home() {
	const t = await getScopedI18n("home");
	return (
		<main className="flex min-h-screen flex-col items-center pt-[360px] text-center">
			<h2 className="text-[30px]">{t("station")}</h2>
			<h1 className="text-[50px] font-bold text-red">{t("stationName")}</h1>
			<p className="text-[15px] leading-[25px] mt-[39px] max-w-[800px]">
				{t("description")}
			</p>
			<NavBlock />
			<RoutesBlock />
		</main>
	);
}

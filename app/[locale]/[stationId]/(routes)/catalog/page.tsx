import { getScopedI18n } from "@/locales/server";

import MainButton from "@/components/ui/MainButton";
import ToTopButton from "@/components/ui/ToTopButton";
import ServicesBlock from "./components/ServicesBlock";

import { StationId } from "@/types";
import MapClient from "./components/client";

const CatalogPage = async ({
	params,
}: { params: { stationId: StationId } }) => {
	const t = await getScopedI18n(`${params.stationId}.serviceCatalog`);

	return (
		<main className="flex min-h-screen flex-col items-center pt-[280px] text-center">
			<div className="p-[100px] pb-20">
				<h1 className="text-[40px] font-bold text-left">{t("services")}</h1>
				<p className="text-[20px] leading-[35px] text-left mt-[88px]">
					{t("firstP")}
				</p>
				<ServicesBlock stationId={params.stationId} />
			</div>
			<MapClient stationId={params.stationId} />
			<div className="px-[100px] pt-[94px] pb-[84px]">
				<p className="text-[20px] leading-[35px] text-left mb-[86px]">
					{t("firstP")}
				</p>
				<div className="flex flex-col gap-5">
					<ToTopButton />
					<MainButton />
				</div>
			</div>
		</main>
	);
};
export default CatalogPage;

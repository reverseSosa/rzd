import Link from "next/link";

import { getScopedI18n } from "@/locales/server";
import TrainIcon from "@/components/icons/TrainIcon";
import KassaIcon from "@/components/icons/KassaIcon";

import MapClient from "./components/client";

import { StationId } from "@/types";

const MapPage = async ({ params }: { params: { stationId: StationId } }) => {
	const t = await getScopedI18n(`${params.stationId}.stationMap`);

	return (
		<main className="flex min-h-screen flex-col items-center justify-end">
			<div className="absolute z-40 w-full h-full">
				<MapClient stationId={params.stationId} />
			</div>
			<div className="flex flex-col gap-5 px-[100px] pb-20 z-40 w-full">
				<div className="bg-white h-[380px] px-[44px] pt-10 leading-[30px] text-[20px] flex flex-col gap-9">
					<div className="flex items-center gap-6">
						<TrainIcon className="w-10 h-10 stroke-red" />
						{`- ${t("aprons")}`}
					</div>
					<div className="flex items-center gap-6">
						<KassaIcon className="w-10 h-10 stroke-red" />
						{`- ${t("ticketsBuy")}`}
					</div>
				</div>
				<Link
					href={`/${params.stationId}`}
					className="h-[100px] bg-red flex items-center justify-center text-white text-[30px] font-bold"
				>
					{t("main")}
				</Link>
			</div>
		</main>
	);
};

export default MapPage;

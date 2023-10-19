import { getScopedI18n } from "@/locales/server";

import { StationId } from "@/types";

const List = async ({ stationId }: { stationId: StationId }) => {
	const t = await getScopedI18n(`${stationId}.accessPassport`);

	const content = [
		{ label: t("parking") },
		{ label: t("waitingRooms") },
		{ label: t("stairsAndEl") },
		{ label: t("restRooms") },
		{ label: t("medicalStations") },
		{ label: t("cafeAndBuffets") },
		{ label: t("toilets") },
		{ label: t("apronsAndPlatforms") },
	];

	return (
		<ul className="grid grid-cols-3 gap-x-5 gap-y-[22px] text-white pt-16">
			{content.map((item, index) => (
				<Card key={index} label={item.label} />
			))}
		</ul>
	);
};

const Card = ({ label }: { label: string }) => {
	return (
		<li className="bg-red h-40 w-full flex justify-start items-end pl-[22px] pb-[21px]">
			<span className="text-[20px] font-bold">{label}</span>
		</li>
	);
};

export default List;

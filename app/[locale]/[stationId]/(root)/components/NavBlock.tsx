import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

import BellIcon from "@/components/icons/BellIcon";
import TabloIcon from "@/components/icons/TabloIcon";
import TrainIcon from "@/components/icons/TrainIcon";
import CatalogIcon from "@/components/icons/CatalogIcon";
import PassportIcon from "@/components/icons/PassportIcon";
import LocationIcon from "@/components/icons/LocationIcon";

import { StationId } from "@/types";

const NavBlock = async ({ stationId }: { stationId: StationId }) => {
	const t = await getScopedI18n(`${stationId}.home`);

	const routes = [
		{
			label: t("aboutStation"),
			href: `${stationId}/about`,
			icon: <TrainIcon className="w-[60px] h-[60px] stroke-white" />,
		},
		{
			label: t("accessPassport"),
			href: `${stationId}/passport`,
			icon: <PassportIcon className="w-[60px] h-[60px] stroke-white" />,
		},
		{
			label: t("stationMap"),
			href: `${stationId}/map`,
			icon: <LocationIcon className="w-[60px] h-[60px] stroke-white" />,
		},
		{
			label: t("serviceCatalog"),
			href: `${stationId}/catalog`,
			icon: <CatalogIcon className="w-[60px] h-[60px] stroke-white" />,
		},
		{
			label: t("onlineBoard"),
			href: `${stationId}/tablo`,
			icon: <TabloIcon className="w-[60px] h-[60px] stroke-white" />,
		},
		{
			label: t("videoHelp"),
			href: `${stationId}/help`,
			icon: <BellIcon className="w-[60px] h-[60px] stroke-white" />,
		},
	];

	return (
		<div className="w-full px-10 pt-[140px] grid grid-cols-2 gap-5">
			{routes.map((card) => (
				<Card
					key={card.href}
					label={card.label}
					href={card.href}
					icon={card.icon}
				/>
			))}
		</div>
	);
};

const Card = ({
	label,
	href,
	icon,
}: { label: string; href: string; icon: React.ReactNode }) => {
	return (
		<Link
			href={href}
			className="bg-red text-white text-[30px] font-bold w-full h-[220px] flex flex-col items-center justify-center gap-[34px] rounded-[40px] z-10"
		>
			{icon}
			<span>{label}</span>
		</Link>
	);
};

export default NavBlock;

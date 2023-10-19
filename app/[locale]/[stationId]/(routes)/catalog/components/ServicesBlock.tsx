import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

import FastIcon from "@/components/icons/FastIcon";
import LupaIcon from "@/components/icons/LupaIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import KassaIcon from "@/components/icons/KassaIcon";
import TicketIcon from "@/components/icons/TicketIcon";

import { StationId } from "@/types";

const ServicesBlock = async ({ stationId }: { stationId: StationId }) => {
	const t = await getScopedI18n(`${stationId}.serviceCatalog`);

	const routes = [
		{
			label: t("ticketsBuyCash"),
			href: "/catalog/kassa",
			icon: <KassaIcon className="w-10 h-10 stroke-white" />,
		},
		{
			label: t("ticketsBuyPrint"),
			href: "/catalog",
			icon: <TicketIcon className="w-10 h-10 stroke-white" />,
		},
		{
			label: t("fastTrack"),
			href: "/catalog",
			icon: <FastIcon className="w-10 h-10 stroke-white" />,
		},
		{
			label: t("otherServices"),
			href: "/catalog",
			icon: <LupaIcon className="w-10 h-10 stroke-white" />,
		},
		{
			label: t("otherServices"),
			href: "/catalog",
			icon: <VideoIcon className="w-10 h-10 stroke-white" />,
		},
	];

	return (
		<div className="pt-10 gap-5 grid grid-cols-3">
			{routes.map((route) => (
				<ServiceCard
					key={route.href}
					label={route.label}
					href={route.href}
					icon={route.icon}
				/>
			))}
		</div>
	);
};

const ServiceCard = ({
	label,
	href,
	icon,
}: { label: string; href: string; icon: React.ReactNode }) => {
	return (
		<Link
			href={href}
			className="w-full h-[220px] bg-red text-white flex flex-col justify-between items-start pl-[22px] pt-5 pb-6 text-left"
		>
			{icon}
			<span className="text-[20px] font-bold max-w-[225px] leading-[25px]">
				{label}
			</span>
		</Link>
	);
};

export default ServicesBlock;

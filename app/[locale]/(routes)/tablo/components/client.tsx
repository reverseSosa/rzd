"use client";

import { format } from "date-fns";
import { enUS, ru } from "date-fns/locale";

import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import RouteItem, { RouteItemProps } from "@/components/ui/RouteItem";
import { useState } from "react";

const TabloClient = () => {
	const [showGone, setShowGone] = useState(false);
	const locale = useCurrentLocale();
	const t = useScopedI18n("onlineTablo");

	const date = new Date();

	const trains = 24;

	const routes: RouteItemProps[] = [
		{
			name: "Москва - Псков",
			dateTime: 1695616369000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695616369000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695972769000,
			ticketCode: "228B",
		},
	];

	return (
		<div className="pt-[220px] pl-[100px] pr-20 w-full">
			<div className="fixed top-[280px] bg-white left-0 w-full h-80 pt-[72px] flex flex-col gap-[60px] pl-[100px] pr-20">
				<h1 className="text-[40px] font-bold text-center">
					<span className="text-red mr-3">{t("departure")}</span>
					{format(date, "dd MMMM, eeee", {
						locale: locale === "ru" ? ru : enUS,
					})}
				</h1>
				<button
					onClick={() => setShowGone(!showGone)}
					className="bg-[#F6F6F6] w-full flex justify-center items-center h-[60px]"
				>
					{showGone ? t("hideGone") : t("showGone")} (
					{t("trains", { count: trains })})
				</button>
			</div>
			<ul className="pt-[100px] flex flex-col gap-5 w-full">
				{routes
					.filter((route) => {
						if (showGone) {
							return route;
						} else if (route.dateTime > Date.now()) {
							return route;
						}
					})
					.map((route) => (
						<RouteItem
							name={route.name}
							dateTime={route.dateTime}
							ticketCode={route.ticketCode}
						/>
					))}
			</ul>
		</div>
	);
};

export default TabloClient;

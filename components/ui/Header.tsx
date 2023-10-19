"use client";

import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { useCurrentLocale } from "@/locales/client";

import RzdLogo from "@/components/icons/RzdLogo";
import WeatherIcon from "@/components/icons/WeatherIcon";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
const Clock = dynamic(() => import("@/components/ui/Clock"), { ssr: false });

const Header = () => {
	const [temp, setTemp] = useState(0);
	const pathname = usePathname();
	const locale = useCurrentLocale();
	const params = useParams();

	useEffect(() => {
		const fetchWeather = async () => {
			const res = await axios.post("/api/weather", {
				lat: 55.77594,
				lon: 37.655504,
			});
			const data = res.data;

			if (data && data.fact && data.fact.temp) {
				setTemp(data.fact.temp);
			} else {
				setTemp(0);
			}
		};
		fetchWeather();
	}, []);

	return (
		<>
			<div
				className={cn(
					"bg-red w-full h-[280px] fixed z-30 top-0 left-0",
					pathname === `/${locale}/${params.stationId}` && "bg-transparent",
				)}
			/>
			<header
				className={cn(
					"pt-24 p-20 flex justify-between items-center fixed top-0 w-full h-[280px] z-[80]",
					pathname === `/${locale}/${params.stationId}` && "bg-transparent",
				)}
			>
				<div
					className={cn(
						"flex flex-col relative z-50",
						pathname === `/${locale}/${params.stationId}`
							? "text-black"
							: "text-white",
					)}
				>
					<Clock className="text-[60px] font-bold" />
					<div className="text-[30px] font-bold flex items-center">
						<p className="h-[37px]">{`${temp}°`}</p>
						<WeatherIcon
							className={cn(
								"h-7 w-7 ml-0.5 relative z-50",
								pathname === `/${locale}/${params.stationId}`
									? "stroke-red"
									: "stroke-white",
							)}
						/>
					</div>
				</div>
				<Link href={`/${params.stationId}`}>
					<RzdLogo
						className={cn(
							"hover:opacity-70 transition-all duration-150 ease-in relative z-50",
							pathname === `/${locale}/${params.stationId}`
								? "fill-red hover:fill-black"
								: "fill-white",
						)}
					/>
				</Link>
				<LanguageSwitcher />
			</header>
		</>
	);
};

export default Header;

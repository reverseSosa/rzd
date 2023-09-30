"use client";

import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

	useEffect(() => {
		const fetchWeather = async () => {
			const res = await axios.get("/api/weather");
			const data = res.data;

			console.log(data);
			setTemp(data.fact.temp);
		};
		fetchWeather();
	}, []);

	return (
		<>
			<div
				className={cn(
					"bg-red w-full h-[280px] fixed z-30 top-0 left-0",
					pathname === `/${locale}` && "bg-transparent",
				)}
			/>
			<header
				className={cn(
					"pt-24 p-20 flex justify-between items-center fixed top-0 w-full h-[280px] z-[80]",
					pathname === `/${locale}` && "bg-transparent",
				)}
			>
				<div
					className={cn(
						"flex flex-col relative z-50",
						pathname === `/${locale}` ? "text-black" : "text-white",
					)}
				>
					<Clock className="text-[60px] font-bold" />
					<div className="text-[30px] font-bold flex items-center">
						<p className="h-[37px]">{`${temp}°`}</p>
						<WeatherIcon
							className={cn(
								"h-7 w-7 ml-0.5 relative z-50",
								pathname === `/${locale}` ? "stroke-red" : "stroke-white",
							)}
						/>
					</div>
				</div>
				<Link href="/">
					<RzdLogo
						className={cn(
							"hover:opacity-70 transition-all duration-150 ease-in relative z-50",
							pathname === `/${locale}`
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

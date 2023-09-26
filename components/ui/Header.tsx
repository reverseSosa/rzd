"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useCurrentLocale } from "@/locales/client";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Clock from "@/components/ui/Clock";
import RzdLogo from "@/components/icons/RzdLogo";
import WeatherIcon from "@/components/icons/WeatherIcon";

const Header = () => {
	const pathname = usePathname();
	const locale = useCurrentLocale();

	const weather = 23;

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
						<p className="h-[37px]">{`${weather}°`}</p>
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

"use client";

import { useSpring, animated } from "@react-spring/web";

import { cn } from "@/lib/utils";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
	const pathname = usePathname();
	const locale = useCurrentLocale();
	const changeLocale = useChangeLocale();

	const [localeState, setLocaleState] = useState<"ru" | "en">(locale);

	const switchAnimation = useSpring({
		transform: localeState === "en" ? "translateX(100%)" : "translateX(0%)",
		config: { tension: 210, friction: 20 },
	});

	return (
		<div
			className={cn(
				"text-[20px] font-normal flex w-40 h-[60px] cursor-pointer relative z-50",
				pathname === `/${locale}` ? "bg-black/10" : "bg-white/[0.32]",
			)}
		>
			<div
				onClick={() => {
					changeLocale("ru");
					setLocaleState("ru");
				}}
				className={cn(
					"text-black/50 text-center h-full w-1/2 flex items-center grow justify-center transition-colors duration-150",
					pathname !== `/${locale}` && "text-white/50",
					locale === "ru" && "text-white",
					locale === "ru" && pathname !== `/${locale}` && "text-black/60",
				)}
			>
				<p className="z-10">Рус</p>
			</div>
			<div
				onClick={() => {
					changeLocale("en");
					setLocaleState("en");
				}}
				className={cn(
					"text-black/50 text-center h-full w-1/2 flex items-center grow justify-center transition-colors duration-150",
					pathname !== `/${locale}` && "text-white/50",
					locale === "en" && "text-white",
					locale === "en" && pathname !== `/${locale}` && "text-black/60",
				)}
			>
				<p className="z-10">Eng</p>
			</div>
			<animated.div
				style={switchAnimation}
				className={cn(
					"w-1/2 h-full absolute top-0 left-0 z-0",
					pathname === `/${locale}` ? "bg-red" : "bg-white",
				)}
			/>
		</div>
	);
};

export default LanguageSwitcher;

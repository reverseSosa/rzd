import "@/styles/globals.css";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/ui/Header";
import LocaleProvider from "@/providers/LocaleProvider";
import MapProvider from "@/providers/MapProvider";

const Screensaver = dynamic(() => import("@/components/ui/Screensaver"), {
	ssr: false,
});

const russianRail = localFont({
	src: [
		{
			path: "../RussianRail G Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../RussianRail G Pro Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../RussianRail G Pro Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-rail",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ленинградский Вокзал РЖД",
	description: "Ленинградский Вокзал РЖД",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={russianRail.variable}>
			<body>
				<MapProvider>
					<LocaleProvider>
						<Header />
						<Screensaver />
						{children}
					</LocaleProvider>
				</MapProvider>
			</body>
		</html>
	);
}

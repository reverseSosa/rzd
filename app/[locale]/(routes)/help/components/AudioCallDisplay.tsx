"use client";

import { useEffect, useState } from "react";

import { useScopedI18n } from "@/locales/client";
import RzdLogo from "@/components/icons/RzdLogo";
import HeadPhonesIcon from "@/components/icons/HeadPhonesIcon";
import AudioIcon from "@/components/icons/AudioIcon";

const AudioCallDisplay = ({
	name,
	onEnd,
}: { name: string; onEnd?: () => void }) => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (seconds === 60) {
			setMinutes((prevMinutes) => prevMinutes + 1);
			setSeconds(0);
		}
	}, [seconds]);

	const t = useScopedI18n("videoHelp");

	return (
		<div className="fixed w-[1080px] h-[1920px] top-0 left-1/2 translate-x-[-50%] z-[50] bg-red">
			<div className="fixed top-0 left-0 w-full h-[280px] flex justify-center items-center bg-transparent">
				<RzdLogo className="fill-red" />
			</div>
			<AudioIcon className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-30" />
			<div className="absolute w-full flex flex-col justify-center bottom-20 text-white px-[100px]">
				<h2 className="text-[40px]">{t("operator")}</h2>
				<h1 className="leading-[86px] text-[94px] font-bold">{name}</h1>
				<button
					onClick={onEnd}
					className="mt-[202px] w-full bg-white rounded-[80px] h-40 flex items-center pl-20 overflow-hidden"
				>
					<div className="flex items-center gap-7 grow">
						<HeadPhonesIcon className="h-[45px] w-[45px] stroke-red" />
						<h3 className="text-[30px] font-bold leading-[30px] text-black">
							{t("endCall")}
						</h3>
					</div>
					<div className="w-[260px] h-full bg-[#C20000] flex justify-center items-center">
						<p className="text-[50px] font-bold leading-[51px] text-white">
							{minutes.toString().padStart(2, "0")}:
							{seconds.toString().padStart(2, "0")}
						</p>
					</div>
				</button>
			</div>
		</div>
	);
};

export default AudioCallDisplay;

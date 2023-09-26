"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useScopedI18n } from "@/locales/client";
import RzdLogo from "@/components/icons/RzdLogo";
import HeadPhonesIcon from "@/components/icons/HeadPhonesIcon";

import rabotnikSecond from "@/public/rabotnikSecond.png";

const VideoCallDisplay = ({
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
		<div className="fixed w-[1080px] h-[1920px] top-0 left-0 z-[80] bg-white">
			<div className="fixed top-0 left-0 w-full h-[280px] flex justify-center items-center bg-transparent">
				<RzdLogo className="fill-red" />
			</div>
			<Image
				src={rabotnikSecond}
				alt="telochka"
				style={{ objectFit: "cover" }}
				className="absolute top-32 left-[236px]"
			/>
			<div className="absolute w-full flex flex-col justify-center bottom-20 text-white px-[100px]">
				<h2 className="text-[40px]">{t("operator")}</h2>
				<h1 className="leading-[86px] text-[94px] font-bold">{name}</h1>
				<button
					onClick={onEnd}
					className="mt-[82px] w-full bg-red rounded-[80px] h-40 flex items-center pl-20 overflow-hidden"
				>
					<div className="flex items-center gap-7 grow">
						<HeadPhonesIcon className="h-[45px] w-[45px] stroke-white" />
						<h3 className="text-[30px] font-bold leading-[30px]">
							{t("endCall")}
						</h3>
					</div>
					<div className="w-[260px] h-full bg-[#C20000] flex justify-center items-center">
						<p className="text-[50px] font-bold leading-[51px]">
							{minutes.toString().padStart(2, "0")}:
							{seconds.toString().padStart(2, "0")}
						</p>
					</div>
				</button>
			</div>
		</div>
	);
};

export default VideoCallDisplay;

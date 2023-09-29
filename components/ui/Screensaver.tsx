"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import fox from "@/public/fox.png";

const Screensaver = () => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	const [visible, setVisible] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const handleInteraction = () => {
			setVisible(false);
		};

		const handleInactivity = () => {
			router.push("/");
			setVisible(true);
		};

		window.addEventListener("mousemove", handleInteraction);
		window.addEventListener("touchmove", handleInteraction);

		const inactivityTimeout = setTimeout(handleInactivity, 60000);

		return () => {
			window.removeEventListener("mousemove", handleInteraction);
			window.removeEventListener("touchmove", handleInteraction);
			clearTimeout(inactivityTimeout);
		};
	});

	return (
		<>
			{visible && (
				<div className="fixed top-0 left-0 h-full w-full z-[120]">
					<video
						className="absolute top-0 left-0 w-full h-auto"
						id="video_banner"
						preload="auto"
						autoPlay
						loop
						playsInline
						muted
						src="/MCD_Ivolga.webm"
					/>
					<Image
						src={fox}
						alt="fox"
						className="absolute left-0 bottom-[0px] scale-[0.8]"
					/>
				</div>
			)}
		</>
	);
};

export default Screensaver;

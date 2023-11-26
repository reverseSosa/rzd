"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import fox from "@/public/fox.png";

const Screensaver = () => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	const [visible, setVisible] = useState(true);

	const router = useRouter();

	const params = useParams();

	useEffect(() => {
		const handleInteraction = () => {
			setVisible(false);
		};

		const handleInactivity = () => {
			router.push(`/${params.stationId}`);
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
				<div className="fixed top-0 left-0 h-full w-full z-[120] bg-black/80 backdrop-blur-md">
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
					<video
						className="absolute bottom-20 left-0 w-full h-auto"
						id="video_lis"
						preload="auto"
						autoPlay
						loop
						playsInline
						muted
						src="/lis3d.webm"
					/>
				</div>
			)}
		</>
	);
};

export default Screensaver;

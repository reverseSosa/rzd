"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { useScopedI18n } from "@/locales/client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import HeadPhonesIcon from "@/components/icons/HeadPhonesIcon";

const AudioCallDisplay = dynamic(() => import("./AudioCallDisplay"));

const AudioButton = () => {
	const [open, setOpen] = useState(false);
	const [call, setCall] = useState(false);

	const t = useScopedI18n("videoHelp");

	const onChange = (open: boolean) => {
		if (!open) {
			setOpen(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onChange}>
			{call && <AudioCallDisplay name="Наталья" onEnd={() => setCall(false)} />}
			<DialogTrigger asChild>
				<button
					onClick={() => setOpen(true)}
					className="bg-white flex justify-center items-center gap-[30px] rounded-[80px] text-[30px] leading-[30px] font-bold text-black/90 w-full h-[140px]"
				>
					<HeadPhonesIcon className="w-[46px] h-[46px] stroke-red" />
					{t("audioCall")}
				</button>
			</DialogTrigger>
			<DialogContent className="bg-white bottom-0 w-[880px]">
				<h1 className="flex justify-center items-center text-[30px] font-bold leading-[30px] gap-[30px] mb-[46px]">
					<HeadPhonesIcon className="stroke-red h-[45px] w-[45px]" />
					{t("audioCall")}
				</h1>
				<div className="flex flex-col w-full gap-5">
					<button
						onClick={() => {
							setCall(true);
							setOpen(false);
						}}
						className="bg-red text-white/90 border border-[#707070] rounded-full leading-[30px] text-[20px] flex items-center justify-center w-full h-[60px] font-normal"
					>
						{t("navHelp")}
					</button>
					<button
						onClick={() => {
							setCall(true);
							setOpen(false);
						}}
						className="bg-red text-white/90 border border-[#707070] rounded-full leading-[30px] text-[20px] flex items-center justify-center w-full h-[60px] font-normal"
					>
						{t("searchApron")}
					</button>
					<button
						onClick={() => {
							setCall(true);
							setOpen(false);
						}}
						className="bg-red text-white/90 border border-[#707070] rounded-full leading-[30px] text-[20px] flex items-center justify-center w-full h-[60px] font-normal"
					>
						{t("anotherOption")}
					</button>
					<button
						onClick={() => setOpen(false)}
						className="bg-[#A4A4A4] text-white/90 border border-[#707070] rounded-full leading-[30px] text-[20px] flex items-center justify-center w-full h-[60px] font-normal"
					>
						{t("back")}
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AudioButton;

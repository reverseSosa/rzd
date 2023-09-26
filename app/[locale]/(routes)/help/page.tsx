import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { getScopedI18n } from "@/locales/server";

import HeadPhonesIcon from "@/components/icons/HeadPhonesIcon";
import RzdLogoBig from "@/components/icons/RzdLogoBig";

const VideoCallDisplay = dynamic(() => import("./components/VideoCallDisplay"));
const AudioCallDisplay = dynamic(() => import("./components/AudioCallDisplay"));

import rabotnikFirst from "@/public/rabotnikFirst.png";

const HelpPage = async () => {
	const t = await getScopedI18n("videoHelp");
	return (
		<main className="flex min-h-screen flex-col items-center pt-[300px] text-center bg-red px-[100px] pb-[100px]">
			<p className="text-white text-[20px] leading-[30px] text-center max-w-[800px]">
				{t("firstP")}
			</p>
			<div className="h-[893px] w-full relative flex justify-center items-end">
				<RzdLogoBig className="absolute fill-white left-1/2 translate-x-[-50%] top-[102px] z-10" />
				<Image
					src={rabotnikFirst}
					alt="baba"
					className="absolute z-20 bottom-[-120px] left-1/2 translate-x-[-50%]"
				/>
			</div>
			<div className="flex flex-col gap-[23px] w-full z-30">
				<button className="bg-white flex justify-center items-center gap-[30px] rounded-[80px] text-[30px] leading-[30px] font-bold text-black/90 w-full h-[140px]">
					<HeadPhonesIcon className="w-[46px] h-[46px] stroke-red" />
					{t("audioCall")}
				</button>
				<button className="bg-white flex justify-center items-center gap-[30px] rounded-[80px] text-[30px] leading-[30px] font-bold text-black/90 w-full h-[140px]">
					<HeadPhonesIcon className="w-[46px] h-[46px] stroke-red" />
					{t("videoCall")}
				</button>
			</div>
			<Link
				href="/"
				className="w-full border border-white text-white/90 text-[30px] leading-[30px] font-bold flex items-center justify-center h-[100px] mt-20"
			>
				{t("main")}
			</Link>
		</main>
	);
};

export default HelpPage;

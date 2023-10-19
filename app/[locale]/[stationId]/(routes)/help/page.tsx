import Image from "next/image";
import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

import RzdLogoBig from "@/components/icons/RzdLogoBig";

import VideoButton from "./components/VideoButton";
import AudioButton from "./components/AudioButton";

import rabotnikFirst from "@/public/rabotnikFirst.png";

import { StationId } from "@/types";

const HelpPage = async ({ params }: { params: { stationId: StationId } }) => {
	const t = await getScopedI18n(`${params.stationId}.videoHelp`);

	return (
		<main className="flex min-h-screen flex-col items-center pt-[300px] text-center bg-red px-[100px] pb-[100px]">
			<p className="text-white text-[20px] leading-[30px] text-center max-w-[800px] block z-[90]">
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
			<div className="flex flex-col gap-[23px] w-full z-[90]">
				<AudioButton stationId={params.stationId} />
				<VideoButton stationId={params.stationId} />
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

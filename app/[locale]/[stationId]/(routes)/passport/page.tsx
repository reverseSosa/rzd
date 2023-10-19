import Image from "next/image";

import { getScopedI18n } from "@/locales/server";

import MainButton from "@/components/ui/MainButton";
import ToTopButton from "@/components/ui/ToTopButton";

import List from "./components/List";
import Slider from "./components/Slider";

import passportImage from "@/public/babka.png";

import { StationId } from "@/types";

const PassportPage = async ({
	params,
}: { params: { stationId: StationId } }) => {
	const t = await getScopedI18n(`${params.stationId}.accessPassport`);

	return (
		<main className="flex min-h-screen flex-col items-center">
			<Image
				src={passportImage}
				alt="babka"
				className="z-[40] block"
				priority
			/>
			<div className="bg-red w-full h-[180px] flex items-center justify-start text-white px-[100px]">
				<h1 className="text-[40px] font-bold">
					{t("accessPassport")}
					<span className="text-[20px] font-normal ml-3">{t("needInfo")}</span>
				</h1>
			</div>
			<div className="px-[100px] pt-[60px] pb-[54px]">
				<p className="text-left text-[20px] leading-[35px]">{t("firstP")}</p>
				<List stationId={params.stationId} />
				<p className="text-left text-[20px] leading-[35px] pt-20">
					{t("secondP")}
				</p>
			</div>
			<Slider />
			<div className="px-[100px] pt-[94px] pb-[84px]">
				<p className="text-[20px] leading-[35px] text-left mb-[86px]">
					{t("firstP")}
				</p>
				<div className="flex flex-col gap-5">
					<ToTopButton />
					<MainButton />
				</div>
			</div>
		</main>
	);
};

export default PassportPage;

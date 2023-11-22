import { getScopedI18n } from "@/locales/server";

import MainButton from "@/components/ui/MainButton";
import TrainIcon from "@/components/icons/TrainIcon";
import ToTopButton from "@/components/ui/ToTopButton";

import Slider from "./components/Slider";
import MapClient from "./components/client";

import { StationId } from "@/types";

const AboutPage = async ({
	params,
}: { params: { locale: "ru" | "en"; stationId: StationId } }) => {
	const t = await getScopedI18n(`${params.stationId}.aboutStation`);

	try {
		const data = await fetch(
			`https://rzd.bpium.ru/api/webrequest/station?id=${params.stationId}`,
			{ method: "GET" },
		).then((res) => res.json());

		const images = data.values["12"].map((image: any) => image.url);

		return (
			<main className="flex min-h-screen flex-col items-center">
				<MapClient stationId={params.stationId} />
				<div className="bg-red w-full px-[100px] py-20 flex items-center gap-[60px] text-white">
					<div className="h-full py-14 px-[50px] border border-white">
						<TrainIcon className="h-[60px] w-[60px] stroke-white" />
					</div>
					<div className="text-left h-full">
						<h2 className="text-[20px]">{t("railwayStation")}</h2>
						<h1 className="text-[40px] font-bold mt-2">
							{params.locale === "ru" ? data.values["2"] : data.values["3"]}
						</h1>
						<span className="text-[20px] font-bold leading-[30px] mt-4">
							+7 800 775-00-00
						</span>
						<p className="text-[15px] mt-2 font-normal">
							{data.values["8"].value}
						</p>
					</div>
				</div>
				<div className="px-[100px] pt-[60px] pb-[91px]">
					<div className="text-[15px] leading-[25px] text-left flex flex-col gap-8">
						<p className="font-bold">{t("mainP")}</p>
						<p>{t("secondP")}</p>
						<p>{t("thirdP")}</p>
						<p>{t("fourthP")}</p>
						<p>{t("fifthP")}</p>
						<p>{t("sixthP")}</p>
						<p>{t("seventhP")}</p>
					</div>
				</div>
				<Slider images={images} />
				<div className="px-[100px] pt-20 pb-[66px]">
					<div className="text-[15px] leading-[25px] text-left flex flex-col gap-8 mb-[54px]">
						<p className="font-bold">{t("mainP")}</p>
						<p>{t("secondP")}</p>
						<p>{t("thirdP")}</p>
						<p>{t("fourthP")}</p>
						<p>{t("fifthP")}</p>
						<p>{t("sixthP")}</p>
						<p>{t("seventhP")}</p>
					</div>
					<div className="flex flex-col gap-5">
						<ToTopButton />
						<MainButton />
					</div>
				</div>
			</main>
		);
	} catch (error) {
		console.log(error);

		return (
			<main className="flex min-h-screen flex-col items-center">
				<MapClient stationId={params.stationId} />
				<div className="bg-red w-full px-[100px] py-20 flex items-center gap-[60px] text-white">
					<div className="h-full py-14 px-[50px] border border-white">
						<TrainIcon className="h-[60px] w-[60px] stroke-white" />
					</div>
					<div className="text-left h-full">
						<h2 className="text-[20px]">{t("railwayStation")}</h2>
						<h1 className="text-[40px] font-bold mt-2">Какой-то вокзал</h1>
						<span className="text-[20px] font-bold leading-[30px] mt-4">
							+7 800 775-00-00
						</span>
						<p className="text-[15px] mt-2 font-normal">Очень крутой</p>
					</div>
				</div>
				<div className="px-[100px] pt-[60px] pb-[91px]">
					<div className="text-[15px] leading-[25px] text-left flex flex-col gap-8">
						<p className="font-bold">{t("mainP")}</p>
						<p>{t("secondP")}</p>
						<p>{t("thirdP")}</p>
						<p>{t("fourthP")}</p>
						<p>{t("fifthP")}</p>
						<p>{t("sixthP")}</p>
						<p>{t("seventhP")}</p>
					</div>
				</div>
				<Slider images={[]} />
				<div className="px-[100px] pt-20 pb-[66px]">
					<div className="text-[15px] leading-[25px] text-left flex flex-col gap-8 mb-[54px]">
						<p className="font-bold">{t("mainP")}</p>
						<p>{t("secondP")}</p>
						<p>{t("thirdP")}</p>
						<p>{t("fourthP")}</p>
						<p>{t("fifthP")}</p>
						<p>{t("sixthP")}</p>
						<p>{t("seventhP")}</p>
					</div>
					<div className="flex flex-col gap-5">
						<ToTopButton />
						<MainButton />
					</div>
				</div>
			</main>
		);
	}
};

export default AboutPage;

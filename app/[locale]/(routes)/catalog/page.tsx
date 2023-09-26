import Image from "next/image";

import { getScopedI18n } from "@/locales/server";

import ServicesBlock from "./components/ServicesBlock";
import ToTopButton from "@/components/ui/ToTopButton";
import MainButton from "@/components/ui/MainButton";

import servicesImage from "@/public/servicesImage.png";

const CatalogPage = async () => {
	const t = await getScopedI18n("serviceCatalog");
	return (
		<main className="flex min-h-screen flex-col items-center pt-[280px] text-center">
			<div className="p-[100px] pb-20">
				<h1 className="text-[40px] font-bold text-left">{t("services")}</h1>
				<p className="text-[20px] leading-[35px] text-left mt-[88px]">
					{t("firstP")}
				</p>
				<ServicesBlock />
			</div>
			<Image src={servicesImage} alt="services-image" />
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
export default CatalogPage;

import Image from "next/image";
import Link from "next/link";

import ticketBuy from "@/public/TicketBuy.png";
import { getScopedI18n } from "@/locales/server";

const KassaPage = async () => {
	const t = await getScopedI18n("buyTicketCash");

	return (
		<main className="flex min-h-screen flex-col items-center">
			<Image src={ticketBuy} alt="kassa" className="block z-40" />
			<div className="p-[100px]">
				<h1 className="text-[40px] text-center font-bold flex items-center">
					{t("buyTicketCash")}
				</h1>
				<p className="text-[20px] leading-[35px] mt-[74px]">{t("firstP")}</p>
				<p className="text-[20px] leading-[35px] mt-10">{t("secondP")}</p>
				<div className="flex flex-col gap-5 mt-20">
					<Link
						href="/map"
						className="flex items-center justify-center h-[100px] bg-[#EEEEEE]/[0.56] text-[30px] font-bold w-full"
					>
						{t("lookAtMap")}
					</Link>
					<Link
						href="/catalog"
						className="flex items-center justify-center h-[100px] bg-red/80 text-[30px] text-white/90 font-bold w-full"
					>
						{t("goBack")}
					</Link>
				</div>
			</div>
		</main>
	);
};

export default KassaPage;

"use client";

import { useI18n } from "@/locales/client";

const ToTopButton = () => {
	const t = useI18n();

	const isBrowser = () => typeof window !== "undefined";

	const scrollToTop = () => {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<button
			onClick={scrollToTop}
			className="bg-[#EEEEEE]/[0.56] text-black font-bold text-[30px] text-center w-full leading-[30px] h-[100px]"
		>
			{t("toTop")}
		</button>
	);
};

export default ToTopButton;

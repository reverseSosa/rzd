"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { HtmlHTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { useI18n } from "@/locales/client";

interface MainButtonprops extends HtmlHTMLAttributes<HTMLAnchorElement> {}
const MainButton: React.FC<MainButtonprops> = async (props) => {
	const t = useI18n();

	const params = useParams();

	return (
		<Link
			href={`/${params.stationId}`}
			className={cn(
				"w-full bg-red opacity-80 text-center h-[100px] flex items-center justify-center",
				props.className,
			)}
			{...props}
		>
			<span className="text-white/90 text-[30px] font-bold leading-[30px]">
				{t("main")}
			</span>
		</Link>
	);
};

export default MainButton;

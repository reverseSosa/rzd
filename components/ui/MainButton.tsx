import { HtmlHTMLAttributes } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";

interface MainButtonprops extends HtmlHTMLAttributes<HTMLAnchorElement> {}
const MainButton: React.FC<MainButtonprops> = async (props) => {
	const t = await getI18n();

	return (
		<Link
			href="/"
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

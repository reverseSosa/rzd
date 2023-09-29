import MainButton from "@/components/ui/MainButton";
import ToTopButton from "@/components/ui/ToTopButton";
import TabloClient from "./components/client";

const TabloPage = async () => {
	return (
		<main className="flex min-h-screen flex-col items-center pt-[280px] text-center">
			<TabloClient />
			<div className="px-[100px] pt-[94px] pb-[84px] w-full flex flex-col gap-5">
				<ToTopButton />
				<MainButton />
			</div>
		</main>
	);
};
export default TabloPage;

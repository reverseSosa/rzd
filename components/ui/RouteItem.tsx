export interface RouteItemProps {
	name: string;
	ticketCode: string;
	dateTime: EpochTimeStamp;
}

const RouteItem: React.FC<RouteItemProps> = ({
	name,
	ticketCode,
	dateTime,
}) => {
	const date = new Date(dateTime);
	return (
		<li className="flex w-full items-center">
			<span className="text-black/60 text-[30px]">
				{date.toLocaleTimeString("ru", {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</span>
			<span className="text-black font-bold text-[25px] leading-[35px] text-left pl-[85px] grow w-full">
				{name}
			</span>
			<div className="px-6 pt-3 pb-[11px] bg-red text-white text-[30px] text-center flex items-center justify-center">
				<span>{ticketCode}</span>
			</div>
		</li>
	);
};
export default RouteItem;

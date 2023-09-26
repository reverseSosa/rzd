import RouteItem, { RouteItemProps } from "@/components/ui/RouteItem";

const RoutesBlock = async () => {
	const routes: RouteItemProps[] = [
		{
			name: "Москва - Псков",
			dateTime: 1695674261000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695674261000,
			ticketCode: "228B",
		},
		{
			name: "Москва - Псков",
			dateTime: 1695674261000,
			ticketCode: "228B",
		},
	];

	return (
		<ul className="pl-[100px] pr-20 pt-[120px] flex flex-col gap-5 w-full">
			{routes.map((route, index) => (
				<RouteItem
					key={index}
					name={route.name}
					dateTime={route.dateTime}
					ticketCode={route.ticketCode}
				/>
			))}
		</ul>
	);
};

export default RoutesBlock;

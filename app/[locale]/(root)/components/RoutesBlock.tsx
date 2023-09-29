import RouteItem from "@/components/ui/RouteItem";
import { routes } from "@/lib/routes";

const RoutesBlock = async () => {
	const filteredRoutes = routes.filter((route) => route.dateTime > Date.now());

	const routesToDisplay = [
		filteredRoutes[0],
		filteredRoutes[1],
		filteredRoutes[2],
	];

	return (
		<ul className="pl-[100px] pr-20 pt-[120px] flex flex-col gap-5 w-full">
			{routesToDisplay.map((route, index) => (
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

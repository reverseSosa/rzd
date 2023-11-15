"use client";

import { Map, Placemark } from "@pbe/react-yandex-maps";

import { StationId } from "@/types";
import { coordinates } from "@/lib/coordinates";

const MapClient = ({ stationId }: { stationId: StationId }) => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	return (
		<Map
			defaultState={{
				center: coordinates[stationId].main,
				zoom: 20,
			}}
			className="w-full h-[900px] z-40"
		>
			<Placemark
				geometry={coordinates[stationId].main}
				options={{
					iconColor: "red",
				}}
			/>
		</Map>
	);
};

export default MapClient;

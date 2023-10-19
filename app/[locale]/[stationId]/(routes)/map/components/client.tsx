"use client";

import { Map, Placemark } from "@pbe/react-yandex-maps";

import { coordinates } from "@/lib/coordinates";

import { StationId } from "@/types";

const MapClient = ({ stationId }: { stationId: StationId }) => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	return (
		<Map
			defaultState={{
				center: coordinates[stationId].main,
				zoom: 20,
			}}
			style={{ height: "100%" }}
		>
			<Placemark
				geometry={coordinates[stationId].apron}
				options={{
					iconLayout: "default#image",
					iconImageHref: "/train.svg",
				}}
			/>
			<Placemark
				geometry={coordinates[stationId].kassa}
				options={{
					iconLayout: "default#image",
					iconImageHref: "/kassa.svg",
				}}
			/>
		</Map>
	);
};

export default MapClient;

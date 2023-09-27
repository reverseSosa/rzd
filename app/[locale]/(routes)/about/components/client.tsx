"use client";

import { Map, Placemark } from "@pbe/react-yandex-maps";

const MapClient = () => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	return (
		<Map
			defaultState={{
				center: [55.775933, 37.655502],
				zoom: 20,
			}}
			className="w-full h-[900px] z-40"
		>
			<Placemark
				geometry={[55.775933, 37.655502]}
				options={{
					iconColor: "red",
				}}
			/>
		</Map>
	);
};

export default MapClient;

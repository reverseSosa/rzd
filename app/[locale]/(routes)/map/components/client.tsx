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
			style={{ height: "100%" }}
		>
			<Placemark
				geometry={[55.777422, 37.654213]}
				options={{
					iconLayout: "default#image",
					iconImageHref: "/train.svg",
				}}
			/>
			<Placemark
				geometry={[55.776128, 37.65545]}
				options={{
					iconLayout: "default#image",
					iconImageHref: "/kassa.svg",
				}}
			/>
		</Map>
	);
};

export default MapClient;

"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapClient = () => {
	return (
		<YMaps>
			<Map
				defaultState={{
					center: [55.775933, 37.655502],
					zoom: 20,
					type: "yandex#satellite",
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
		</YMaps>
	);
};

export default MapClient;

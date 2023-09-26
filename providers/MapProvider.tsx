"use client";

import { YMaps } from "@pbe/react-yandex-maps";

const MapProvider = ({ children }: { children: React.ReactNode }) => {
	return <YMaps preload>{children}</YMaps>;
};

export default MapProvider;

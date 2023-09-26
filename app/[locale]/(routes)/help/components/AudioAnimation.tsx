"use client";

import React from "react";

const AudioAnimation = () => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	return (
		<div className="flex gap-[17px]">
			<div className="h-[50px]"></div>
		</div>
	);
};

export default AudioAnimation;

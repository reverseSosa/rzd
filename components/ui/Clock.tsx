import React, { useState, useEffect, HtmlHTMLAttributes } from "react";

interface ClockProps extends HtmlHTMLAttributes<HTMLSpanElement> {}

const Clock: React.FC<ClockProps> = (props) => {
	const isBrowser = () => typeof window !== "undefined";

	if (!isBrowser) return null;

	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => {
			clearInterval(timerID);
		};
	}, []);

	const tick = () => {
		setDate(new Date());
	};

	return (
		<span {...props}>
			{date.toLocaleTimeString("ru", {
				hour: "2-digit",
				minute: "2-digit",
			})}
		</span>
	);
};

export default Clock;

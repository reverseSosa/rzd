import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const TabloIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="66"
			height="52"
			viewBox="0 0 66 52"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M29.4946 2V49.2714M12.612 12.1296H19.3651M12.612 22.2592H19.3651M12.612 32.3887H19.3651M13.2873 49.2714H52.455C56.2371 49.2714 58.1283 49.2714 59.5727 48.5353C60.8433 47.888 61.8765 46.8548 62.5238 45.5842C63.2599 44.1397 63.2599 42.2485 63.2599 38.4665V12.8049C63.2599 9.02284 63.2599 7.13178 62.5238 5.68724C61.8765 4.41655 60.8433 3.38347 59.5727 2.73605C58.1283 2 56.2371 2 52.455 2H13.2873C9.50526 2 7.6142 2 6.16966 2.73605C4.89897 3.38347 3.86589 4.41655 3.21847 5.68724C2.48242 7.13178 2.48242 9.0228 2.48242 12.8049V38.4665C2.48242 42.2485 2.48242 44.1397 3.21847 45.5842C3.86589 46.8548 4.89897 47.888 6.16966 48.5353C7.6142 49.2714 9.50523 49.2714 13.2873 49.2714Z"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default TabloIcon;

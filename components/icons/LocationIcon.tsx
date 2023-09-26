import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const LocationIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="53"
			height="66"
			viewBox="0 0 53 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M26.3841 63C38.0508 51 49.7175 40.2547 49.7175 27C49.7175 13.7452 39.2708 3 26.3841 3C13.4975 3 3.05078 13.7452 3.05078 27C3.05078 40.2547 14.7174 51 26.3841 63Z"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M26.3846 37.0642C31.8126 37.0642 36.2126 32.6642 36.2126 27.2362C36.2126 21.8083 31.8126 17.4082 26.3846 17.4082C20.9566 17.4082 16.5566 21.8083 16.5566 27.2362C16.5566 32.6642 20.9566 37.0642 26.3846 37.0642Z"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default LocationIcon;

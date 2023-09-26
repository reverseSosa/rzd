import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const PrevIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="25"
			height="45"
			viewBox="0 0 25 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				opacity="0.8"
				d="M23 42.999L3 22.582L23 1.20703"
				stroke="white"
				strokeWidth="3"
			/>
		</svg>
	);
};

export default PrevIcon;

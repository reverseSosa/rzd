import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const NextIcon: React.FC<Props> = (props) => {
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
				d="M2 1.20752L22 21.6248L2 43"
				stroke="white"
				strokeWidth="3"
			/>
		</svg>
	);
};

export default NextIcon;

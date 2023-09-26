import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const LupaIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="35"
			height="35"
			viewBox="0 0 35 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15.6385 7.11442C20.3461 7.11442 24.1625 10.9308 24.1625 15.6385M25.2856 25.279L32.6865 32.6865M29.2769 15.6385C29.2769 23.1708 23.1708 29.2769 15.6385 29.2769C8.10614 29.2769 2 23.1708 2 15.6385C2 8.10614 8.10614 2 15.6385 2C23.1708 2 29.2769 8.10614 29.2769 15.6385Z"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default LupaIcon;

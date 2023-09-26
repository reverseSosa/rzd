import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const KassaIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M33.9238 28.8089L32.4293 17.5995C32.1929 15.8271 32.0748 14.9409 31.6527 14.2737C31.2807 13.6858 30.7467 13.2181 30.1147 12.9272C29.3976 12.597 28.5036 12.597 26.7155 12.597H8.70827C6.92025 12.597 6.02626 12.597 5.3091 12.9272C4.67719 13.2181 4.14303 13.6858 3.77113 14.2737C3.34906 14.9409 3.23091 15.8271 2.99459 17.5995L1.5 28.8089M33.9238 28.8089H1.5M33.9238 28.8089V31.3308C33.9238 32.3397 33.9238 32.8441 33.7275 33.2294C33.5547 33.5684 33.2793 33.8438 32.9403 34.0165C32.555 34.2129 32.0506 34.2129 31.0417 34.2129H4.38212C3.37329 34.2129 2.86886 34.2129 2.48354 34.0165C2.1446 33.8438 1.86904 33.5684 1.69633 33.2294C1.5 32.8441 1.5 32.3397 1.5 31.3308V28.8089M9.60596 18.001V18.019M15.0099 18.001V18.019M12.3079 23.4049V23.423M17.7119 23.4049V23.423M23.1159 23.4049V23.423M20.4139 18.001V18.019M25.8179 18.001V18.019M12.3079 12.597V7.19303M6.54371 7.19303H18.0722C18.5765 7.19303 18.8287 7.19303 19.0215 7.09486C19.191 7.00852 19.3288 6.87074 19.4151 6.70127C19.5132 6.5086 19.5132 6.2564 19.5132 5.75197V3.23012C19.5132 2.7257 19.5132 2.47349 19.4151 2.28082C19.3288 2.11136 19.191 1.97357 19.0215 1.88723C18.8287 1.78906 18.5765 1.78906 18.0722 1.78906H6.54371C6.03928 1.78906 5.78708 1.78906 5.59441 1.88723C5.42494 1.97357 5.28716 2.11136 5.20082 2.28082C5.10265 2.47349 5.10265 2.7257 5.10265 3.23012V5.75197C5.10265 6.2564 5.10265 6.5086 5.20082 6.70127C5.28716 6.87074 5.42494 7.00852 5.59441 7.09486C5.78708 7.19303 6.03928 7.19303 6.54371 7.19303Z"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default KassaIcon;

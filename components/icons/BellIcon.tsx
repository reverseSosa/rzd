import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const BellIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="66"
			height="66"
			viewBox="0 0 66 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M33.1162 23C41.4496 23 46.4496 26.3333 49.7829 33M33.1162 13C18.3886 13 6.44954 24.9391 6.44954 39.6667C6.44954 44.5237 7.74814 49.0777 10.0171 53M33.1162 13C47.8439 13 59.7829 24.9391 59.7829 39.6667C59.7829 44.5237 58.4842 49.0777 56.2152 53M33.1162 13C35.8775 13 38.1162 10.7614 38.1162 8C38.1162 5.23857 35.8775 3 33.1162 3C30.3549 3 28.1162 5.23857 28.1162 8C28.1162 10.7614 30.3549 13 33.1162 13ZM8.11621 63H58.1162C60.8775 63 63.1162 60.7613 63.1162 58C63.1162 55.2387 60.8775 53 58.1162 53H8.11621C5.35478 53 3.11621 55.2387 3.11621 58C3.11621 60.7613 5.35478 63 8.11621 63Z"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default BellIcon;

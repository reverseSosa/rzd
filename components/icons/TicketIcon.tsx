import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<SVGElement> {}
const TicketIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width="44"
			height="44"
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M8.66667 34.2218C9.59518 33.5244 10.7493 33.1111 12 33.1111C15.0682 33.1111 17.5556 35.5984 17.5556 38.6667C17.5556 39.9173 17.1423 41.0716 16.4448 42M35.3333 34.2218C34.4049 33.5244 33.2507 33.1111 32 33.1111C28.9318 33.1111 26.4444 35.5984 26.4444 38.6667C26.4444 39.9173 26.8578 41.0716 27.5551 42M35.3331 17.5554C37.5296 17.5537 38.6809 17.5258 39.5733 17.0711C40.4096 16.645 41.0896 15.9651 41.5156 15.1288C42 14.1781 42 12.9336 42 10.4444V9.11111C42 6.622 42 5.37742 41.5156 4.42671C41.0896 3.59042 40.4096 2.91051 39.5733 2.48442C38.6227 2 37.378 2 34.8889 2H9.11111C6.622 2 5.37742 2 4.42671 2.48442C3.59042 2.91051 2.91051 3.59042 2.48442 4.42671C2 5.37742 2 6.622 2 9.11111V10.4444C2 12.9336 2 14.1781 2.48442 15.1288C2.91051 15.9651 3.59042 16.645 4.42671 17.0711C5.31909 17.5258 6.47038 17.5537 8.66678 17.5554M35.3331 17.5554C35.3333 17.6991 35.3333 17.8471 35.3333 18V34.8889C35.3333 37.378 35.3333 38.6227 34.8489 39.5733C34.4229 40.4096 33.7429 41.0896 32.9067 41.5156C31.956 42 30.7113 42 28.2222 42H15.7778C13.2886 42 12.0441 42 11.0934 41.5156C10.2571 41.0896 9.57718 40.4096 9.15109 39.5733C8.66667 38.6227 8.66667 37.378 8.66667 34.8889V18C8.66667 17.8471 8.66667 17.6991 8.66678 17.5554M35.3331 17.5554C35.3316 15.3592 35.3036 14.208 34.8489 13.3156C34.4229 12.4793 33.7429 11.7994 32.9067 11.3733C31.956 10.8889 30.7113 10.8889 28.2222 10.8889H15.7778C13.2887 10.8889 12.0441 10.8889 11.0934 11.3733C10.2571 11.7994 9.57718 12.4793 9.15109 13.3156C8.6964 14.208 8.66849 15.3592 8.66678 17.5554M26.4444 22C26.4444 24.4547 24.4547 26.4444 22 26.4444C19.5453 26.4444 17.5556 24.4547 17.5556 22C17.5556 19.5453 19.5453 17.5556 22 17.5556C24.4547 17.5556 26.4444 19.5453 26.4444 22Z"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default TicketIcon;

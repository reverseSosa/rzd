import { RouteItemProps } from "@/components/ui/RouteItem";

const getDate = (hours: number, minutes: number): EpochTimeStamp => {
	const date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);

	const timestamp = date.getTime();

	return timestamp;
};

export const routes: RouteItemProps[] = [
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(0, 20),
		ticketCode: "020У",
	},
	{
		name: "Москва — Мурманск",
		dateTime: getDate(0, 41),
		ticketCode: "016А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(1, 9),
		ticketCode: "256А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(1, 20),
		ticketCode: "158А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(1, 48),
		ticketCode: "274А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(5, 35),
		ticketCode: "724В",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(5, 55),
		ticketCode: "754А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(7, 28),
		ticketCode: "756А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(7, 42),
		ticketCode: "758А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(9, 40),
		ticketCode: "760А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(9, 50),
		ticketCode: "762А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(13, 43),
		ticketCode: "768А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(13, 53),
		ticketCode: "770А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(13, 58),
		ticketCode: "728А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(15, 7),
		ticketCode: "826Ч",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(15, 30),
		ticketCode: "772А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(15, 40),
		ticketCode: "774А",
	},
	{
		name: "Москва — Петрозаводск",
		dateTime: getDate(16, 50),
		ticketCode: "160В",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(17, 30),
		ticketCode: "776А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(17, 40),
		ticketCode: "778А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(19, 40),
		ticketCode: "780А",
	},
	{
		name: "Москва — Выборг",
		dateTime: getDate(20, 10),
		ticketCode: "038А",
	},
	{
		name: "Москва — Псков",
		dateTime: getDate(20, 35),
		ticketCode: "010А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(20, 55),
		ticketCode: "784А",
	},
	{
		name: "Москва — Петрозаводск",
		dateTime: getDate(21, 13),
		ticketCode: "018А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(21, 40),
		ticketCode: "122А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(21, 55),
		ticketCode: "026А",
	},
	{
		name: "Москва — Великий Новгород",
		dateTime: getDate(22, 7),
		ticketCode: "042А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(22, 30),
		ticketCode: "028А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(22, 50),
		ticketCode: "006А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(23, 30),
		ticketCode: "004А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(23, 40),
		ticketCode: "054Ч",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(23, 55),
		ticketCode: "002А",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(0, 20),
		ticketCode: "020У",
	},
	{
		name: "Москва — Санкт-Петербург",
		dateTime: getDate(0, 41),
		ticketCode: "016А",
	},
];

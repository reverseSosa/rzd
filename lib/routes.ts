const getDate = (hours: number, minutes: number): EpochTimeStamp => {
	const date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);

	const timestamp = date.getTime();

	return timestamp;
};

export const routes = {
	"1": [
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(0, 17),
			ticketCode: "6802",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(0, 37),
			ticketCode: "6392",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(0, 57),
			ticketCode: "6394",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(1, 7),
			ticketCode: "6348",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(4, 27),
			ticketCode: "6502",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(5, 4),
			ticketCode: "7922",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(5, 13),
			ticketCode: "6702",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(5, 14),
			ticketCode: "6602",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(5, 20),
			ticketCode: "6504",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(5, 40),
			ticketCode: "6302",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(6, 17),
			ticketCode: "7902",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(6, 22),
			ticketCode: "7532",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(6, 27),
			ticketCode: "6304",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(6, 40),
			ticketCode: "6506",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(6, 51),
			ticketCode: "7924",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(6, 57),
			ticketCode: "6308",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(7, 13),
			ticketCode: "7536",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(7, 19),
			ticketCode: "6402",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(7, 27),
			ticketCode: "6306",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(7, 37),
			ticketCode: "6604",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(7, 47),
			ticketCode: "6508",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(7, 47),
			ticketCode: "7538",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(7, 57),
			ticketCode: "6346",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(7, 59),
			ticketCode: "7926",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 3),
			ticketCode: "7520",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 7),
			ticketCode: "6310",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 17),
			ticketCode: "6312",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(8, 27),
			ticketCode: "6404",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(8, 27),
			ticketCode: "7904",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 33),
			ticketCode: "7540",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 37),
			ticketCode: "6314",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(8, 42),
			ticketCode: "7928",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 47),
			ticketCode: "6396",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(8, 55),
			ticketCode: "7542",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(9, 0),
			ticketCode: "7544",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(9, 7),
			ticketCode: "6316",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(9, 17),
			ticketCode: "6318",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(9, 17),
			ticketCode: "7930",
		},
		{
			name: "Москва — Редкино",
			dateTime: getDate(9, 27),
			ticketCode: "6706",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(9, 47),
			ticketCode: "6510",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(9, 55),
			ticketCode: "7912",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(9, 57),
			ticketCode: "6320",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(10, 17),
			ticketCode: "6322",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(10, 37),
			ticketCode: "6324",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(10, 47),
			ticketCode: "6326",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(10, 55),
			ticketCode: "6328",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(11, 5),
			ticketCode: "6708",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(11, 27),
			ticketCode: "6608",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(11, 47),
			ticketCode: "6406",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(11, 57),
			ticketCode: "6330",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(12, 27),
			ticketCode: "6334",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(12, 31),
			ticketCode: "7546",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(12, 37),
			ticketCode: "6114",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(12, 37),
			ticketCode: "7548",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(12, 47),
			ticketCode: "6202",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(12, 57),
			ticketCode: "7102",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(13, 7),
			ticketCode: "6336",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(13, 8),
			ticketCode: "7936",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(13, 27),
			ticketCode: "6338",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(13, 37),
			ticketCode: "6710",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(13, 47),
			ticketCode: "6610",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(13, 55),
			ticketCode: "6514",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(14, 7),
			ticketCode: "6408",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(14, 17),
			ticketCode: "6112",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(14, 35),
			ticketCode: "6340",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(14, 52),
			ticketCode: "7958",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(14, 57),
			ticketCode: "7922",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(14, 57),
			ticketCode: "6342",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(15, 17),
			ticketCode: "6398",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(15, 25),
			ticketCode: "6712",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(15, 45),
			ticketCode: "7938",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(15, 47),
			ticketCode: "6410",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(15, 52),
			ticketCode: "6516",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(15, 57),
			ticketCode: "6344",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(16, 12),
			ticketCode: "7558",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(16, 17),
			ticketCode: "6350",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(16, 27),
			ticketCode: "6352",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(16, 32),
			ticketCode: "7908",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(16, 37),
			ticketCode: "6354",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(16, 42),
			ticketCode: "7940",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(16, 47),
			ticketCode: "6356",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(16, 55),
			ticketCode: "6358",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(16, 57),
			ticketCode: "7560",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(17, 7),
			ticketCode: "6612",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(17, 12),
			ticketCode: "7562",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(17, 17),
			ticketCode: "6360",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(17, 27),
			ticketCode: "6714",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(17, 37),
			ticketCode: "6412",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(17, 42),
			ticketCode: "7954",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(17, 47),
			ticketCode: "6716",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(17, 52),
			ticketCode: "7942",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(17, 57),
			ticketCode: "6362",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(18, 7),
			ticketCode: "6364",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(18, 12),
			ticketCode: "7910",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(18, 17),
			ticketCode: "6366",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(18, 22),
			ticketCode: "7914",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(18, 27),
			ticketCode: "6518",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(18, 32),
			ticketCode: "7944",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(18, 37),
			ticketCode: "6414",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(18, 45),
			ticketCode: "6368",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(18, 57),
			ticketCode: "6370",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(19, 5),
			ticketCode: "7568",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(19, 7),
			ticketCode: "6372",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(19, 11),
			ticketCode: "7946",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(19, 17),
			ticketCode: "6374",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(19, 25),
			ticketCode: "6614",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(19, 47),
			ticketCode: "6416",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(19, 55),
			ticketCode: "6520",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(19, 57),
			ticketCode: "6376",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(20, 2),
			ticketCode: "7566",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(20, 7),
			ticketCode: "6378",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(20, 15),
			ticketCode: "6380",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(20, 20),
			ticketCode: "7572",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(20, 27),
			ticketCode: "6382",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(20, 30),
			ticketCode: "7948",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(20, 37),
			ticketCode: "6384",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(20, 45),
			ticketCode: "6718",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(20, 57),
			ticketCode: "6522",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(21, 7),
			ticketCode: "6616",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(21, 15),
			ticketCode: "6386",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(21, 22),
			ticketCode: "7570",
		},
		{
			name: "Москва — Тверь",
			dateTime: getDate(21, 37),
			ticketCode: "6720",
		},
		{
			name: "Москва — Конаково ГРЭС",
			dateTime: getDate(21, 57),
			ticketCode: "6618",
		},
		{
			name: "Москва — Подсолнечная",
			dateTime: getDate(22, 7),
			ticketCode: "6418",
		},
		{
			name: "Москва — Клин",
			dateTime: getDate(22, 27),
			ticketCode: "6524",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(22, 47),
			ticketCode: "6388",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(23, 2),
			ticketCode: "7578",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(23, 7),
			ticketCode: "6894",
		},
		{
			name: "Москва — Зеленоград-Крюково",
			dateTime: getDate(23, 57),
			ticketCode: "6390",
		},
	],
	"2": [
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 38),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 20),
			ticketCode: "7924",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 30),
			ticketCode: "6700",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 41),
			ticketCode: "6503",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(5, 8),
			ticketCode: "6502",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 12),
			ticketCode: "6603",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 22),
			ticketCode: "6505",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 31),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 41),
			ticketCode: "6511",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 40),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 50),
			ticketCode: "6506",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 52),
			ticketCode: "6519",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(10, 41),
			ticketCode: "6606",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 1),
			ticketCode: "6709",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(15, 0),
			ticketCode: "6514",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 11),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(16, 23),
			ticketCode: "7938",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 42),
			ticketCode: "6529",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 53),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 10),
			ticketCode: "6612",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 40),
			ticketCode: "6412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 52),
			ticketCode: "6716",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 31),
			ticketCode: "6518",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 2),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 32),
			ticketCode: "6614",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 32),
			ticketCode: "6535",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 52),
			ticketCode: "6721",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 13),
			ticketCode: "6615",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 40),
			ticketCode: "6720",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 59),
			ticketCode: "6618",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(23, 10),
			ticketCode: "6418",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 43),
			ticketCode: "6723",
		},
	],
};

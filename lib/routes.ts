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
	"3": [
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 53),
			ticketCode: "6620",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 25),
			ticketCode: "6503",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 30),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 46),
			ticketCode: "6700",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 9),
			ticketCode: "6505",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(5, 21),
			ticketCode: "6502",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 31),
			ticketCode: "6507",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 48),
			ticketCode: "6701",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 10),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 16),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 26),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(6, 43),
			ticketCode: "6504",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 0),
			ticketCode: "6401",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 25),
			ticketCode: "6513",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 3),
			ticketCode: "6515",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 30),
			ticketCode: "6517",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 43),
			ticketCode: "6704",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(11, 1),
			ticketCode: "6606",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 47),
			ticketCode: "6709",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 56),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(17, 1),
			ticketCode: "6410",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 38),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 46),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 51),
			ticketCode: "6520",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(21, 3),
			ticketCode: "6416",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 37),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 11),
			ticketCode: "6522",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 53),
			ticketCode: "6720",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 14),
			ticketCode: "6618",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 50),
			ticketCode: "6617",
		},
	],
	"4": [
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 10),
			ticketCode: "6503",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 14),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 16),
			ticketCode: "6700",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 33),
			ticketCode: "6701",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(5, 35),
			ticketCode: "6502",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 55),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 1),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 11),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(6, 57),
			ticketCode: "6504",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 10),
			ticketCode: "6513",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 49),
			ticketCode: "6515",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 17),
			ticketCode: "6517",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(11, 23),
			ticketCode: "6606",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 32),
			ticketCode: "6611",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 21),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 55),
			ticketCode: "6614",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 22),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 23),
			ticketCode: "6522",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 5),
			ticketCode: "6720",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 28),
			ticketCode: "6617",
		},
	],
	"5": [
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 2),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 4),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 7),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 14),
			ticketCode: "7421/7422",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 17),
			ticketCode: "7231/7232",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 19),
			ticketCode: "6390",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 22),
			ticketCode: "6723",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 23),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 27),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 33),
			ticketCode: "7425/7426",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 37),
			ticketCode: "7235/7236",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 39),
			ticketCode: "6802",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 42),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 43),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 53),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 59),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 3),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 13),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 19),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 23),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 29),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 7),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 17),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 21),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 27),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 32),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 37),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 42),
			ticketCode: "6303",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 44),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 47),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 49),
			ticketCode: "6504",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 52),
			ticketCode: "6603",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 54),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 57),
			ticketCode: "7311/7312",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 59),
			ticketCode: "6302",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 2),
			ticketCode: "6505",
		},

		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 4),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 7),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 12),
			ticketCode: "6305",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 14),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 17),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 22),
			ticketCode: "6507",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 24),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 27),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 32),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 34),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 37),
			ticketCode: "7319/7320",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 42),
			ticketCode: "6701",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 44),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 47),
			ticketCode: "7321/7322",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 49),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 52),
			ticketCode: "6509",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 54),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 57),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 59),
			ticketCode: "6318",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 2),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 4),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 7),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 9),
			ticketCode: "6506",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 12),
			ticketCode: "6703",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 14),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 17),
			ticketCode: "7327/7328",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 19),
			ticketCode: "6402",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 22),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 24),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 27),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 29),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 32),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 34),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 37),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 39),
			ticketCode: "6308",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 44),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 47),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 49),
			ticketCode: "6704",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 52),
			ticketCode: "6401",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 54),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 57),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 59),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 2),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 4),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 7),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 9),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 12),
			ticketCode: "6313",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 14),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 17),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 19),
			ticketCode: "6346",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 22),
			ticketCode: "6513",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 24),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 27),
			ticketCode: "7341/7342",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 29),
			ticketCode: "6310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 34),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 37),
			ticketCode: "7343/7344",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 39),
			ticketCode: "6312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 44),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 47),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 54),
			ticketCode: "7237/7238",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 57),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 59),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 2),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 4),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 7),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 9),
			ticketCode: "6396",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 12),
			ticketCode: "6515",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 14),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 17),
			ticketCode: "7351/7352",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 22),
			ticketCode: "6517",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 24),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 27),
			ticketCode: "7353/7354",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 29),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 32),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 34),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 37),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 44),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 47),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 52),
			ticketCode: "6403",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 54),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 57),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(9, 59),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 2),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 4),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 7),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 9),
			ticketCode: "6510",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 14),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 17),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 18),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 22),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 24),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 27),
			ticketCode: "7365/7366",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 32),
			ticketCode: "6519",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 34),
			ticketCode: "7257/7258",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 37),
			ticketCode: "7367/7368",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 39),
			ticketCode: "6322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 44),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 47),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 54),
			ticketCode: "7261/7262",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 57),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 59),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 2),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 4),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 7),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 9),
			ticketCode: "6326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 14),
			ticketCode: "7265/7266",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 17),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 19),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 22),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 24),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 27),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 29),
			ticketCode: "6708",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 34),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 37),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 44),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 47),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 49),
			ticketCode: "6608",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 54),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 57),
			ticketCode: "7383/7384",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 59),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 2),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 4),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 7),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 9),
			ticketCode: "6406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 14),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 17),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 22),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 24),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 27),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 32),
			ticketCode: "6521",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 34),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 37),
			ticketCode: "7391/7392",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 41),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 44),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 47),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 54),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 57),
			ticketCode: "7395/7396",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 59),
			ticketCode: "6114",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 4),
			ticketCode: "7287/7288",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 7),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 9),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 12),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 14),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 17),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 22),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 24),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 27),
			ticketCode: "7401/7402",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 29),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 32),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 34),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 37),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 44),
			ticketCode: "7295/7296",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 47),
			ticketCode: "7405/7406",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 48),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 52),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 54),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 57),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 4),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 7),
			ticketCode: "7409/7410",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 9),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 12),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 14),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 17),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 19),
			ticketCode: "6514",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 24),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 27),
			ticketCode: "7413/7414",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 29),
			ticketCode: "6408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 34),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 37),
			ticketCode: "7415/7416",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 39),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 42),
			ticketCode: "6609",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 44),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 47),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 52),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 54),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 57),
			ticketCode: "7419/7420",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 59),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 2),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 4),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 7),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 14),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 17),
			ticketCode: "7423/7424",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 19),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 22),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 24),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 27),
			ticketCode: "7425/7426",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 32),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 34),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 37),
			ticketCode: "7427/7428",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 39),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 42),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 44),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 47),
			ticketCode: "7429/7430",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 52),
			ticketCode: "6527",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 54),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 57),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 2),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 4),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 7),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 9),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 12),
			ticketCode: "6345",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 14),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 17),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 19),
			ticketCode: "6344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 24),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 27),
			ticketCode: "7437/7438",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 32),
			ticketCode: "6611",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 34),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 37),
			ticketCode: "7439/7440",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 39),
			ticketCode: "6350",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 42),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 44),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 47),
			ticketCode: "7441/7442",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 49),
			ticketCode: "6352",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 52),
			ticketCode: "6713",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 54),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 57),
			ticketCode: "7443/7444",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 59),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 2),
			ticketCode: "6349",
		},

		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 4),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 7),
			ticketCode: "7445/7446",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 9),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 12),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 14),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 17),
			ticketCode: "7447/7448",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 19),
			ticketCode: "6358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 24),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 27),
			ticketCode: "7449/7450",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 29),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 32),
			ticketCode: "6355",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 2),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 4),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 7),
			ticketCode: "7457/7458",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 9),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 12),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 14),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 17),
			ticketCode: "7459/7460",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 19),
			ticketCode: "6362",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 22),
			ticketCode: "6529",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 24),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 27),
			ticketCode: "7461/7462",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 29),
			ticketCode: "6364",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 32),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 34),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 37),
			ticketCode: "7463/7464",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 39),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 42),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 44),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 47),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 49),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 52),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 54),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 57),
			ticketCode: "7467/7468",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 59),
			ticketCode: "6414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 4),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 7),
			ticketCode: "7469/7470",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 9),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 12),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 14),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 17),
			ticketCode: "7471/7472",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 19),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 22),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 24),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 27),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 29),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 32),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 34),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 37),
			ticketCode: "7475/7476",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 39),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 42),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 44),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 47),
			ticketCode: "7477/7478",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 49),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 52),
			ticketCode: "6531",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 54),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 57),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 4),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 7),
			ticketCode: "7481/7482",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 9),
			ticketCode: "6416",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 12),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 14),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 17),
			ticketCode: "7483/7484",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 19),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 22),
			ticketCode: "6613",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 24),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 27),
			ticketCode: "7485/7486",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 29),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 32),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 34),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 37),
			ticketCode: "7487/7488",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 39),
			ticketCode: "6380",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 42),
			ticketCode: "6717",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 44),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 47),
			ticketCode: "7489/7490",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 49),
			ticketCode: "6382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 54),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 57),
			ticketCode: "7491/7492",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 59),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 2),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 4),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 7),
			ticketCode: "7493/7494",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 12),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 14),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 17),
			ticketCode: "7495/7496",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 19),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 22),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 24),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 27),
			ticketCode: "7497/7498",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 29),
			ticketCode: "6616",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 34),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 37),
			ticketCode: "7499/7500",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 39),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 43),
			ticketCode: "6415",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 44),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 47),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 54),
			ticketCode: "7393/7394",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 57),
			ticketCode: "7203/7204",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 59),
			ticketCode: "6720",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 4),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 7),
			ticketCode: "7205/7206",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 12),
			ticketCode: "6535",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 14),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 17),
			ticketCode: "7207/7208",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 19),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 22),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 24),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 27),
			ticketCode: "7209/7210",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 29),
			ticketCode: "6418",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 32),
			ticketCode: "6721",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 34),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 37),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 44),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 47),
			ticketCode: "7213/7214",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 49),
			ticketCode: "6524",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 52),
			ticketCode: "6615",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 54),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 57),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 2),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 4),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 7),
			ticketCode: "7217/7218",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 9),
			ticketCode: "6388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 14),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 17),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 22),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 24),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 27),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 29),
			ticketCode: "6894",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 34),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 37),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 44),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 47),
			ticketCode: "7225/7226",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 52),
			ticketCode: "6417",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 54),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 57),
			ticketCode: "7227/7228",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(23, 59),
			ticketCode: "6620",
		},
	],
	"6": [
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(0, 16),
			ticketCode: "6618",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(3, 23),
			ticketCode: "6603",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 3),
			ticketCode: "6601",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 21),
			ticketCode: "7905",
		},
		{
			name: "Конаково ГРЭС — Решетниково",
			dateTime: getDate(7, 47),
			ticketCode: "6881",
		},
		{
			name: "Конаково ГРЭС — Решетниково",
			dateTime: getDate(10, 53),
			ticketCode: "6883",
		},
		{
			name: "Решетниково — Конаково ГРЭС",
			dateTime: getDate(9, 1),
			ticketCode: "6882",
		},
		{
			name: "Конаково ГРЭС — Решетниково",
			dateTime: getDate(10, 53),
			ticketCode: "6883",
		},
		{
			name: "Конаково ГРЭС — Решетниково",
			dateTime: getDate(10, 53),
			ticketCode: "6883",
		},
		{
			name: "Решетниково — Конаково ГРЭС",
			dateTime: getDate(11, 9),
			ticketCode: "6884",
		},
		{
			name: "Конаково ГРЭС — Решетниково",
			dateTime: getDate(11, 45),
			ticketCode: "6887",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(12, 36),
			ticketCode: "6606",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 41),
			ticketCode: "6611",
		},
		{
			name: "Решетниково — Конаково ГРЭС",
			dateTime: getDate(15, 59),
			ticketCode: "6886",
		},
		{
			name: "Конаково ГРЭС — Решетниково",
			dateTime: getDate(19, 21),
			ticketCode: "6885",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 12),
			ticketCode: "7914",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 50),
			ticketCode: "6614",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 36),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 25),
			ticketCode: "6616",
		},
	],
	"7": [
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 52),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 2),
			ticketCode: "7924",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 24),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 58),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 3),
			ticketCode: "6702",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 9),
			ticketCode: "7921",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 19),
			ticketCode: "7922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 26),
			ticketCode: "7951",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 8),
			ticketCode: "7923",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 14),
			ticketCode: "6782",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 12),
			ticketCode: "7961/7963",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 21),
			ticketCode: "7925",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(9, 12),
			ticketCode: "6707",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 42),
			ticketCode: "7928",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 24),
			ticketCode: "7949",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 44),
			ticketCode: "7930",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(12, 1),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 15),
			ticketCode: "6706",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 11),
			ticketCode: "6922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 2),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(15, 8),
			ticketCode: "6921",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 19),
			ticketCode: "7937",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 21),
			ticketCode: "7940",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 31),
			ticketCode: "6710",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(18, 11),
			ticketCode: "7942",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(19, 5),
			ticketCode: "6749/7939",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 36),
			ticketCode: "7943",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(20, 2),
			ticketCode: "7944",
		},
		{
			name: "Москва (Ленинградский вокзал) — Бологое",
			dateTime: getDate(20, 34),
			ticketCode: "7960/7962",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 47),
			ticketCode: "6721",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 5),
			ticketCode: "7945",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 11),
			ticketCode: "7946",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 17),
			ticketCode: "7947",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 19),
			ticketCode: "7948",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 47),
			ticketCode: "6723",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 43),
			ticketCode: "6720",
		},
	],
	"8": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 2),
			ticketCode: "7235/7236",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 7),
			ticketCode: "6617",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(0, 30),
			ticketCode: "785А",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 34),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 16),
			ticketCode: "7924",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 22),
			ticketCode: "6301",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 24),
			ticketCode: "6700",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 27),
			ticketCode: "6501",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 32),
			ticketCode: "7301/7302",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(4, 38),
			ticketCode: "6702",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 42),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 46),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 52),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 57),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 2),
			ticketCode: "7307/7308",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(5, 4),
			ticketCode: "6502",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 7),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 12),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 17),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 22),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 27),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 32),
			ticketCode: "7313/7314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 33),
			ticketCode: "7922",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 37),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 42),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 48),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 52),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 57),
			ticketCode: "6801",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 2),
			ticketCode: "7319/7320",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 7),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 12),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 17),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 22),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 25),
			ticketCode: "6504",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 26),
			ticketCode: "6601",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 32),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 36),
			ticketCode: "7533",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 37),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 42),
			ticketCode: "7327/7328",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 47),
			ticketCode: "6511",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 52),
			ticketCode: "7329/7330",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 56),
			ticketCode: "7921",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 57),
			ticketCode: "6307",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 2),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 12),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 14),
			ticketCode: "7535",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 17),
			ticketCode: "6401",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(7, 20),
			ticketCode: "758А",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 22),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 27),
			ticketCode: "6311",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 28),
			ticketCode: "7951",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 32),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 37),
			ticketCode: "6313",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 42),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 45),
			ticketCode: "7539",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 46),
			ticketCode: "6506",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 47),
			ticketCode: "6513",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 52),
			ticketCode: "7341/7342",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 57),
			ticketCode: "7905",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 2),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 12),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 21),
			ticketCode: "7543",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 22),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 26),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 27),
			ticketCode: "6315",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 32),
			ticketCode: "7541",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 32),
			ticketCode: "7349/7350",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 37),
			ticketCode: "6515",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 42),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 52),
			ticketCode: "7353/7354",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 52),
			ticketCode: "6517",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 57),
			ticketCode: "6317",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 2),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 12),
			ticketCode: "7357/7358",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(9, 14),
			ticketCode: "7928",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 17),
			ticketCode: "6403",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 22),
			ticketCode: "7359/7360",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 22),
			ticketCode: "7961/7963",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 27),
			ticketCode: "6391",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 32),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 33),
			ticketCode: "7903",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 40),
			ticketCode: "7925",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 42),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 47),
			ticketCode: "6319",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 52),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 55),
			ticketCode: "7545",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 57),
			ticketCode: "6519",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 2),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 7),
			ticketCode: "7917",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 12),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 22),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 27),
			ticketCode: "6321",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 30),
			ticketCode: "7930",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 32),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 42),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 47),
			ticketCode: "6113",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 52),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 55),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 2),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 12),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 22),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 27),
			ticketCode: "6201",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 30),
			ticketCode: "7549",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 32),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 32),
			ticketCode: "7932",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 42),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 47),
			ticketCode: "6323",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 52),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 57),
			ticketCode: "6521",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 2),
			ticketCode: "7391/7392",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 6),
			ticketCode: "6709",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 12),
			ticketCode: "7393/7394",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 21),
			ticketCode: "7949",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 22),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 32),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 33),
			ticketCode: "7101",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 37),
			ticketCode: "6325",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 42),
			ticketCode: "7399/7400",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 46),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 47),
			ticketCode: "6327",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 52),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 57),
			ticketCode: "6329",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 2),
			ticketCode: "7403/7404",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 4),
			ticketCode: "7934",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(13, 8),
			ticketCode: "761А",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 12),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 17),
			ticketCode: "6331",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 22),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(13, 28),
			ticketCode: "7102",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 32),
			ticketCode: "7409/7410",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 33),
			ticketCode: "7931",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 37),
			ticketCode: "6333",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 42),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 43),
			ticketCode: "7149",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 52),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 2),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 7),
			ticketCode: "6609",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 12),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 17),
			ticketCode: "6111",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 22),
			ticketCode: "7419/7420",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 25),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 27),
			ticketCode: "6335",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 32),
			ticketCode: "7421/7422",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 42),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 47),
			ticketCode: "6339",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 52),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 56),
			ticketCode: "6514",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 57),
			ticketCode: "6407",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 2),
			ticketCode: "7427/7428",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 6),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 7),
			ticketCode: "6341",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 12),
			ticketCode: "7429/7430",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 17),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 22),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 27),
			ticketCode: "6343",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 29),
			ticketCode: "7122",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 30),
			ticketCode: "7551",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 32),
			ticketCode: "7433/7434",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 37),
			ticketCode: "6345",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 38),
			ticketCode: "7935",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 42),
			ticketCode: "7435/7436",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 52),
			ticketCode: "7437/7438",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 52),
			ticketCode: "7103",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 58),
			ticketCode: "7561",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 2),
			ticketCode: "7439/7440",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(16, 6),
			ticketCode: "826Ч",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 7),
			ticketCode: "6409",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 8),
			ticketCode: "7559",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 12),
			ticketCode: "7441/7442",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 17),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(16, 18),
			ticketCode: "7938",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 22),
			ticketCode: "7443/7444",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 22),
			ticketCode: "7937",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 27),
			ticketCode: "6349",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 32),
			ticketCode: "7445/7446",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 37),
			ticketCode: "6351",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 42),
			ticketCode: "7447/7448",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 46),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 52),
			ticketCode: "7449/7450",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 57),
			ticketCode: "6355",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 2),
			ticketCode: "7451/7452",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 7),
			ticketCode: "6353",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 8),
			ticketCode: "6397",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 11),
			ticketCode: "7954",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 12),
			ticketCode: "7453/7454",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 16),
			ticketCode: "7942",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 17),
			ticketCode: "6357",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 22),
			ticketCode: "7455/7456",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 27),
			ticketCode: "6359",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 32),
			ticketCode: "7457/7458",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 36),
			ticketCode: "7565",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 37),
			ticketCode: "6361",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 42),
			ticketCode: "7459/7460",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 47),
			ticketCode: "6529",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 50),
			ticketCode: "7567",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 52),
			ticketCode: "7461/7462",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 55),
			ticketCode: "7555",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 57),
			ticketCode: "6411",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 2),
			ticketCode: "7463/7464",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 4),
			ticketCode: "7123",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 6),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 7),
			ticketCode: "6363",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 12),
			ticketCode: "7465/7466",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 14),
			ticketCode: "7569",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 17),
			ticketCode: "6365",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 22),
			ticketCode: "7467/7468",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 32),
			ticketCode: "7469/7470",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 36),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 37),
			ticketCode: "6367",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 42),
			ticketCode: "7471/7472",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 47),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 48),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 52),
			ticketCode: "7473/7474",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 57),
			ticketCode: "6371",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 0),
			ticketCode: "7914",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 2),
			ticketCode: "7475/7476",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(19, 6),
			ticketCode: "7944",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 7),
			ticketCode: "6373",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 12),
			ticketCode: "7477/7478",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 17),
			ticketCode: "6531",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 22),
			ticketCode: "7479/7480",
		},
		{
			name: "Москва (Ленинградский вокзал) — Бологое",
			dateTime: getDate(19, 22),
			ticketCode: "7960/7962",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 27),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 32),
			ticketCode: "7481/7482",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 37),
			ticketCode: "6413",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 42),
			ticketCode: "7483/7484",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 42),
			ticketCode: "7941",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 47),
			ticketCode: "6613",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 52),
			ticketCode: "7485/7486",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 57),
			ticketCode: "6533",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 2),
			ticketCode: "7487/7488",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 7),
			ticketCode: "6717",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 12),
			ticketCode: "7489/7490",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(20, 21),
			ticketCode: "7946",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 21),
			ticketCode: "7105",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 22),
			ticketCode: "7491/7492",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 27),
			ticketCode: "6393",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 28),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 32),
			ticketCode: "7493/7494",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 33),
			ticketCode: "6520",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 37),
			ticketCode: "6375",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 42),
			ticketCode: "7495/7496",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 46),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 47),
			ticketCode: "6377",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 52),
			ticketCode: "7497/7498",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 2),
			ticketCode: "7499/7500",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 4),
			ticketCode: "7943",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 7),
			ticketCode: "6415",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 12),
			ticketCode: "7201/7202",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(21, 12),
			ticketCode: "784А",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 22),
			ticketCode: "7203/7204",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(21, 23),
			ticketCode: "725Ч",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 32),
			ticketCode: "7205/7206",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 34),
			ticketCode: "7948",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 37),
			ticketCode: "6535",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 42),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 47),
			ticketCode: "6395",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 52),
			ticketCode: "7209/7210",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 56),
			ticketCode: "6522",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 57),
			ticketCode: "6721",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 2),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 4),
			ticketCode: "6616",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 7),
			ticketCode: "7945",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 12),
			ticketCode: "7213/7214",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 17),
			ticketCode: "6615",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 21),
			ticketCode: "7947",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 22),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 27),
			ticketCode: "6337",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 32),
			ticketCode: "7217/7218",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 36),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 42),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 47),
			ticketCode: "6379",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 52),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 55),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 2),
			ticketCode: "7223/7224",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(23, 6),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 12),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 16),
			ticketCode: "7575",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 17),
			ticketCode: "6417",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 22),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 27),
			ticketCode: "6381",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 32),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 42),
			ticketCode: "7231/7232",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 47),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 52),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 2),
			ticketCode: "7235/7236",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 7),
			ticketCode: "6617",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(0, 30),
			ticketCode: "785А",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 34),
			ticketCode: "6620",
		},
	],
	"9": [
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(0, 6),
			ticketCode: "6720",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 13),
			ticketCode: "6701",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 2),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(6, 21),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 26),
			ticketCode: "6702",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 37),
			ticketCode: "6782",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(8, 50),
			ticketCode: "6707",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 35),
			ticketCode: "6922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 40),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(14, 46),
			ticketCode: "6921",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 54),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(18, 43),
			ticketCode: "6749/7939",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 28),
			ticketCode: "6721",
		},
	],
	"10": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 2),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 4),
			ticketCode: "6620",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 9),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 12),
			ticketCode: "7231/7232",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 17),
			ticketCode: "6723",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 19),
			ticketCode: "7421/7422",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 22),
			ticketCode: "7233/7234",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 24),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 29),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 32),
			ticketCode: "7235/7236",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 37),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 39),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 44),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 49),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 59),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 4),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 9),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 19),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 24),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 29),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 34),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 2),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 12),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 16),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 22),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 27),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 32),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 37),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 42),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 47),
			ticketCode: "6603",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 49),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 52),
			ticketCode: "7311/7312",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 54),
			ticketCode: "6504",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 57),
			ticketCode: "6505",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 59),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 2),
			ticketCode: "7313/7314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 4),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 7),
			ticketCode: "6305",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 9),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 12),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 17),
			ticketCode: "6507",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 19),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 22),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 27),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 29),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 32),
			ticketCode: "7319/7320",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 37),
			ticketCode: "6701",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 39),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 42),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 47),
			ticketCode: "6509",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 49),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 52),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 54),
			ticketCode: "6304",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 57),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 59),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 2),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 4),
			ticketCode: "6318",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 7),
			ticketCode: "6703",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 9),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 12),
			ticketCode: "7327/7328",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 14),
			ticketCode: "6506",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 17),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 19),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 22),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 24),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 27),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 29),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 32),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 34),
			ticketCode: "6306",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 39),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 42),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 44),
			ticketCode: "6308",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 47),
			ticketCode: "6401",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 49),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 52),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 54),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 57),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 59),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 2),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 4),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 7),
			ticketCode: "6313",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 9),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 12),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 14),
			ticketCode: "6508",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 17),
			ticketCode: "6513",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 19),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 22),
			ticketCode: "7341/7342",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 24),
			ticketCode: "6346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 29),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 32),
			ticketCode: "7343/7344",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 34),
			ticketCode: "6310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 39),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 42),
			ticketCode: "7345/7346",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 44),
			ticketCode: "6312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 49),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 52),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 57),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 59),
			ticketCode: "7237/7238",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 2),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 4),
			ticketCode: "6314",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 7),
			ticketCode: "6515",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 9),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 12),
			ticketCode: "7351/7352",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 14),
			ticketCode: "6396",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 16),
			ticketCode: "6517",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 19),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 22),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 27),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 29),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 32),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 34),
			ticketCode: "6316",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 39),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 42),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 47),
			ticketCode: "6403",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 49),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 52),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 57),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 59),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 2),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 4),
			ticketCode: "6606",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 9),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 12),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 14),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 17),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 19),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 22),
			ticketCode: "7365/7366",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 24),
			ticketCode: "6706",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 27),
			ticketCode: "6519",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 29),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 32),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 39),
			ticketCode: "7257/7258",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 42),
			ticketCode: "7369/7370",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 44),
			ticketCode: "6322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 49),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 52),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 57),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 59),
			ticketCode: "7261/7262",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 2),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 4),
			ticketCode: "6324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 9),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 12),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 14),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 17),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 19),
			ticketCode: "7265/7266",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 22),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 24),
			ticketCode: "6328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 29),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 32),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 34),
			ticketCode: "6708",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 39),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 42),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 49),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 52),
			ticketCode: "7383/7384",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 54),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 57),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 59),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 2),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 4),
			ticketCode: "6512",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 9),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 12),
			ticketCode: "7387/7388",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 14),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 17),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 19),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 22),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 27),
			ticketCode: "6521",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 29),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 32),
			ticketCode: "7391/7392",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 36),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 39),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 42),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 49),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 52),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 59),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 2),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 4),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 7),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 9),
			ticketCode: "7287/7288",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 12),
			ticketCode: "7399/7400",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 14),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 17),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 19),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 22),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 27),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 29),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 32),
			ticketCode: "7403/7404",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 34),
			ticketCode: "6336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 39),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 42),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 47),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 49),
			ticketCode: "7295/7296",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 52),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 54),
			ticketCode: "6710",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 59),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 2),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 7),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 9),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 12),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 14),
			ticketCode: "6610",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 19),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 22),
			ticketCode: "7413/7414",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 24),
			ticketCode: "6514",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 29),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 32),
			ticketCode: "7415/7416",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 34),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 37),
			ticketCode: "6609",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 39),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 42),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 44),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 47),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 49),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 52),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 57),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 59),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 2),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 4),
			ticketCode: "6340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 9),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 12),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 17),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 19),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 22),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 24),
			ticketCode: "6342",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 27),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 29),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 32),
			ticketCode: "7427/7428",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 37),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 39),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 42),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 44),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 47),
			ticketCode: "6527",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 49),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 52),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 57),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 59),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 2),
			ticketCode: "7433/7434",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 7),
			ticketCode: "6345",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 9),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 12),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 14),
			ticketCode: "6410",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 19),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 22),
			ticketCode: "7437/7438",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 24),
			ticketCode: "6344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 29),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 32),
			ticketCode: "7439/7440",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 37),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 39),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 42),
			ticketCode: "7441/7442",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 44),
			ticketCode: "6350",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 47),
			ticketCode: "6713",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 49),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 52),
			ticketCode: "7443/7444",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 54),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 57),
			ticketCode: "6349",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 59),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 2),
			ticketCode: "7445/7446",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 4),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 7),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 9),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 12),
			ticketCode: "7447/7448",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 14),
			ticketCode: "6356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 19),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 22),
			ticketCode: "7449/7450",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 24),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 27),
			ticketCode: "6355",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 29),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 32),
			ticketCode: "7451/7452",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 34),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 37),
			ticketCode: "6353",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 39),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 42),
			ticketCode: "7453/7454",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 47),
			ticketCode: "6357",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 49),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 52),
			ticketCode: "7455/7456",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 57),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 59),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 2),
			ticketCode: "7457/7458",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 4),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 6),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 9),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 12),
			ticketCode: "7459/7460",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 14),
			ticketCode: "6716",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 17),
			ticketCode: "6529",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 19),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 22),
			ticketCode: "7461/7462",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 24),
			ticketCode: "6362",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 27),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 29),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 32),
			ticketCode: "7463/7464",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 34),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 37),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 39),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 42),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 44),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 47),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 49),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 52),
			ticketCode: "7467/7468",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 54),
			ticketCode: "6518",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 59),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 2),
			ticketCode: "7469/7470",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 4),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 7),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 9),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 12),
			ticketCode: "7471/7472",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 14),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 17),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 19),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 22),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 24),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 27),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 29),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 32),
			ticketCode: "7475/7476",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 34),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 37),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 39),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 42),
			ticketCode: "7477/7478",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 44),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 47),
			ticketCode: "6531",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 49),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 52),
			ticketCode: "7479/7480",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 54),
			ticketCode: "6614",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 59),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 2),
			ticketCode: "7481/7482",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 7),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 9),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 12),
			ticketCode: "7483/7484",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 14),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 17),
			ticketCode: "6613",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 19),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 22),
			ticketCode: "7485/7486",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 24),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 27),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 29),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 32),
			ticketCode: "7487/7488",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 34),
			ticketCode: "6378",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 37),
			ticketCode: "6717",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 39),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 42),
			ticketCode: "7489/7490",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 44),
			ticketCode: "6380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 49),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 52),
			ticketCode: "7491/7492",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 54),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 57),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 59),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 2),
			ticketCode: "7493/7494",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 4),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 7),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 9),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 12),
			ticketCode: "7495/7496",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 17),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 19),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 22),
			ticketCode: "7497/7498",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 24),
			ticketCode: "6522",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 29),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 32),
			ticketCode: "7499/7500",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 34),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 37),
			ticketCode: "6415",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 39),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 42),
			ticketCode: "7201/7202",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 44),
			ticketCode: "6386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 49),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 52),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 59),
			ticketCode: "7393/7394",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 2),
			ticketCode: "7205/7206",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 4),
			ticketCode: "6720",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 7),
			ticketCode: "6535",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 9),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 12),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 17),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 19),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 22),
			ticketCode: "7209/7210",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 24),
			ticketCode: "6618",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 27),
			ticketCode: "6721",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 29),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 32),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 34),
			ticketCode: "6418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 39),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 42),
			ticketCode: "7213/7214",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 47),
			ticketCode: "6615",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 49),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 52),
			ticketCode: "7215/7216",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 54),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 57),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 59),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 2),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 9),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 12),
			ticketCode: "7219/7220",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 14),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 17),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 19),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 22),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 29),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 32),
			ticketCode: "7223/7224",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 34),
			ticketCode: "6894",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 39),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 42),
			ticketCode: "7225/7226",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 47),
			ticketCode: "6417",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 49),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 52),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 57),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 59),
			ticketCode: "7417/7418",
		},
	],
	"11": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 3),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 8),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 8),
			ticketCode: "7421/7422",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 13),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 13),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 18),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 23),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 28),
			ticketCode: "7425/7426",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 28),
			ticketCode: "6723",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 33),
			ticketCode: "6802",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 33),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 38),
			ticketCode: "7427/7428",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 43),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 48),
			ticketCode: "7429/7430",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 48),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 53),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 58),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 8),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 13),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 18),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 23),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 13),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 23),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 27),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 33),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 37),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 38),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 43),
			ticketCode: "7307/7308",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 43),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 48),
			ticketCode: "6303",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 48),
			ticketCode: "7201/7202",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 53),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 53),
			ticketCode: "7309/7310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 58),
			ticketCode: "7203/7204",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 58),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 3),
			ticketCode: "7311/7312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 8),
			ticketCode: "7205/7206",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 8),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 13),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 18),
			ticketCode: "6305",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 18),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 23),
			ticketCode: "7315/7316",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 28),
			ticketCode: "7209/7210",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 28),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 33),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 38),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 38),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 43),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 43),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 48),
			ticketCode: "7213/7214",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 48),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 53),
			ticketCode: "7321/7322",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 53),
			ticketCode: "6318",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 58),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 58),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 3),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 3),
			ticketCode: "6506",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 8),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 8),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 13),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 13),
			ticketCode: "6402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 18),
			ticketCode: "7219/7220",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 18),
			ticketCode: "6703",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 23),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 23),
			ticketCode: "7327/7328",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 28),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 28),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 33),
			ticketCode: "6308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 33),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 38),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 38),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 43),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 43),
			ticketCode: "6704",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 48),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 53),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 53),
			ticketCode: "6338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 58),
			ticketCode: "7227/7228",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 58),
			ticketCode: "6401",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 3),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 3),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 8),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 8),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 13),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 13),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 18),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 18),
			ticketCode: "6313",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 23),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 23),
			ticketCode: "6310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 28),
			ticketCode: "7233/7234",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 28),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 33),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 33),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 38),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 43),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 48),
			ticketCode: "7237/7238",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 53),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 53),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 58),
			ticketCode: "7239/7240",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 3),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 3),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 8),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 8),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 13),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 18),
			ticketCode: "7243/7244",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 18),
			ticketCode: "6515",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 23),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 23),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 28),
			ticketCode: "7245/7246",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 28),
			ticketCode: "6517",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 33),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 38),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 38),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 43),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 48),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 53),
			ticketCode: "7357/7358",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 53),
			ticketCode: "6606",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 58),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 58),
			ticketCode: "6403",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 3),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 3),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 8),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 8),
			ticketCode: "7253/7254",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 12),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 13),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 18),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 23),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 28),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 28),
			ticketCode: "7257/7258",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 33),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 33),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 38),
			ticketCode: "7259/7260",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 38),
			ticketCode: "6519",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 43),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 48),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 53),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 53),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 58),
			ticketCode: "7263/7264",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 3),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 3),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 8),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 8),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 13),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 13),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 18),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 23),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 23),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 28),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 28),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 33),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 38),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 43),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 43),
			ticketCode: "6360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 48),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 53),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 53),
			ticketCode: "6512",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 58),
			ticketCode: "7275/7276",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 3),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 3),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 8),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 8),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 13),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 18),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 23),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 28),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 28),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 33),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 38),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 38),
			ticketCode: "6521",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 43),
			ticketCode: "7391/7392",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 47),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 48),
			ticketCode: "7285/7286",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 53),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 53),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 58),
			ticketCode: "7287/7288",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 3),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 3),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 8),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 13),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 18),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 18),
			ticketCode: "7291/7292",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 23),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 23),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 28),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 28),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 33),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 38),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 38),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 42),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 43),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 48),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 53),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 58),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 58),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 3),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 3),
			ticketCode: "6610",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 8),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 13),
			ticketCode: "7409/7410",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 13),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 18),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 18),
			ticketCode: "7303/7304",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 23),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 23),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 28),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 33),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 33),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 38),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 43),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 48),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 48),
			ticketCode: "6609",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 53),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 53),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 58),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 58),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 3),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 8),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 8),
			ticketCode: "7313/7314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 13),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 13),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 18),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 23),
			ticketCode: "7423/7424",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(15, 23),
			ticketCode: "826Ч",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 28),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 28),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 33),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 33),
			ticketCode: "7425/7426",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 38),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 38),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 43),
			ticketCode: "7427/7428",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 48),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 48),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 53),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 58),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 58),
			ticketCode: "6527",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 3),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 3),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 8),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 8),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 13),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 13),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 18),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 18),
			ticketCode: "6345",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 23),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 28),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 33),
			ticketCode: "6350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 33),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 38),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 43),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 43),
			ticketCode: "7439/7440",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 48),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 48),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 53),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 53),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 58),
			ticketCode: "7335/7336",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 58),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 3),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 3),
			ticketCode: "7443/7444",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 8),
			ticketCode: "6349",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 8),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 13),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 13),
			ticketCode: "7445/7446",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 18),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 18),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 23),
			ticketCode: "7447/7448",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 23),
			ticketCode: "6612",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 28),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 29),
			ticketCode: "6397",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 33),
			ticketCode: "7449/7450",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 38),
			ticketCode: "6355",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 38),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 43),
			ticketCode: "7451/7452",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 48),
			ticketCode: "6353",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 48),
			ticketCode: "7345/7346",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(17, 53),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 53),
			ticketCode: "7453/7454",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 58),
			ticketCode: "6357",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 58),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 3),
			ticketCode: "7455/7456",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 3),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 8),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 8),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 13),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 13),
			ticketCode: "7457/7458",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 18),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 18),
			ticketCode: "7351/7352",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 23),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 23),
			ticketCode: "7459/7460",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 28),
			ticketCode: "7353/7354",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 28),
			ticketCode: "6529",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 33),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 33),
			ticketCode: "7461/7462",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 38),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 38),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 43),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 43),
			ticketCode: "7463/7464",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 48),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 48),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 53),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 53),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 58),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 58),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 3),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 3),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 8),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 13),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 13),
			ticketCode: "7469/7470",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 18),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 18),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 23),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 23),
			ticketCode: "7471/7472",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 28),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 28),
			ticketCode: "7365/7366",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 33),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 33),
			ticketCode: "7473/7474",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 38),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 38),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 43),
			ticketCode: "7475/7476",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 43),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 48),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 48),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 53),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 58),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 58),
			ticketCode: "6531",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 3),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 3),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 8),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 13),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 13),
			ticketCode: "7481/7482",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 18),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 18),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 23),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 23),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 28),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 28),
			ticketCode: "6613",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 33),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 33),
			ticketCode: "7485/7486",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 38),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 38),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 43),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 43),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 48),
			ticketCode: "7381/7382",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 48),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 53),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 53),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 58),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 3),
			ticketCode: "7491/7492",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 8),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 8),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 13),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 13),
			ticketCode: "7493/7494",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 18),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 18),
			ticketCode: "7387/7388",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 23),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 23),
			ticketCode: "7495/7496",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 28),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 28),
			ticketCode: "7389/7390",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 33),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 33),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 38),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 43),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 48),
			ticketCode: "7393/7394",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 48),
			ticketCode: "6415",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 53),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 53),
			ticketCode: "7201/7202",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(21, 57),
			ticketCode: "725Ч",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 58),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 3),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 8),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 13),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 13),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 18),
			ticketCode: "7399/7400",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 18),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 23),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 23),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 28),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 28),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 33),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 38),
			ticketCode: "7403/7404",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 38),
			ticketCode: "6721",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 43),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 43),
			ticketCode: "6524",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 48),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 53),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 58),
			ticketCode: "7407/7408",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 58),
			ticketCode: "6615",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 3),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 3),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 8),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 8),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 13),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 18),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 23),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 23),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 28),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 28),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 33),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 38),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 43),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 48),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(23, 53),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 53),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 53),
			ticketCode: "7419/7420",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 58),
			ticketCode: "6417",
		},
	],
	"12": [
		{
			name: "Белгород — Санкт-Петербург",
			dateTime: getDate(1, 10),
			ticketCode: "120В",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(5, 25),
			ticketCode: "6770",
		},
		{
			name: "Бологое — Тверь",
			dateTime: getDate(5, 39),
			ticketCode: "6771",
		},
		{
			name: "Санкт-Петербург — Белгород",
			dateTime: getDate(6, 3),
			ticketCode: "119А",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(6, 55),
			ticketCode: "6762/6761",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 18),
			ticketCode: "7961/7963",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(7, 32),
			ticketCode: "7202/7201",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(8, 0),
			ticketCode: "6752/6751",
		},
		{
			name: "Бологое — Тверь",
			dateTime: getDate(8, 36),
			ticketCode: "6773",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(9, 23),
			ticketCode: "7204/7203",
		},
		{
			name: "Тверь — Угловка",
			dateTime: getDate(9, 49),
			ticketCode: "6772/6634",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(10, 8),
			ticketCode: "6764/6763",
		},
		{
			name: "Бологое — Тверь",
			dateTime: getDate(10, 53),
			ticketCode: "6775",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(11, 10),
			ticketCode: "7206/7205",
		},
		{
			name: "Лихославль — Тверь",
			dateTime: getDate(12, 11),
			ticketCode: "6791",
		},
		{
			name: "Бологое — Тверь",
			dateTime: getDate(15, 30),
			ticketCode: "6777",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(15, 53),
			ticketCode: "7208/7207",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(16, 32),
			ticketCode: "6754/6753",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(17, 15),
			ticketCode: "7210/7209",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(18, 8),
			ticketCode: "6766/6765",
		},
		{
			name: "Угловка — Тверь",
			dateTime: getDate(18, 21),
			ticketCode: "6635/6779",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(18, 22),
			ticketCode: "6776",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(18, 27),
			ticketCode: "7212/7211",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(19, 48),
			ticketCode: "7214/7213",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(20, 7),
			ticketCode: "6778",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(21, 22),
			ticketCode: "7216/7215",
		},
		{
			name: "Москва (Ленинградский вокзал) — Бологое",
			dateTime: getDate(21, 37),
			ticketCode: "7960/7962",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(21, 57),
			ticketCode: "6780",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(22, 55),
			ticketCode: "6756/6755",
		},
	],
	"13": [
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(0, 1),
			ticketCode: "6720",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 18),
			ticketCode: "6701",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 7),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(6, 16),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 21),
			ticketCode: "6702",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 32),
			ticketCode: "6782",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(8, 54),
			ticketCode: "6707",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(12, 19),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 27),
			ticketCode: "6706",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 30),
			ticketCode: "6922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 44),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(14, 51),
			ticketCode: "6921",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 49),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(18, 48),
			ticketCode: "6749/7939",
		},
	],
	"14": [
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 8),
			ticketCode: "6723",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 13),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 13),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 18),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 23),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 28),
			ticketCode: "7421/7422",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 28),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 33),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 36),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 46),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 53),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 56),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 6),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 13),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 16),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 26),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 33),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 36),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 43),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 53),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 3),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 7),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 13),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 18),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 23),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 28),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 33),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 38),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 43),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 48),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 53),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 58),
			ticketCode: "6305",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 58),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 3),
			ticketCode: "7315/7316",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 3),
			ticketCode: "6504",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 8),
			ticketCode: "7201/7202",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 8),
			ticketCode: "6507",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 13),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 13),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 18),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 18),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 23),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 28),
			ticketCode: "7205/7206",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 28),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 33),
			ticketCode: "7321/7322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 38),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 38),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 43),
			ticketCode: "7323/7324",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 48),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 48),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 53),
			ticketCode: "7325/7326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 58),
			ticketCode: "7211/7212",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 58),
			ticketCode: "6703",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 3),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 3),
			ticketCode: "7327/7328",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 8),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 8),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 13),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 13),
			ticketCode: "6318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 18),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 18),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 23),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 23),
			ticketCode: "6506",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 28),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 33),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 33),
			ticketCode: "6402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 38),
			ticketCode: "7219/7220",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 38),
			ticketCode: "6401",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 43),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 43),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 48),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 48),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 53),
			ticketCode: "6308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 53),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 58),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 58),
			ticketCode: "6313",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 3),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 3),
			ticketCode: "6704",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 8),
			ticketCode: "7225/7226",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 8),
			ticketCode: "6513",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 13),
			ticketCode: "7341/7342",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 13),
			ticketCode: "6338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 18),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 23),
			ticketCode: "7343/7344",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 23),
			ticketCode: "6508",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 28),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 33),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 33),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 38),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 43),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 43),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 48),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 48),
			ticketCode: "7233/7234",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 53),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 53),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 58),
			ticketCode: "7235/7236",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 58),
			ticketCode: "6515",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 3),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 8),
			ticketCode: "7237/7238",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 13),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 13),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 18),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 18),
			ticketCode: "7239/7240",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 23),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 23),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 28),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 33),
			ticketCode: "7357/7358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 38),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 38),
			ticketCode: "6403",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 43),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 43),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 48),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 48),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 53),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 58),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 3),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 8),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 8),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 13),
			ticketCode: "7365/7366",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 13),
			ticketCode: "6606",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 18),
			ticketCode: "7251/7252",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 18),
			ticketCode: "6519",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 23),
			ticketCode: "7367/7368",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 23),
			ticketCode: "6510",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 28),
			ticketCode: "7253/7254",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 32),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 33),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 38),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 43),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 48),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 48),
			ticketCode: "7257/7258",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 53),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 53),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 58),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 3),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 8),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 8),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 13),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 13),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 18),
			ticketCode: "7263/7264",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 23),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 23),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 28),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 33),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 33),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 38),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 43),
			ticketCode: "7383/7384",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 43),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 48),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 48),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 53),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 58),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 3),
			ticketCode: "7387/7388",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 3),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 8),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 8),
			ticketCode: "7273/7274",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 12),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 13),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 18),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 18),
			ticketCode: "6521",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 23),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 23),
			ticketCode: "7391/7392",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 27),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 28),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 33),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 38),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 43),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 48),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 53),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 58),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 58),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 3),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 8),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 8),
			ticketCode: "7285/7286",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 13),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 13),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 18),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 18),
			ticketCode: "7287/7288",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 23),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 23),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 28),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 33),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 38),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 38),
			ticketCode: "7291/7292",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 43),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 43),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 48),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 53),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 58),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 58),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 2),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 3),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 8),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 13),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 18),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 23),
			ticketCode: "7415/7416",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 23),
			ticketCode: "6610",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 28),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 28),
			ticketCode: "6609",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 33),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 33),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 38),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 38),
			ticketCode: "7303/7304",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 43),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 43),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 48),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 48),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 53),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 53),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 58),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 3),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 8),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 8),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 13),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 13),
			ticketCode: "7425/7426",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 18),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 18),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 23),
			ticketCode: "7427/7428",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 28),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 28),
			ticketCode: "7313/7314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 33),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 33),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 38),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 38),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 43),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 48),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 48),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 53),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 53),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 58),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 58),
			ticketCode: "6345",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 3),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 8),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 13),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 18),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 23),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 23),
			ticketCode: "7439/7440",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 28),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 28),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 33),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 33),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 38),
			ticketCode: "7327/7328",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 38),
			ticketCode: "6713",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 43),
			ticketCode: "7443/7444",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 48),
			ticketCode: "6349",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 48),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 53),
			ticketCode: "6350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 53),
			ticketCode: "7445/7446",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 58),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 58),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 3),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 3),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 8),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 13),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 13),
			ticketCode: "7449/7450",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 18),
			ticketCode: "6355",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 18),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 23),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 23),
			ticketCode: "7451/7452",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 28),
			ticketCode: "6353",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 28),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 33),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 33),
			ticketCode: "7453/7454",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 38),
			ticketCode: "6357",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 38),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 43),
			ticketCode: "7455/7456",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 43),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 48),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 48),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 53),
			ticketCode: "7457/7458",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 58),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 58),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 3),
			ticketCode: "7459/7460",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 8),
			ticketCode: "7345/7346",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 8),
			ticketCode: "6529",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 13),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 13),
			ticketCode: "7461/7462",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 18),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 18),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 23),
			ticketCode: "7463/7464",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 23),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 28),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 28),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 33),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 33),
			ticketCode: "7465/7466",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 38),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 38),
			ticketCode: "7351/7352",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 43),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 43),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 48),
			ticketCode: "7353/7354",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 53),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 53),
			ticketCode: "7469/7470",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 58),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 58),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 3),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 3),
			ticketCode: "7471/7472",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 8),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 8),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 13),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 13),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 18),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 18),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 23),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 23),
			ticketCode: "7475/7476",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 28),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 28),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 33),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 33),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 38),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 38),
			ticketCode: "6531",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 43),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 43),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 48),
			ticketCode: "7365/7366",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 53),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 53),
			ticketCode: "7481/7482",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 58),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 58),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 3),
			ticketCode: "7483/7484",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 3),
			ticketCode: "6614",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 8),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 8),
			ticketCode: "6613",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 13),
			ticketCode: "7485/7486",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 18),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 18),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 23),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 23),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 28),
			ticketCode: "7373/7374",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 28),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 33),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 33),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 38),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 43),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 43),
			ticketCode: "7491/7492",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 48),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 48),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 53),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 53),
			ticketCode: "7493/7494",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 58),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 58),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 3),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 3),
			ticketCode: "7495/7496",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 8),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 8),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 13),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 13),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 18),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 23),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 28),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 28),
			ticketCode: "6415",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 33),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 33),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 38),
			ticketCode: "7387/7388",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 43),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 43),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 48),
			ticketCode: "7389/7390",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 53),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 53),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 58),
			ticketCode: "7391/7392",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 58),
			ticketCode: "6535",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 3),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 8),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 8),
			ticketCode: "7393/7394",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 13),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 13),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 18),
			ticketCode: "7395/7396",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 18),
			ticketCode: "6721",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 23),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 28),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 33),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 33),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 38),
			ticketCode: "7399/7400",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 38),
			ticketCode: "6615",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 43),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 43),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 48),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 48),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 53),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 58),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 3),
			ticketCode: "7219/7220",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 3),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 8),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 8),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 13),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 18),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 23),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 23),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 28),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 33),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 38),
			ticketCode: "7411/7412",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 38),
			ticketCode: "6417",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 43),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 43),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 48),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 48),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 53),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 58),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 3),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 8),
			ticketCode: "7417/7418",
		},
	],
	"15": [],
	"16": [
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 45),
			ticketCode: "6701",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 17),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(6, 5),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 10),
			ticketCode: "6702",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 21),
			ticketCode: "6782",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(9, 5),
			ticketCode: "6707",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(12, 8),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 16),
			ticketCode: "6706",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 19),
			ticketCode: "6922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 55),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(15, 1),
			ticketCode: "6921",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 38),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(18, 58),
			ticketCode: "6749/7939",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 50),
			ticketCode: "6720",
		},
	],
	"17": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 0),
			ticketCode: "7227/7228",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 1),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 5),
			ticketCode: "6381",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 10),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 11),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 16),
			ticketCode: "6390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 20),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 21),
			ticketCode: "7423/7424",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 25),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 30),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 31),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 36),
			ticketCode: "6802",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 40),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 41),
			ticketCode: "7427/7428",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 45),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 51),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 56),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 1),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 11),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 16),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 21),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 26),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 10),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 20),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 25),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 30),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 35),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 40),
			ticketCode: "7307/7308",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 41),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 45),
			ticketCode: "6303",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 46),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 50),
			ticketCode: "7309/7310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 51),
			ticketCode: "7201/7202",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 55),
			ticketCode: "6603",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 56),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 0),
			ticketCode: "7311/7312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 1),
			ticketCode: "7203/7204",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 5),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 10),
			ticketCode: "7313/7314",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 11),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 15),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 20),
			ticketCode: "7315/7316",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 21),
			ticketCode: "7207/7208",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 25),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 30),
			ticketCode: "7317/7318",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 31),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 35),
			ticketCode: "6801",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 40),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 41),
			ticketCode: "7211/7212",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 45),
			ticketCode: "6701",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 46),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 50),
			ticketCode: "7321/7322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 51),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 55),
			ticketCode: "6509",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 56),
			ticketCode: "6318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 0),
			ticketCode: "7323/7324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 1),
			ticketCode: "7215/7216",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 5),
			ticketCode: "6601",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 6),
			ticketCode: "6506",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 10),
			ticketCode: "7325/7326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 11),
			ticketCode: "7217/7218",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 15),
			ticketCode: "6703",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 16),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 20),
			ticketCode: "7327/7328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 21),
			ticketCode: "7219/7220",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 25),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 26),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 30),
			ticketCode: "7329/7330",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 31),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 35),
			ticketCode: "6307",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 36),
			ticketCode: "6308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 40),
			ticketCode: "7331/7332",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 41),
			ticketCode: "7223/7224",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 46),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 50),
			ticketCode: "7333/7334",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 51),
			ticketCode: "7225/7226",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 55),
			ticketCode: "6401",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 56),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 0),
			ticketCode: "7335/7336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 1),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 5),
			ticketCode: "6311",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 6),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 10),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 11),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 15),
			ticketCode: "6313",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 16),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 20),
			ticketCode: "7339/7340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 21),
			ticketCode: "7231/7232",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 25),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 26),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 30),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 31),
			ticketCode: "7233/7234",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 36),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 40),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 41),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 50),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 51),
			ticketCode: "7237/7238",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 56),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 0),
			ticketCode: "7347/7348",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 1),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 5),
			ticketCode: "6315",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 6),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 10),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 11),
			ticketCode: "7241/7242",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 15),
			ticketCode: "6515",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 20),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 21),
			ticketCode: "7243/7244",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 25),
			ticketCode: "6517",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 26),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 30),
			ticketCode: "7353/7354",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 31),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 35),
			ticketCode: "6317",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 40),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 41),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 50),
			ticketCode: "7357/7358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 51),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 55),
			ticketCode: "6403",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 56),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 0),
			ticketCode: "7359/7360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 1),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 5),
			ticketCode: "6391",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 6),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 10),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 11),
			ticketCode: "7253/7254",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 15),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 20),
			ticketCode: "7363/7364",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 21),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 25),
			ticketCode: "6319",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 30),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 31),
			ticketCode: "7257/7258",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 35),
			ticketCode: "6519",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 36),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 40),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 41),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 50),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 51),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 56),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 0),
			ticketCode: "7371/7372",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 1),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 5),
			ticketCode: "6321",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 6),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 10),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 11),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 16),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 20),
			ticketCode: "7375/7376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 21),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 25),
			ticketCode: "6113",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 26),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 30),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 31),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 40),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 41),
			ticketCode: "7271/7272",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 46),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 50),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 51),
			ticketCode: "7273/7274",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 56),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 0),
			ticketCode: "7383/7384",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 1),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 5),
			ticketCode: "6201",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 6),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 10),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 11),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 20),
			ticketCode: "7387/7388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 21),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 24),
			ticketCode: "6323",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 30),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 31),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 35),
			ticketCode: "6521",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 40),
			ticketCode: "7391/7392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 41),
			ticketCode: "7283/7284",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 44),
			ticketCode: "6709",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 50),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 51),
			ticketCode: "7285/7286",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 56),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 0),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 1),
			ticketCode: "7287/7288",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 6),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 10),
			ticketCode: "7397/7398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 11),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 15),
			ticketCode: "6325",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 20),
			ticketCode: "7399/7400",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 21),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 25),
			ticketCode: "6327",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 26),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 30),
			ticketCode: "7401/7402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 31),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 35),
			ticketCode: "6329",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 40),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 41),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 45),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 50),
			ticketCode: "7405/7406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 51),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 55),
			ticketCode: "6331",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 0),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 1),
			ticketCode: "7299/7300",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 6),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 10),
			ticketCode: "7409/7410",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 11),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 15),
			ticketCode: "6333",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 16),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 20),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 21),
			ticketCode: "7303/7304",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 26),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 30),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 31),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 36),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 40),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 41),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 45),
			ticketCode: "6609",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 50),
			ticketCode: "7417/7418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 51),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 55),
			ticketCode: "6111",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 56),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 0),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 1),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 5),
			ticketCode: "6335",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 10),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 11),
			ticketCode: "7313/7314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 16),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 20),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 21),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 25),
			ticketCode: "6339",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 30),
			ticketCode: "7425/7426",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 31),
			ticketCode: "7317/7318",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 35),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 36),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 40),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 41),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 45),
			ticketCode: "6341",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 50),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 51),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 55),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 0),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 1),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 5),
			ticketCode: "6343",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 6),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 10),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 11),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 15),
			ticketCode: "6345",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 16),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 20),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 21),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 30),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 31),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 36),
			ticketCode: "6350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 40),
			ticketCode: "7439/7440",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 41),
			ticketCode: "7331/7332",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 45),
			ticketCode: "6409",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 46),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 50),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 51),
			ticketCode: "7333/7334",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 55),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 56),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 0),
			ticketCode: "7443/7444",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 1),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 5),
			ticketCode: "6349",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 6),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 10),
			ticketCode: "7445/7446",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 11),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 15),
			ticketCode: "6351",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 16),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 20),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 21),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 26),
			ticketCode: "6397",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 26),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 30),
			ticketCode: "7449/7450",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 31),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 35),
			ticketCode: "6355",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 40),
			ticketCode: "7451/7452",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 41),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 45),
			ticketCode: "6353",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 50),
			ticketCode: "7453/7454",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 51),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 55),
			ticketCode: "6357",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(17, 56),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 0),
			ticketCode: "7455/7456",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 1),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 5),
			ticketCode: "6359",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 6),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 10),
			ticketCode: "7457/7458",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 11),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 15),
			ticketCode: "6361",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 16),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 20),
			ticketCode: "7459/7460",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 21),
			ticketCode: "7351/7352",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 25),
			ticketCode: "6529",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 26),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 30),
			ticketCode: "7461/7462",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 31),
			ticketCode: "7353/7354",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 35),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 36),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 40),
			ticketCode: "7463/7464",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 41),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 45),
			ticketCode: "6363",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 46),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 50),
			ticketCode: "7465/7466",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 51),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 55),
			ticketCode: "6365",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 56),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 0),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 1),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 6),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 10),
			ticketCode: "7469/7470",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 11),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 15),
			ticketCode: "6367",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 16),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 20),
			ticketCode: "7471/7472",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 21),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 25),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 26),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 30),
			ticketCode: "7473/7474",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 31),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 35),
			ticketCode: "6371",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 36),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 40),
			ticketCode: "7475/7476",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 41),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 45),
			ticketCode: "6373",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 46),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 50),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 51),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 55),
			ticketCode: "6531",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 0),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 1),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 6),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 10),
			ticketCode: "7481/7482",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 11),
			ticketCode: "7373/7374",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 15),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 16),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 20),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 21),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 25),
			ticketCode: "6613",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 26),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 30),
			ticketCode: "7485/7486",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 31),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 35),
			ticketCode: "6533",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 36),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 40),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 41),
			ticketCode: "7379/7380",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 45),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 46),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 50),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 51),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 56),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 0),
			ticketCode: "7491/7492",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 1),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 5),
			ticketCode: "6393",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 10),
			ticketCode: "7493/7494",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 11),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 15),
			ticketCode: "6375",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 16),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 20),
			ticketCode: "7495/7496",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 21),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 25),
			ticketCode: "6377",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 26),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 30),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 31),
			ticketCode: "7389/7390",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 36),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 40),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 41),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 45),
			ticketCode: "6415",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 50),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 51),
			ticketCode: "7393/7394",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 56),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 0),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 1),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 10),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 11),
			ticketCode: "7397/7398",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 15),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 16),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 20),
			ticketCode: "7207/7208",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 21),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 25),
			ticketCode: "6395",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 26),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 30),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 31),
			ticketCode: "7401/7402",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 35),
			ticketCode: "6721",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 40),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 41),
			ticketCode: "7403/7404",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 46),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 50),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 51),
			ticketCode: "7405/7406",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 55),
			ticketCode: "6615",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 0),
			ticketCode: "7215/7216",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 1),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 5),
			ticketCode: "6337",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 6),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 10),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 11),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 20),
			ticketCode: "7219/7220",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 21),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 25),
			ticketCode: "6379",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 26),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 30),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 31),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 40),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 41),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 50),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 51),
			ticketCode: "7417/7418",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 55),
			ticketCode: "6417",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(23, 56),
			ticketCode: "6620",
		},
	],
	"18": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 0),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 1),
			ticketCode: "7415/7416",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 5),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 10),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 11),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 16),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 20),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 21),
			ticketCode: "7419/7420",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 25),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 31),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 36),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 39),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 49),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 56),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 59),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 9),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 16),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 19),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 29),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 36),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 39),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 46),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 50),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 0),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 4),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 10),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 15),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 20),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 25),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 30),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 35),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 40),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 45),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 50),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 55),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 0),
			ticketCode: "7315/7316",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 1),
			ticketCode: "6602",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 5),
			ticketCode: "6507",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 6),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 10),
			ticketCode: "7317/7318",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 11),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 15),
			ticketCode: "6801",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 16),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 20),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 21),
			ticketCode: "7203/7204",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 25),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 30),
			ticketCode: "7321/7322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 31),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 35),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 40),
			ticketCode: "7323/7324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 41),
			ticketCode: "7207/7208",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 45),
			ticketCode: "6601",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 50),
			ticketCode: "7325/7326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 51),
			ticketCode: "7209/7210",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 55),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 0),
			ticketCode: "7327/7328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 1),
			ticketCode: "7211/7212",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 5),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 6),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 10),
			ticketCode: "7329/7330",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 11),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 15),
			ticketCode: "6307",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 16),
			ticketCode: "6318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 20),
			ticketCode: "7331/7332",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 21),
			ticketCode: "7215/7216",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 26),
			ticketCode: "6506",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 30),
			ticketCode: "7333/7334",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 31),
			ticketCode: "7217/7218",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 35),
			ticketCode: "6401",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 36),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 40),
			ticketCode: "7335/7336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 41),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 45),
			ticketCode: "6311",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 46),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 50),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 51),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 55),
			ticketCode: "6313",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 56),
			ticketCode: "6308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 0),
			ticketCode: "7339/7340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 1),
			ticketCode: "7223/7224",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 5),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 6),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 10),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 11),
			ticketCode: "7225/7226",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 16),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 20),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 21),
			ticketCode: "7227/7228",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 26),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 30),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 31),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 36),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 40),
			ticketCode: "7347/7348",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 41),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 45),
			ticketCode: "6315",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 46),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 50),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 51),
			ticketCode: "7233/7234",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 55),
			ticketCode: "6515",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 56),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 0),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 1),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 10),
			ticketCode: "7353/7354",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 11),
			ticketCode: "7237/7238",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 15),
			ticketCode: "6317",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 16),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 20),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 21),
			ticketCode: "7239/7240",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 26),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 30),
			ticketCode: "7357/7358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 31),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 35),
			ticketCode: "6403",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 40),
			ticketCode: "7359/7360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 41),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 45),
			ticketCode: "6391",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 46),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 50),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 51),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 0),
			ticketCode: "7363/7364",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 1),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 5),
			ticketCode: "6319",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 10),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 11),
			ticketCode: "7249/7250",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 15),
			ticketCode: "6519",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 16),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 20),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 21),
			ticketCode: "7251/7252",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 26),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 30),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 31),
			ticketCode: "7253/7254",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 36),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 40),
			ticketCode: "7371/7372",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 41),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 45),
			ticketCode: "6321",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 50),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 51),
			ticketCode: "7257/7258",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 56),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 0),
			ticketCode: "7375/7376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 1),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 5),
			ticketCode: "6113",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 10),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 11),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 16),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 20),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 21),
			ticketCode: "7263/7264",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 26),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 30),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 31),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 36),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 40),
			ticketCode: "7383/7384",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 41),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 45),
			ticketCode: "6201",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 46),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 50),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 51),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 0),
			ticketCode: "7387/7388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 1),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 5),
			ticketCode: "6323",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 6),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 10),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 11),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 15),
			ticketCode: "6521",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 16),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 20),
			ticketCode: "7391/7392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 21),
			ticketCode: "7275/7276",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 24),
			ticketCode: "6709",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 26),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 30),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 31),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 40),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 41),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 50),
			ticketCode: "7397/7398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 51),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 55),
			ticketCode: "6325",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 0),
			ticketCode: "7399/7400",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 1),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 5),
			ticketCode: "6327",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 10),
			ticketCode: "7401/7402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 11),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 15),
			ticketCode: "6329",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 16),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 20),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 21),
			ticketCode: "7287/7288",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 26),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 30),
			ticketCode: "7405/7406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 31),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 35),
			ticketCode: "6331",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 40),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 41),
			ticketCode: "7291/7292",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 46),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 50),
			ticketCode: "7409/7410",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 51),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 55),
			ticketCode: "6333",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 0),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 1),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 6),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 10),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 11),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 20),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 21),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 25),
			ticketCode: "6609",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 26),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 30),
			ticketCode: "7417/7418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 31),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 35),
			ticketCode: "6111",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 36),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 40),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 41),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 45),
			ticketCode: "6335",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 46),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 50),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 51),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 56),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 0),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 1),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 5),
			ticketCode: "6339",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 10),
			ticketCode: "7425/7426",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 11),
			ticketCode: "7309/7310",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 15),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 16),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 20),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 21),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 25),
			ticketCode: "6341",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 30),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 31),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 35),
			ticketCode: "6527",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 36),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 40),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 41),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 45),
			ticketCode: "6343",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 50),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 51),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 55),
			ticketCode: "6345",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 56),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 0),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 1),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 10),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 11),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 20),
			ticketCode: "7439/7440",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 21),
			ticketCode: "7323/7324",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 25),
			ticketCode: "6409",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 26),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 30),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 31),
			ticketCode: "7325/7326",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 35),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 36),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 40),
			ticketCode: "7443/7444",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 41),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 45),
			ticketCode: "6349",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 50),
			ticketCode: "7445/7446",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 51),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 55),
			ticketCode: "6351",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 56),
			ticketCode: "6350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 0),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 1),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 6),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 10),
			ticketCode: "7449/7450",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 11),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 15),
			ticketCode: "6355",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 16),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 20),
			ticketCode: "7451/7452",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 21),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 25),
			ticketCode: "6353",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 26),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 30),
			ticketCode: "7453/7454",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 31),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 35),
			ticketCode: "6357",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 36),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 40),
			ticketCode: "7455/7456",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 41),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 45),
			ticketCode: "6359",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 46),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 50),
			ticketCode: "7457/7458",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 51),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 55),
			ticketCode: "6361",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 0),
			ticketCode: "7459/7460",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 1),
			ticketCode: "7343/7344",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 5),
			ticketCode: "6529",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 10),
			ticketCode: "7461/7462",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 11),
			ticketCode: "7345/7346",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 15),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 16),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 20),
			ticketCode: "7463/7464",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 21),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 25),
			ticketCode: "6363",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 26),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 30),
			ticketCode: "7465/7466",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 31),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 35),
			ticketCode: "6365",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 36),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 40),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 41),
			ticketCode: "7351/7352",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 46),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 50),
			ticketCode: "7469/7470",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 51),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 55),
			ticketCode: "6367",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 56),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 0),
			ticketCode: "7471/7472",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 1),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 5),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 6),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 10),
			ticketCode: "7473/7474",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 11),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 15),
			ticketCode: "6371",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 16),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 20),
			ticketCode: "7475/7476",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 21),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 25),
			ticketCode: "6373",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 26),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 30),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 31),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 35),
			ticketCode: "6531",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 36),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 40),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 41),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 46),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 50),
			ticketCode: "7481/7482",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 51),
			ticketCode: "7365/7366",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 55),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 56),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 0),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 1),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 5),
			ticketCode: "6613",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 6),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 10),
			ticketCode: "7485/7486",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 11),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 15),
			ticketCode: "6533",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 20),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 21),
			ticketCode: "7371/7372",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 25),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 26),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 30),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 31),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 36),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 40),
			ticketCode: "7491/7492",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 41),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 45),
			ticketCode: "6393",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 46),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 50),
			ticketCode: "7493/7494",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 51),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 55),
			ticketCode: "6375",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 56),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 0),
			ticketCode: "7495/7496",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 1),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 5),
			ticketCode: "6377",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 6),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 10),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 11),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 16),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 20),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 21),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 25),
			ticketCode: "6415",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 30),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 31),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 36),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 40),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 41),
			ticketCode: "7387/7388",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 46),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 50),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 51),
			ticketCode: "7389/7390",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 55),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 56),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 0),
			ticketCode: "7207/7208",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 1),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 5),
			ticketCode: "6395",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 10),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 11),
			ticketCode: "7393/7394",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 15),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 16),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 20),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 21),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 30),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 31),
			ticketCode: "7397/7398",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 35),
			ticketCode: "6615",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 36),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 40),
			ticketCode: "7215/7216",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 41),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 45),
			ticketCode: "6337",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 46),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 50),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 51),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 0),
			ticketCode: "7219/7220",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 1),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 5),
			ticketCode: "6379",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 6),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 10),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 11),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 20),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 21),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 26),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 30),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 31),
			ticketCode: "7409/7410",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 35),
			ticketCode: "6417",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 40),
			ticketCode: "7227/7228",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 41),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 45),
			ticketCode: "6381",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 46),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 50),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 51),
			ticketCode: "7413/7414",
		},
	],
	"19": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 2),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 2),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 7),
			ticketCode: "6390",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 7),
			ticketCode: "6417",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 12),
			ticketCode: "7227/7228",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 12),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 17),
			ticketCode: "6381",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 22),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 22),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 27),
			ticketCode: "6802",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 32),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 32),
			ticketCode: "7427/7428",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 37),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 42),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 42),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 47),
			ticketCode: "6392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 52),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 52),
			ticketCode: "7431/7432",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 57),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 2),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 7),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 12),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 17),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 22),
			ticketCode: "7301/7302",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 29),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 32),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 36),
			ticketCode: "6503",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 37),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 42),
			ticketCode: "7305/7306",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 42),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 47),
			ticketCode: "6101",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 47),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 52),
			ticketCode: "7307/7308",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 52),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 57),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 2),
			ticketCode: "7309/7310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 2),
			ticketCode: "7205/7206",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 7),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 12),
			ticketCode: "7311/7312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 12),
			ticketCode: "7207/7208",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 17),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 22),
			ticketCode: "7313/7314",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 22),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 27),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 32),
			ticketCode: "7315/7316",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 32),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 37),
			ticketCode: "6304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 37),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 42),
			ticketCode: "7317/7318",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 42),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 47),
			ticketCode: "6801",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 47),
			ticketCode: "6318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 52),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 52),
			ticketCode: "7215/7216",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(6, 57),
			ticketCode: "6506",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 57),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 2),
			ticketCode: "7321/7322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 2),
			ticketCode: "7217/7218",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 7),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 7),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 12),
			ticketCode: "7323/7324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 12),
			ticketCode: "7219/7220",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 17),
			ticketCode: "6601",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 17),
			ticketCode: "6306",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 22),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 22),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 27),
			ticketCode: "6308",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 27),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 32),
			ticketCode: "7327/7328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 32),
			ticketCode: "7223/7224",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 37),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 37),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 42),
			ticketCode: "7329/7330",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 42),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 47),
			ticketCode: "6307",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 47),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 52),
			ticketCode: "7331/7332",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 52),
			ticketCode: "7227/7228",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 57),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 2),
			ticketCode: "7333/7334",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 2),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 7),
			ticketCode: "6346",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 7),
			ticketCode: "6401",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 12),
			ticketCode: "7335/7336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 12),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 17),
			ticketCode: "6311",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 17),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 22),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 22),
			ticketCode: "7233/7234",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 27),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 27),
			ticketCode: "6313",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 32),
			ticketCode: "7339/7340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 32),
			ticketCode: "7235/7236",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 37),
			ticketCode: "6513",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 42),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 42),
			ticketCode: "7237/7238",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 47),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 52),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 52),
			ticketCode: "7239/7240",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 57),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 2),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 2),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 12),
			ticketCode: "7347/7348",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 12),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 17),
			ticketCode: "6315",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 17),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 22),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 22),
			ticketCode: "7245/7246",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 27),
			ticketCode: "6515",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 32),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 32),
			ticketCode: "7247/7248",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 37),
			ticketCode: "6517",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 42),
			ticketCode: "7353/7354",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 42),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 47),
			ticketCode: "6317",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 47),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 52),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 52),
			ticketCode: "7251/7252",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 57),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 2),
			ticketCode: "7357/7358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 2),
			ticketCode: "7253/7254",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 6),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 7),
			ticketCode: "6403",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 12),
			ticketCode: "7359/7360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 12),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 17),
			ticketCode: "6391",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 22),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 22),
			ticketCode: "7257/7258",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 27),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 32),
			ticketCode: "7363/7364",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 32),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 37),
			ticketCode: "6319",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 42),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 42),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 47),
			ticketCode: "6324",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 47),
			ticketCode: "6519",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 52),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 52),
			ticketCode: "7263/7264",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 57),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 2),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 2),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 7),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 12),
			ticketCode: "7371/7372",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 12),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 17),
			ticketCode: "6321",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 17),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 22),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 22),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 32),
			ticketCode: "7375/7376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 32),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 37),
			ticketCode: "6113",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 37),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 42),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 42),
			ticketCode: "7273/7274",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 47),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 52),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 52),
			ticketCode: "7275/7276",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(11, 57),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 2),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 2),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 12),
			ticketCode: "7383/7384",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 12),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 17),
			ticketCode: "6201",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 22),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 22),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 32),
			ticketCode: "7387/7388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 32),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 37),
			ticketCode: "6323",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 42),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 42),
			ticketCode: "7285/7286",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 47),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 47),
			ticketCode: "6521",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 52),
			ticketCode: "7391/7392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 52),
			ticketCode: "7287/7288",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 56),
			ticketCode: "6709",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 57),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 2),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 2),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 12),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 12),
			ticketCode: "7291/7292",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 17),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 22),
			ticketCode: "7397/7398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 22),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 27),
			ticketCode: "6325",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 32),
			ticketCode: "7399/7400",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 32),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 36),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 37),
			ticketCode: "6327",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 42),
			ticketCode: "7401/7402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 42),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 47),
			ticketCode: "6329",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 52),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 52),
			ticketCode: "7299/7300",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 57),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 2),
			ticketCode: "7405/7406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 2),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 7),
			ticketCode: "6331",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 7),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 12),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 12),
			ticketCode: "7303/7304",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 17),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 22),
			ticketCode: "7409/7410",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 22),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 27),
			ticketCode: "6333",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 27),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 32),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 32),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 42),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 42),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 47),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 52),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 52),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 57),
			ticketCode: "6609",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 2),
			ticketCode: "7417/7418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 2),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 7),
			ticketCode: "6111",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 7),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 12),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 12),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 17),
			ticketCode: "6335",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 22),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 22),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 27),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 32),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 32),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 37),
			ticketCode: "6339",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 42),
			ticketCode: "7425/7426",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 42),
			ticketCode: "7321/7322",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 47),
			ticketCode: "6407",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 52),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 52),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 57),
			ticketCode: "6341",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 57),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 2),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 2),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 7),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 7),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 12),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 12),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 17),
			ticketCode: "6343",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 22),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 22),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 27),
			ticketCode: "6350",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 27),
			ticketCode: "6345",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 32),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 32),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 37),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 42),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 42),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 47),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 52),
			ticketCode: "7439/7440",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 52),
			ticketCode: "7335/7336",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 57),
			ticketCode: "6409",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 57),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 2),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 2),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 7),
			ticketCode: "6358",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 7),
			ticketCode: "6713",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 12),
			ticketCode: "7443/7444",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 12),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 17),
			ticketCode: "6349",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 17),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 22),
			ticketCode: "7445/7446",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 22),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 27),
			ticketCode: "6351",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 32),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 32),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 37),
			ticketCode: "6397",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 42),
			ticketCode: "7449/7450",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 42),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 47),
			ticketCode: "6355",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(17, 47),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 52),
			ticketCode: "7451/7452",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 52),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 57),
			ticketCode: "6353",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 57),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 2),
			ticketCode: "7453/7454",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 2),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 7),
			ticketCode: "6357",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 7),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 12),
			ticketCode: "7455/7456",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 12),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 17),
			ticketCode: "6359",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 17),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 22),
			ticketCode: "7457/7458",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 22),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 27),
			ticketCode: "6361",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 27),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 32),
			ticketCode: "7459/7460",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 32),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 37),
			ticketCode: "6518",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 37),
			ticketCode: "6529",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 42),
			ticketCode: "7461/7462",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 42),
			ticketCode: "7357/7358",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 47),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 47),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 52),
			ticketCode: "7463/7464",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 52),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 57),
			ticketCode: "6363",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 57),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 2),
			ticketCode: "7465/7466",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 2),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 7),
			ticketCode: "6365",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 7),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 12),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 12),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 17),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 22),
			ticketCode: "7469/7470",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 22),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 27),
			ticketCode: "6367",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 27),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 32),
			ticketCode: "7471/7472",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 32),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 37),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 37),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 42),
			ticketCode: "7473/7474",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 42),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 47),
			ticketCode: "6371",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 52),
			ticketCode: "7475/7476",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 52),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 57),
			ticketCode: "6373",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(19, 57),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 2),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 2),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 7),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 7),
			ticketCode: "6531",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 12),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 12),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 17),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 22),
			ticketCode: "7481/7482",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 22),
			ticketCode: "7377/7378",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 27),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 27),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 32),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 32),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 37),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 37),
			ticketCode: "6613",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 42),
			ticketCode: "7485/7486",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 42),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 47),
			ticketCode: "6533",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 47),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 52),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 52),
			ticketCode: "7383/7384",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 57),
			ticketCode: "6717",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 2),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 2),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 7),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 12),
			ticketCode: "7491/7492",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 12),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 17),
			ticketCode: "6393",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 17),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 22),
			ticketCode: "7493/7494",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 22),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 27),
			ticketCode: "6375",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 27),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 32),
			ticketCode: "7495/7496",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 32),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 37),
			ticketCode: "6377",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 42),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 42),
			ticketCode: "7393/7394",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 47),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 52),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 52),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 57),
			ticketCode: "6415",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 2),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 2),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 7),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 12),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 12),
			ticketCode: "7399/7400",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 17),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 22),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 22),
			ticketCode: "7401/7402",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 27),
			ticketCode: "6535",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 32),
			ticketCode: "7207/7208",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 32),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 37),
			ticketCode: "6395",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 37),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 42),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 42),
			ticketCode: "7405/7406",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 47),
			ticketCode: "6721",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 52),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 52),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 57),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 2),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 2),
			ticketCode: "7409/7410",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 7),
			ticketCode: "6615",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 12),
			ticketCode: "7215/7216",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 12),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 17),
			ticketCode: "6337",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 17),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 22),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 22),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 32),
			ticketCode: "7219/7220",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 32),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 37),
			ticketCode: "6379",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 42),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 42),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(23, 47),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 52),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 52),
			ticketCode: "7419/7420",
		},
	],
	"20": [
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 2),
			ticketCode: "6417",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 5),
			ticketCode: "7421/7422",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 7),
			ticketCode: "7227/7228",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 10),
			ticketCode: "6390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 12),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 15),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 17),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 25),
			ticketCode: "7425/7426",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 27),
			ticketCode: "7231/7232",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 30),
			ticketCode: "6802",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 32),
			ticketCode: "6723",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 35),
			ticketCode: "7427/7428",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 37),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 45),
			ticketCode: "7429/7430",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 47),
			ticketCode: "7235/7236",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 50),
			ticketCode: "6392",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 52),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 55),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 5),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 10),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 15),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 20),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 17),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 27),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 31),
			ticketCode: "6503",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 34),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 37),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 40),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 42),
			ticketCode: "6101",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 45),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 47),
			ticketCode: "7307/7308",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 50),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 52),
			ticketCode: "6303",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 55),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 57),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 2),
			ticketCode: "6603",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 5),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 7),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 12),
			ticketCode: "6505",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 15),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 17),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 22),
			ticketCode: "6305",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 25),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 27),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 32),
			ticketCode: "6507",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 35),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 37),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 40),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 42),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 45),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 47),
			ticketCode: "7319/7320",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 50),
			ticketCode: "6318",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 52),
			ticketCode: "6701",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 55),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 57),
			ticketCode: "7321/7322",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 0),
			ticketCode: "6506",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 2),
			ticketCode: "6509",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 5),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 7),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 10),
			ticketCode: "6402",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 12),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 15),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 17),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 20),
			ticketCode: "6306",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 22),
			ticketCode: "6703",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 25),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 27),
			ticketCode: "7327/7328",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 30),
			ticketCode: "6308",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 32),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 35),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 37),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 40),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 42),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 45),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 47),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 50),
			ticketCode: "6338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 55),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 57),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 0),
			ticketCode: "6508",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 2),
			ticketCode: "6401",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 5),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 7),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 10),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 12),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 15),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 17),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 20),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 22),
			ticketCode: "6313",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 25),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 27),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 30),
			ticketCode: "6312",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 32),
			ticketCode: "6513",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 35),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 37),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 45),
			ticketCode: "7237/7238",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 47),
			ticketCode: "7343/7344",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 50),
			ticketCode: "6314",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 55),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 57),
			ticketCode: "7345/7346",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 0),
			ticketCode: "6396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 5),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 7),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 12),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 15),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 17),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 20),
			ticketCode: "6316",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 22),
			ticketCode: "6515",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 25),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 27),
			ticketCode: "7351/7352",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 32),
			ticketCode: "6517",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 35),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 37),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 42),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 45),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 47),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 50),
			ticketCode: "6606",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 55),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 57),
			ticketCode: "7357/7358",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 0),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 2),
			ticketCode: "6403",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 5),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 7),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 10),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 12),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 15),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 17),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 25),
			ticketCode: "7257/7258",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 27),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 30),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 32),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 35),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 37),
			ticketCode: "7365/7366",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 42),
			ticketCode: "6519",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 45),
			ticketCode: "7261/7262",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 47),
			ticketCode: "7367/7368",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 50),
			ticketCode: "6324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 55),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 57),
			ticketCode: "7369/7370",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 0),
			ticketCode: "6326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 5),
			ticketCode: "7265/7266",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 7),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 10),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 12),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 15),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 17),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 20),
			ticketCode: "6708",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 25),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 27),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 32),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 35),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 37),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 40),
			ticketCode: "6360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 45),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 47),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 50),
			ticketCode: "6512",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 55),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 57),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 0),
			ticketCode: "6406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 5),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 7),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 12),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 15),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 17),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 25),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 27),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 32),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 35),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 37),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 42),
			ticketCode: "6521",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 45),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 47),
			ticketCode: "7391/7392",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 50),
			ticketCode: "6114",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 51),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 55),
			ticketCode: "7287/7288",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 57),
			ticketCode: "7393/7394",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 0),
			ticketCode: "6202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 5),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 7),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 15),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 17),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 20),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 22),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 25),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 27),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 32),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 35),
			ticketCode: "7295/7296",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 37),
			ticketCode: "7401/7402",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 40),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 42),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 45),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 47),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 55),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 57),
			ticketCode: "7405/7406",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 0),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 2),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 5),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 7),
			ticketCode: "7407/7408",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 10),
			ticketCode: "6514",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 15),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 17),
			ticketCode: "7409/7410",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 20),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 22),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 25),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 27),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 30),
			ticketCode: "6112",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 35),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 37),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 45),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 47),
			ticketCode: "7415/7416",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 50),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 52),
			ticketCode: "6609",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 55),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 57),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 2),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 5),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 7),
			ticketCode: "7419/7420",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 10),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 12),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 15),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 17),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 25),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 27),
			ticketCode: "7423/7424",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 30),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 32),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 35),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 37),
			ticketCode: "7425/7426",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 42),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 45),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 47),
			ticketCode: "7427/7428",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 52),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 55),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 57),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 0),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 2),
			ticketCode: "6527",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 5),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 7),
			ticketCode: "7431/7432",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 10),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 12),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 15),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 17),
			ticketCode: "7433/7434",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 22),
			ticketCode: "6345",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 25),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 27),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 30),
			ticketCode: "6350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 35),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 37),
			ticketCode: "7437/7438",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 40),
			ticketCode: "6352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 45),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 47),
			ticketCode: "7439/7440",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 50),
			ticketCode: "6354",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 52),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 55),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 57),
			ticketCode: "7441/7442",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 0),
			ticketCode: "6356",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 2),
			ticketCode: "6713",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 5),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 7),
			ticketCode: "7443/7444",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 10),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 12),
			ticketCode: "6349",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 15),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 17),
			ticketCode: "7445/7446",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 20),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 22),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 25),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 27),
			ticketCode: "7447/7448",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 32),
			ticketCode: "6397",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 35),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 37),
			ticketCode: "7449/7450",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 42),
			ticketCode: "6355",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 45),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 47),
			ticketCode: "7451/7452",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(17, 50),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 52),
			ticketCode: "6353",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 55),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 57),
			ticketCode: "7453/7454",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 0),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 2),
			ticketCode: "6357",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 5),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 7),
			ticketCode: "7455/7456",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 10),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 12),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 15),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 17),
			ticketCode: "7457/7458",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 20),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 22),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 25),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 27),
			ticketCode: "7459/7460",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 30),
			ticketCode: "6366",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 32),
			ticketCode: "6529",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 35),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 37),
			ticketCode: "7461/7462",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 40),
			ticketCode: "6518",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 42),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 45),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 47),
			ticketCode: "7463/7464",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 50),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 52),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 55),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 57),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 0),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 2),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 5),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 7),
			ticketCode: "7467/7468",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 10),
			ticketCode: "6370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 15),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 17),
			ticketCode: "7469/7470",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 20),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 22),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 25),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 27),
			ticketCode: "7471/7472",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 30),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 32),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 35),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 37),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 40),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 42),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 45),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 47),
			ticketCode: "7475/7476",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 52),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 55),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 57),
			ticketCode: "7477/7478",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 0),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 2),
			ticketCode: "6531",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 5),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 7),
			ticketCode: "7479/7480",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 10),
			ticketCode: "6376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 15),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 17),
			ticketCode: "7481/7482",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 20),
			ticketCode: "6378",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 22),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 25),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 27),
			ticketCode: "7483/7484",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 30),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 32),
			ticketCode: "6613",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 35),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 37),
			ticketCode: "7485/7486",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 40),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 42),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 45),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 47),
			ticketCode: "7487/7488",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 50),
			ticketCode: "6384",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 52),
			ticketCode: "6717",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 55),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 57),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 5),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 7),
			ticketCode: "7491/7492",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 10),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 12),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 15),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 17),
			ticketCode: "7493/7494",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 20),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 22),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 25),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 27),
			ticketCode: "7495/7496",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 30),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 32),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 35),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 37),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 45),
			ticketCode: "7393/7394",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 47),
			ticketCode: "7499/7500",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 50),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 52),
			ticketCode: "6415",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 55),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 57),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 5),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 7),
			ticketCode: "7203/7204",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 10),
			ticketCode: "6618",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 15),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 17),
			ticketCode: "7205/7206",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 20),
			ticketCode: "6418",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 22),
			ticketCode: "6535",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 25),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 27),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 32),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 35),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 37),
			ticketCode: "7209/7210",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 40),
			ticketCode: "6524",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 42),
			ticketCode: "6721",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 45),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 47),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 55),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 57),
			ticketCode: "7213/7214",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 0),
			ticketCode: "6388",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 2),
			ticketCode: "6615",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 5),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 7),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 12),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 15),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 17),
			ticketCode: "7217/7218",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 20),
			ticketCode: "6894",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 25),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 27),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 32),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 35),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 37),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 45),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 47),
			ticketCode: "7223/7224",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(23, 50),
			ticketCode: "6620",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 55),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 57),
			ticketCode: "7225/7226",
		},
	],
	"21": [
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 33),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 39),
			ticketCode: "6700",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 6),
			ticketCode: "6603",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 16),
			ticketCode: "6505",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 38),
			ticketCode: "6507",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 55),
			ticketCode: "6701",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 17),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 23),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 33),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 38),
			ticketCode: "6504",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 3),
			ticketCode: "6401",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 32),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 36),
			ticketCode: "6704",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 43),
			ticketCode: "6517",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 43),
			ticketCode: "6519",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 54),
			ticketCode: "6709",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 58),
			ticketCode: "6406",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 47),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 16),
			ticketCode: "6408",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 4),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 54),
			ticketCode: "6410",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 36),
			ticketCode: "6529",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 45),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 46),
			ticketCode: "6412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 39),
			ticketCode: "6518",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 55),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 38),
			ticketCode: "6614",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 44),
			ticketCode: "6520",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 56),
			ticketCode: "6416",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 26),
			ticketCode: "6535",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 44),
			ticketCode: "6721",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 6),
			ticketCode: "6615",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 14),
			ticketCode: "6616",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 7),
			ticketCode: "6618",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(23, 16),
			ticketCode: "6418",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 57),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 46),
			ticketCode: "6620",
		},
	],
	"22": [
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 49),
			ticketCode: "6620",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 30),
			ticketCode: "6503",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 35),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 42),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 4),
			ticketCode: "6702",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 13),
			ticketCode: "6505",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 35),
			ticketCode: "6507",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 52),
			ticketCode: "6701",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 14),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 20),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 30),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 42),
			ticketCode: "6504",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 59),
			ticketCode: "6401",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 16),
			ticketCode: "7951",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 39),
			ticketCode: "7905",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 7),
			ticketCode: "6515",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 39),
			ticketCode: "6704",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 40),
			ticketCode: "6517",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 56),
			ticketCode: "7961/7963",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 28),
			ticketCode: "7925",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 49),
			ticketCode: "7930",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 7),
			ticketCode: "6706",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 41),
			ticketCode: "7932",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 51),
			ticketCode: "6709",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 13),
			ticketCode: "7949",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(13, 1),
			ticketCode: "6406",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 25),
			ticketCode: "7931",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 34),
			ticketCode: "6710",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 44),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 19),
			ticketCode: "6408",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 41),
			ticketCode: "7103",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 55),
			ticketCode: "6409",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 1),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(16, 32),
			ticketCode: "7938",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 57),
			ticketCode: "6410",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 42),
			ticketCode: "6411",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 55),
			ticketCode: "7123",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 49),
			ticketCode: "6412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 8),
			ticketCode: "7914",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(19, 15),
			ticketCode: "7944",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 24),
			ticketCode: "6413",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 30),
			ticketCode: "7941",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 42),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 41),
			ticketCode: "6614",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 47),
			ticketCode: "6520",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 57),
			ticketCode: "7943",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 59),
			ticketCode: "6416",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 23),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 41),
			ticketCode: "7948",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 41),
			ticketCode: "6721",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 56),
			ticketCode: "7945",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 7),
			ticketCode: "6522",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 11),
			ticketCode: "7947",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 17),
			ticketCode: "6616",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 42),
			ticketCode: "6417",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 49),
			ticketCode: "6720",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 10),
			ticketCode: "6618",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(23, 19),
			ticketCode: "6418",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 35),
			ticketCode: "6723",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 54),
			ticketCode: "6617",
		},
	],
	"23": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 8),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 14),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 18),
			ticketCode: "7235/7236",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 19),
			ticketCode: "6620",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 23),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 24),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 34),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 39),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 42),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 52),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 59),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 2),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 12),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 19),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 22),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 32),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 39),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 42),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 49),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 48),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 58),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 2),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 8),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 13),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 18),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 23),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 28),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 33),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 38),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 43),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 48),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 53),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 58),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 3),
			ticketCode: "6507",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 4),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 8),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 9),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 13),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 14),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 18),
			ticketCode: "7319/7320",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 19),
			ticketCode: "6302",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 23),
			ticketCode: "6701",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 24),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 28),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 33),
			ticketCode: "6509",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 34),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 38),
			ticketCode: "7323/7324",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 43),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 44),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 48),
			ticketCode: "7325/7326",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 53),
			ticketCode: "6703",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 54),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 58),
			ticketCode: "7327/7328",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 3),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 4),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 8),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 9),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 13),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 14),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 18),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 19),
			ticketCode: "6318",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 24),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 28),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 29),
			ticketCode: "6506",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 33),
			ticketCode: "6401",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 34),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 38),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 39),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 43),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 44),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 48),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 49),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 53),
			ticketCode: "6313",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 54),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 58),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 59),
			ticketCode: "6308",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 3),
			ticketCode: "6513",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 4),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 8),
			ticketCode: "7341/7342",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 9),
			ticketCode: "6704",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 14),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 18),
			ticketCode: "7343/7344",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 19),
			ticketCode: "6338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 24),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 28),
			ticketCode: "7345/7346",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 29),
			ticketCode: "6508",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 34),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 38),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 39),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 43),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 44),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 48),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 49),
			ticketCode: "6310",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 53),
			ticketCode: "6515",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 54),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 58),
			ticketCode: "7351/7352",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 59),
			ticketCode: "6312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 4),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 8),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 13),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 14),
			ticketCode: "7237/7238",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 18),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 19),
			ticketCode: "6314",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 24),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 28),
			ticketCode: "7357/7358",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 29),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 33),
			ticketCode: "6403",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 34),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 38),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 43),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 44),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 48),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 49),
			ticketCode: "6316",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 54),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 58),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 3),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 4),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 8),
			ticketCode: "7365/7366",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 13),
			ticketCode: "6519",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 14),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 18),
			ticketCode: "7367/7368",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 19),
			ticketCode: "6606",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 24),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 28),
			ticketCode: "7369/7370",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 29),
			ticketCode: "6510",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 34),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 38),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 38),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 43),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 44),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 48),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 54),
			ticketCode: "7257/7258",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 58),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 59),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 3),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 4),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 8),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 14),
			ticketCode: "7261/7262",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 18),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 19),
			ticketCode: "6324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 24),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 28),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 29),
			ticketCode: "6326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 34),
			ticketCode: "7265/7266",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 38),
			ticketCode: "7383/7384",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 39),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 43),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 44),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 48),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 49),
			ticketCode: "6708",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 54),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 58),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 3),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 4),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 8),
			ticketCode: "7389/7390",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 9),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 13),
			ticketCode: "6521",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 14),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 18),
			ticketCode: "7391/7392",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 19),
			ticketCode: "6512",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 22),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 24),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 28),
			ticketCode: "7393/7394",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 29),
			ticketCode: "6406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 34),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 38),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 44),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 48),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 53),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 54),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 58),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 3),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 4),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 8),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 13),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 14),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 18),
			ticketCode: "7403/7404",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 19),
			ticketCode: "6114",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 24),
			ticketCode: "7287/7288",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 28),
			ticketCode: "7405/7406",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 29),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 33),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 34),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 38),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 44),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 48),
			ticketCode: "7409/7410",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 49),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 53),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 54),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 58),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 4),
			ticketCode: "7295/7296",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 8),
			ticketCode: "7413/7414",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 8),
			ticketCode: "6710",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 14),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 18),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 23),
			ticketCode: "6609",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 24),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 28),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 29),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 33),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 34),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 38),
			ticketCode: "7419/7420",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 39),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 43),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 44),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 48),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 49),
			ticketCode: "6408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 54),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 58),
			ticketCode: "7423/7424",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 59),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 3),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 4),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 8),
			ticketCode: "7425/7426",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 13),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 14),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 18),
			ticketCode: "7427/7428",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 19),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 23),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 24),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 28),
			ticketCode: "7429/7430",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 33),
			ticketCode: "6527",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 34),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 38),
			ticketCode: "7431/7432",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 39),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 43),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 44),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 48),
			ticketCode: "7433/7434",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 53),
			ticketCode: "6345",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 54),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 58),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 59),
			ticketCode: "6398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 4),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 8),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 14),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 18),
			ticketCode: "7439/7440",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 23),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 24),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 28),
			ticketCode: "7441/7442",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 29),
			ticketCode: "6410",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 33),
			ticketCode: "6713",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 34),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 38),
			ticketCode: "7443/7444",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 39),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 43),
			ticketCode: "6349",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 44),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 48),
			ticketCode: "7445/7446",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 53),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 54),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 58),
			ticketCode: "7447/7448",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 59),
			ticketCode: "6350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 4),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 8),
			ticketCode: "7449/7450",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 9),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 13),
			ticketCode: "6355",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 14),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 18),
			ticketCode: "7451/7452",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 19),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 23),
			ticketCode: "6353",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 24),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 28),
			ticketCode: "7453/7454",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 29),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 33),
			ticketCode: "6357",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 34),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 38),
			ticketCode: "7455/7456",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 39),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 43),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 44),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 48),
			ticketCode: "7457/7458",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 49),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 53),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 54),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 58),
			ticketCode: "7459/7460",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 3),
			ticketCode: "6529",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 4),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 8),
			ticketCode: "7461/7462",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 13),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 14),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 18),
			ticketCode: "7463/7464",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 19),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 23),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 24),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 28),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 29),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 33),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 34),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 38),
			ticketCode: "7467/7468",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 39),
			ticketCode: "6362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 44),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 48),
			ticketCode: "7469/7470",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 49),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 53),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 54),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 58),
			ticketCode: "7471/7472",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 59),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 3),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 4),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 8),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 9),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 13),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 14),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 18),
			ticketCode: "7475/7476",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 19),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 23),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 24),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 28),
			ticketCode: "7477/7478",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 29),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 33),
			ticketCode: "6531",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 34),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 38),
			ticketCode: "7479/7480",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 39),
			ticketCode: "6370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 44),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 48),
			ticketCode: "7481/7482",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 49),
			ticketCode: "6372",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 53),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 54),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 58),
			ticketCode: "7483/7484",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 59),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 3),
			ticketCode: "6613",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 4),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 8),
			ticketCode: "7485/7486",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 9),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 13),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 14),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 18),
			ticketCode: "7487/7488",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 23),
			ticketCode: "6717",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 24),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 28),
			ticketCode: "7489/7490",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 29),
			ticketCode: "6416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 34),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 38),
			ticketCode: "7491/7492",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 39),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 43),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 44),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 48),
			ticketCode: "7493/7494",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 49),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 53),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 54),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 58),
			ticketCode: "7495/7496",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 59),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 3),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 4),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 8),
			ticketCode: "7497/7498",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 9),
			ticketCode: "6382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 14),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 18),
			ticketCode: "7499/7500",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 19),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 23),
			ticketCode: "6415",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 24),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 28),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 34),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 38),
			ticketCode: "7203/7204",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 39),
			ticketCode: "6522",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 44),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 48),
			ticketCode: "7205/7206",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 49),
			ticketCode: "6616",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 53),
			ticketCode: "6535",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 54),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 58),
			ticketCode: "7207/7208",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 59),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 3),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 4),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 8),
			ticketCode: "7209/7210",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 13),
			ticketCode: "6721",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 14),
			ticketCode: "7393/7394",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 18),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 19),
			ticketCode: "6720",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 24),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 28),
			ticketCode: "7213/7214",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 33),
			ticketCode: "6615",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 34),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 38),
			ticketCode: "7215/7216",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 39),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 43),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 44),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 48),
			ticketCode: "7217/7218",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 49),
			ticketCode: "6418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 54),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 58),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 3),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 4),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 8),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 9),
			ticketCode: "6524",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 14),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 18),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 24),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 28),
			ticketCode: "7225/7226",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 29),
			ticketCode: "6388",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 33),
			ticketCode: "6417",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 34),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 38),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 43),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 44),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 48),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 49),
			ticketCode: "6894",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 54),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 58),
			ticketCode: "7231/7232",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 3),
			ticketCode: "6723",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 4),
			ticketCode: "7415/7416",
		},
	],
	"24": [
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 17),
			ticketCode: "6503",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 22),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 32),
			ticketCode: "7924",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 53),
			ticketCode: "6700",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 1),
			ticketCode: "6505",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 15),
			ticketCode: "6702",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 23),
			ticketCode: "6507",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 41),
			ticketCode: "6701",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 46),
			ticketCode: "7922",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 2),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 8),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 18),
			ticketCode: "6511",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 40),
			ticketCode: "7921",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 45),
			ticketCode: "6401",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 2),
			ticketCode: "7951",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 11),
			ticketCode: "7905",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 56),
			ticketCode: "6515",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 28),
			ticketCode: "6517",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 43),
			ticketCode: "7961/7963",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 57),
			ticketCode: "7925",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(9, 34),
			ticketCode: "7928",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 9),
			ticketCode: "7930",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 16),
			ticketCode: "6706",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 40),
			ticketCode: "6709",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 5),
			ticketCode: "7949",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 6),
			ticketCode: "7932",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 13),
			ticketCode: "7931",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 21),
			ticketCode: "7934",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(13, 41),
			ticketCode: "7102",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 30),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 43),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 23),
			ticketCode: "7935",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 31),
			ticketCode: "7103",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 43),
			ticketCode: "6409",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 48),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 52),
			ticketCode: "7937",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(16, 43),
			ticketCode: "7938",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 24),
			ticketCode: "7954",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 28),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 31),
			ticketCode: "7942",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 47),
			ticketCode: "7123",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 13),
			ticketCode: "6413",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 18),
			ticketCode: "7941",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 19),
			ticketCode: "7914",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(19, 24),
			ticketCode: "7944",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 53),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(20, 35),
			ticketCode: "7946",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 48),
			ticketCode: "7943",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 50),
			ticketCode: "6614",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 58),
			ticketCode: "6520",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 14),
			ticketCode: "6535",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 29),
			ticketCode: "6721",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 43),
			ticketCode: "7945",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 48),
			ticketCode: "7948",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 0),
			ticketCode: "7947",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 18),
			ticketCode: "6522",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 26),
			ticketCode: "6616",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 30),
			ticketCode: "6417",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 0),
			ticketCode: "6720",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 21),
			ticketCode: "6618",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 26),
			ticketCode: "6723",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 34),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(1, 0),
			ticketCode: "6620",
		},
	],
	"25": [
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(1, 9),
			ticketCode: "6620",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 6),
			ticketCode: "6503",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 10),
			ticketCode: "6603",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 52),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 20),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 26),
			ticketCode: "6702",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 29),
			ticketCode: "6701",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 51),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 57),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 7),
			ticketCode: "6511",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 1),
			ticketCode: "7905",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 20),
			ticketCode: "6517",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 5),
			ticketCode: "7931",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 39),
			ticketCode: "6713",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 10),
			ticketCode: "7941",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 25),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 59),
			ticketCode: "6614",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 6),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 7),
			ticketCode: "6520",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 18),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 27),
			ticketCode: "6522",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 35),
			ticketCode: "6616",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 9),
			ticketCode: "6720",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 17),
			ticketCode: "6723",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 24),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 28),
			ticketCode: "6618",
		},
	],
	"26": [
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 35),
			ticketCode: "6700",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 36),
			ticketCode: "6503",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(4, 44),
			ticketCode: "6702",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 41),
			ticketCode: "6507",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 59),
			ticketCode: "6701",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 26),
			ticketCode: "6703",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 34),
			ticketCode: "6504",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 36),
			ticketCode: "6511",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 35),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 54),
			ticketCode: "6506",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 29),
			ticketCode: "6515",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 32),
			ticketCode: "6704",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 47),
			ticketCode: "6519",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 54),
			ticketCode: "6406",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 12),
			ticketCode: "6408",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 59),
			ticketCode: "6409",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 48),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 14),
			ticketCode: "6612",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 28),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 36),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 40),
			ticketCode: "6520",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 52),
			ticketCode: "6416",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 47),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 2),
			ticketCode: "6522",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 11),
			ticketCode: "6616",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 44),
			ticketCode: "6720",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 4),
			ticketCode: "6618",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 43),
			ticketCode: "6620",
		},
	],
	"27": [
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 24),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 11),
			ticketCode: "7924",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 13),
			ticketCode: "6703",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 1),
			ticketCode: "7921",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(6, 9),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 15),
			ticketCode: "6702",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 27),
			ticketCode: "7922",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 26),
			ticketCode: "6782",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 4),
			ticketCode: "7961/7963",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 12),
			ticketCode: "7925",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(9, 1),
			ticketCode: "6707",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 52),
			ticketCode: "7928",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 26),
			ticketCode: "7949",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 0),
			ticketCode: "7930",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(12, 12),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 20),
			ticketCode: "6706",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 52),
			ticketCode: "7932",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 23),
			ticketCode: "6922",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 7),
			ticketCode: "7934",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 51),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(14, 57),
			ticketCode: "6921",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 11),
			ticketCode: "7937",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 42),
			ticketCode: "6710",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(18, 20),
			ticketCode: "7942",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(18, 54),
			ticketCode: "6749/7939",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 28),
			ticketCode: "7943",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(20, 11),
			ticketCode: "7944",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 37),
			ticketCode: "6721",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 56),
			ticketCode: "7945",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 8),
			ticketCode: "7947",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 20),
			ticketCode: "7946",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 12),
			ticketCode: "6723",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 27),
			ticketCode: "7948",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 55),
			ticketCode: "6720",
		},
	],
	"28": [
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(3, 47),
			ticketCode: "6603",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 31),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(4, 54),
			ticketCode: "7924",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 3),
			ticketCode: "6701",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 27),
			ticketCode: "6601",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 35),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 47),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 52),
			ticketCode: "6702",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 10),
			ticketCode: "7922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 18),
			ticketCode: "7921",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 40),
			ticketCode: "7905",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 3),
			ticketCode: "6782",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 21),
			ticketCode: "7961/7963",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 29),
			ticketCode: "7925",
		},
		{
			name: "Решетниково — Конаково ГРЭС",
			dateTime: getDate(8, 37),
			ticketCode: "6882",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 9),
			ticketCode: "7928",
		},
		{
			name: "Решетниково — Конаково ГРЭС",
			dateTime: getDate(10, 45),
			ticketCode: "6884",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 43),
			ticketCode: "7930",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 43),
			ticketCode: "7949",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(11, 50),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 58),
			ticketCode: "6706",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 22),
			ticketCode: "7931",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 35),
			ticketCode: "7932",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 0),
			ticketCode: "6922",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 50),
			ticketCode: "7934",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 57),
			ticketCode: "7935",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 13),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 20),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 28),
			ticketCode: "7937",
		},
		{
			name: "Решетниково — Конаково ГРЭС",
			dateTime: getDate(15, 35),
			ticketCode: "6886",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(18, 3),
			ticketCode: "7942",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(19, 17),
			ticketCode: "6749/7939",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 49),
			ticketCode: "7914",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(19, 53),
			ticketCode: "7944",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 59),
			ticketCode: "7943",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 56),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 2),
			ticketCode: "7946",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 26),
			ticketCode: "6614",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 29),
			ticketCode: "7947",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 10),
			ticketCode: "7948",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 56),
			ticketCode: "6723",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 0),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 1),
			ticketCode: "6616",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 32),
			ticketCode: "6720",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 52),
			ticketCode: "6618",
		},
	],
	"29": [
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 44),
			ticketCode: "6505",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 20),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 29),
			ticketCode: "6700",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 50),
			ticketCode: "6703",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 58),
			ticketCode: "6511",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 30),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 9),
			ticketCode: "6614",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 11),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(22, 35),
			ticketCode: "6522",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 17),
			ticketCode: "6720",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 17),
			ticketCode: "6617",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(3, 59),
			ticketCode: "6503",
		},
	],
	"30": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 5),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 7),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 15),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 17),
			ticketCode: "7417/7418",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 20),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 22),
			ticketCode: "6620",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 27),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 37),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 42),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 45),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 55),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 2),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 5),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 15),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 22),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 25),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 35),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 42),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 45),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 52),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 31),
			ticketCode: "6301",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 38),
			ticketCode: "6501",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 45),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 55),
			ticketCode: "7303/7304",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(4, 55),
			ticketCode: "6502",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 59),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 5),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 10),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 15),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 20),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 25),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 27),
			ticketCode: "7922",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 30),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 35),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 40),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 45),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 50),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 55),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 0),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 5),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 7),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 10),
			ticketCode: "6801",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 12),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 15),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 17),
			ticketCode: "7201/7202",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 20),
			ticketCode: "6701",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 22),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 25),
			ticketCode: "7321/7322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 27),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 30),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 35),
			ticketCode: "7323/7324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 37),
			ticketCode: "7205/7206",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 40),
			ticketCode: "6601",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 43),
			ticketCode: "7902",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 45),
			ticketCode: "7533",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 45),
			ticketCode: "7325/7326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 47),
			ticketCode: "7207/7208",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 49),
			ticketCode: "7532",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 50),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 55),
			ticketCode: "7327/7328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 57),
			ticketCode: "7209/7210",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 0),
			ticketCode: "6511",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 4),
			ticketCode: "7921",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 5),
			ticketCode: "7329/7330",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 7),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 10),
			ticketCode: "6307",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 12),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 15),
			ticketCode: "7331/7332",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 17),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 22),
			ticketCode: "7535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 22),
			ticketCode: "6318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 25),
			ticketCode: "7333/7334",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 27),
			ticketCode: "7215/7216",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 30),
			ticketCode: "6401",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 32),
			ticketCode: "6506",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 35),
			ticketCode: "7951",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 35),
			ticketCode: "7335/7336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 37),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 40),
			ticketCode: "6311",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 42),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 45),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 47),
			ticketCode: "7536",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 47),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 50),
			ticketCode: "6313",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 52),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 53),
			ticketCode: "7539",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 55),
			ticketCode: "7339/7340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 57),
			ticketCode: "7221/7222",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 0),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 2),
			ticketCode: "6308",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 2),
			ticketCode: "7538",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 5),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 7),
			ticketCode: "7223/7224",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 10),
			ticketCode: "7905",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 12),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 15),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 17),
			ticketCode: "7225/7226",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 22),
			ticketCode: "6338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 25),
			ticketCode: "7520",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 25),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 27),
			ticketCode: "7227/7228",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 32),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 35),
			ticketCode: "7347/7348",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 37),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 39),
			ticketCode: "7541",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 40),
			ticketCode: "6315",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 42),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 45),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 47),
			ticketCode: "7231/7232",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 50),
			ticketCode: "6515",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 52),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 55),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 57),
			ticketCode: "7233/7234",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 57),
			ticketCode: "7904",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 2),
			ticketCode: "6312",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 4),
			ticketCode: "6517",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 5),
			ticketCode: "7353/7354",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 7),
			ticketCode: "7235/7236",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(9, 8),
			ticketCode: "7928",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 10),
			ticketCode: "6317",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 15),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 17),
			ticketCode: "7237/7238",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 18),
			ticketCode: "7542",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 22),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 25),
			ticketCode: "7357/7358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 27),
			ticketCode: "7239/7240",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 29),
			ticketCode: "7961/7963",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 30),
			ticketCode: "6403",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 32),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 35),
			ticketCode: "7359/7360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 37),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 40),
			ticketCode: "6391",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 40),
			ticketCode: "7903",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 45),
			ticketCode: "7361/7362",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 46),
			ticketCode: "7925",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 47),
			ticketCode: "7243/7244",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 52),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 55),
			ticketCode: "7363/7364",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 57),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 0),
			ticketCode: "6319",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 2),
			ticketCode: "7545",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 5),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 7),
			ticketCode: "7247/7248",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 10),
			ticketCode: "6519",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 13),
			ticketCode: "7912",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 14),
			ticketCode: "7917",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 15),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 17),
			ticketCode: "7249/7250",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 22),
			ticketCode: "6606",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 24),
			ticketCode: "7930",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 25),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 27),
			ticketCode: "7251/7252",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 32),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 35),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 37),
			ticketCode: "7526",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 37),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 40),
			ticketCode: "6321",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 42),
			ticketCode: "6706",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 45),
			ticketCode: "7546",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 45),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 47),
			ticketCode: "7255/7256",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 53),
			ticketCode: "7548",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 55),
			ticketCode: "7375/7376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 57),
			ticketCode: "7257/7258",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 0),
			ticketCode: "6113",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 2),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 5),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 7),
			ticketCode: "7259/7260",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 7),
			ticketCode: "7906",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 15),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 17),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 22),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 25),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 27),
			ticketCode: "7263/7264",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 32),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 35),
			ticketCode: "7383/7384",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 37),
			ticketCode: "7265/7266",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 39),
			ticketCode: "7549",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 40),
			ticketCode: "6201",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 42),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 45),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 47),
			ticketCode: "7267/7268",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 52),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 55),
			ticketCode: "7387/7388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 57),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 0),
			ticketCode: "6323",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 5),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 7),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 10),
			ticketCode: "6521",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 12),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 15),
			ticketCode: "7391/7392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 17),
			ticketCode: "7273/7274",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 19),
			ticketCode: "6709",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 22),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 25),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 27),
			ticketCode: "7275/7276",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 32),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 35),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 37),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 39),
			ticketCode: "7101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 45),
			ticketCode: "7397/7398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 47),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 50),
			ticketCode: "6325",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 55),
			ticketCode: "7399/7400",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 57),
			ticketCode: "7281/7282",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 57),
			ticketCode: "7934",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 0),
			ticketCode: "6327",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 5),
			ticketCode: "7401/7402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 7),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 10),
			ticketCode: "6329",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 15),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 17),
			ticketCode: "7285/7286",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(13, 21),
			ticketCode: "7102",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 22),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 25),
			ticketCode: "7405/7406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 27),
			ticketCode: "7287/7288",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 30),
			ticketCode: "6331",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 32),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 35),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 37),
			ticketCode: "7289/7290",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 41),
			ticketCode: "7931",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 45),
			ticketCode: "7409/7410",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 47),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 50),
			ticketCode: "6333",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 52),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 53),
			ticketCode: "7149",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 55),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 57),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 5),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 7),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 12),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 15),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 17),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 20),
			ticketCode: "6609",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 25),
			ticketCode: "7417/7418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 27),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 30),
			ticketCode: "6111",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 32),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 35),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 37),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 40),
			ticketCode: "6335",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 42),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 45),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 47),
			ticketCode: "7303/7304",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 52),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 55),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 57),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 0),
			ticketCode: "6339",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 2),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 5),
			ticketCode: "7425/7426",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 7),
			ticketCode: "7307/7308",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 9),
			ticketCode: "7556",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 10),
			ticketCode: "6407",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 15),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 17),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 20),
			ticketCode: "6341",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 22),
			ticketCode: "6340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 22),
			ticketCode: "7122",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 25),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 27),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 30),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 35),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 37),
			ticketCode: "7551",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 37),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 40),
			ticketCode: "6343",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 42),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 45),
			ticketCode: "7433/7434",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 45),
			ticketCode: "7935",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 47),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 50),
			ticketCode: "6345",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 55),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 57),
			ticketCode: "7317/7318",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 59),
			ticketCode: "7103",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 2),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 5),
			ticketCode: "7437/7438",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 5),
			ticketCode: "7561",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 7),
			ticketCode: "7319/7320",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(16, 12),
			ticketCode: "7938",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 15),
			ticketCode: "7439/7440",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 16),
			ticketCode: "7559",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 17),
			ticketCode: "7321/7322",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 20),
			ticketCode: "6409",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 25),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 27),
			ticketCode: "7323/7324",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 30),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 32),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 35),
			ticketCode: "7443/7444",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 37),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 40),
			ticketCode: "6349",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 41),
			ticketCode: "7558",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 42),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 45),
			ticketCode: "7445/7446",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 47),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 50),
			ticketCode: "6351",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 55),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 57),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 2),
			ticketCode: "6350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 4),
			ticketCode: "7954",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 5),
			ticketCode: "7449/7450",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 7),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 9),
			ticketCode: "7942",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 10),
			ticketCode: "6355",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 12),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 15),
			ticketCode: "7451/7452",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 17),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 20),
			ticketCode: "6353",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 22),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 25),
			ticketCode: "7453/7454",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 25),
			ticketCode: "7560",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 27),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 30),
			ticketCode: "6357",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 32),
			ticketCode: "6356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 34),
			ticketCode: "7562",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 35),
			ticketCode: "7455/7456",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 37),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 40),
			ticketCode: "6359",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 42),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 43),
			ticketCode: "7565",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 45),
			ticketCode: "7457/7458",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 47),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 50),
			ticketCode: "6361",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 52),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 55),
			ticketCode: "7459/7460",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 57),
			ticketCode: "7567",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 57),
			ticketCode: "7341/7342",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 0),
			ticketCode: "6529",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 3),
			ticketCode: "7555",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 5),
			ticketCode: "7461/7462",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 7),
			ticketCode: "7343/7344",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 10),
			ticketCode: "6411",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 10),
			ticketCode: "7123",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 15),
			ticketCode: "7463/7464",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 17),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 20),
			ticketCode: "6363",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 22),
			ticketCode: "7569",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 22),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 25),
			ticketCode: "7465/7466",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 27),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 30),
			ticketCode: "6365",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 32),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 35),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 37),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 42),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 45),
			ticketCode: "7469/7470",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 47),
			ticketCode: "7351/7352",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(18, 49),
			ticketCode: "7914",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 50),
			ticketCode: "6367",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 52),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 55),
			ticketCode: "7471/7472",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 57),
			ticketCode: "7353/7354",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(18, 58),
			ticketCode: "7944",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 0),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 2),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 5),
			ticketCode: "7473/7474",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 7),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 10),
			ticketCode: "6371",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 12),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 15),
			ticketCode: "7475/7476",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 17),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 20),
			ticketCode: "6373",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 22),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 25),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 27),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 30),
			ticketCode: "7568",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 30),
			ticketCode: "6531",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 32),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 35),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 37),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 42),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 45),
			ticketCode: "7481/7482",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 47),
			ticketCode: "7363/7364",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 48),
			ticketCode: "7941",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 50),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 52),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 55),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 57),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 0),
			ticketCode: "6613",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 2),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 5),
			ticketCode: "7485/7486",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 7),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 10),
			ticketCode: "6533",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 12),
			ticketCode: "6614",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(20, 15),
			ticketCode: "7946",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 15),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 17),
			ticketCode: "7369/7370",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 20),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 21),
			ticketCode: "6520",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 25),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 27),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 27),
			ticketCode: "7105",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 32),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 35),
			ticketCode: "7491/7492",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 37),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 40),
			ticketCode: "6393",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 42),
			ticketCode: "6376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 42),
			ticketCode: "7572",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 45),
			ticketCode: "7493/7494",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 47),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 50),
			ticketCode: "6375",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 52),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 55),
			ticketCode: "7495/7496",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 57),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 0),
			ticketCode: "6377",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 2),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 5),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 7),
			ticketCode: "7379/7380",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 11),
			ticketCode: "7943",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 12),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 15),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 17),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 20),
			ticketCode: "6415",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 22),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 25),
			ticketCode: "7201/7202",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 27),
			ticketCode: "7948",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 27),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 35),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 37),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 42),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 45),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 47),
			ticketCode: "7387/7388",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 50),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 52),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 55),
			ticketCode: "7207/7208",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 57),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 0),
			ticketCode: "6395",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 2),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 5),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 7),
			ticketCode: "7391/7392",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 10),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 13),
			ticketCode: "7570",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 15),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 17),
			ticketCode: "7393/7394",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 20),
			ticketCode: "7945",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 22),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 25),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 27),
			ticketCode: "7395/7396",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 30),
			ticketCode: "6615",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 35),
			ticketCode: "7215/7216",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 37),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 40),
			ticketCode: "6337",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 42),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 45),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 47),
			ticketCode: "7399/7400",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 52),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 55),
			ticketCode: "7219/7220",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 57),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 0),
			ticketCode: "6379",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 5),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 7),
			ticketCode: "7403/7404",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 12),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 15),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 17),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 22),
			ticketCode: "7575",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 25),
			ticketCode: "7225/7226",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 27),
			ticketCode: "7578",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 27),
			ticketCode: "7407/7408",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 30),
			ticketCode: "6417",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 32),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 35),
			ticketCode: "7227/7228",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 37),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 40),
			ticketCode: "6381",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 45),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 47),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 52),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 55),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 57),
			ticketCode: "7413/7414",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 59),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 5),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 7),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 15),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 17),
			ticketCode: "7417/7418",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 20),
			ticketCode: "6617",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 22),
			ticketCode: "6620",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 27),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 37),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 42),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 45),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 55),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 2),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 5),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 15),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 22),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 25),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 35),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 42),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 45),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 52),
			ticketCode: "6348",
		},
	],
	"31": [
		{
			name: "Брянск — Санкт-Петербург",
			dateTime: getDate(0, 2),
			ticketCode: "140М",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(0, 29),
			ticketCode: "122А",
		},
		{
			name: "Москва — Великий Новгород",
			dateTime: getDate(0, 36),
			ticketCode: "042А",
		},
		{
			name: "Москва (Ленинградский вокзал) — Москва окт тур",
			dateTime: getDate(0, 36),
			ticketCode: "924У",
		},
		{
			name: "Белгород — Санкт-Петербург",
			dateTime: getDate(0, 44),
			ticketCode: "120В",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(0, 52),
			ticketCode: "028А",
		},
		{
			name: "Москва — Выборг",
			dateTime: getDate(1, 5),
			ticketCode: "038А",
		},
		{
			name: "Ижевск — Санкт-Петербург",
			dateTime: getDate(1, 24),
			ticketCode: "132Г",
		},
		{
			name: "Санкт-Петербург — Астрахань",
			dateTime: getDate(1, 26),
			ticketCode: "109А",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(1, 37),
			ticketCode: "255А",
		},
		{
			name: "Санкт-Петербург — Белгород",
			dateTime: getDate(1, 54),
			ticketCode: "081А",
		},
		{
			name: "Кисловодск — Санкт-Петербург",
			dateTime: getDate(2, 8),
			ticketCode: "049Ч",
		},
		{
			name: "Санкт-Петербург — Адлер",
			dateTime: getDate(2, 8),
			ticketCode: "035А",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(2, 15),
			ticketCode: "020У",
		},
		{
			name: "Адлер — Санкт-Петербург",
			dateTime: getDate(2, 24),
			ticketCode: "036С",
		},
		{
			name: "Санкт-Петербург — Волгоград",
			dateTime: getDate(2, 27),
			ticketCode: "089А",
		},
		{
			name: "Москва — Мурманск",
			dateTime: getDate(2, 32),
			ticketCode: "016А",
		},
		{
			name: "Белгород — Санкт-Петербург",
			dateTime: getDate(2, 57),
			ticketCode: "030У",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(3, 16),
			ticketCode: "158А",
		},
		{
			name: "Нижний Новгород — Санкт-Петербург",
			dateTime: getDate(3, 23),
			ticketCode: "059Г",
		},
		{
			name: "Великий Новгород — Москва",
			dateTime: getDate(3, 24),
			ticketCode: "042Ч",
		},
		{
			name: "Севастополь — Санкт-Петербург",
			dateTime: getDate(3, 34),
			ticketCode: "008С",
		},
		{
			name: "Санкт-Петербург — Белгород",
			dateTime: getDate(3, 35),
			ticketCode: "029У",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(3, 51),
			ticketCode: "025А",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(3, 57),
			ticketCode: "6701",
		},
		{
			name: "Выборг — Москва",
			dateTime: getDate(4, 8),
			ticketCode: "038В",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(4, 15),
			ticketCode: "027А",
		},
		{
			name: "Псков — Москва",
			dateTime: getDate(4, 34),
			ticketCode: "010Ч",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(4, 41),
			ticketCode: "019У",
		},
		{
			name: "Белгород — Санкт-Петербург",
			dateTime: getDate(4, 45),
			ticketCode: "082В",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 46),
			ticketCode: "6703",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(4, 51),
			ticketCode: "6770",
		},
		{
			name: "Мурманск — Москва",
			dateTime: getDate(4, 58),
			ticketCode: "015А",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(5, 7),
			ticketCode: "005А",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 45),
			ticketCode: "7921",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 1),
			ticketCode: "7951",
		},
		{
			name: "Санкт-Петербург — Белгород",
			dateTime: getDate(6, 32),
			ticketCode: "119А",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(6, 46),
			ticketCode: "121А",
		},
		{
			name: "Петрозаводск — Москва",
			dateTime: getDate(6, 53),
			ticketCode: "160А",
		},
		{
			name: "Петрозаводск — Москва",
			dateTime: getDate(7, 3),
			ticketCode: "017А",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(7, 15),
			ticketCode: "6752/6751",
		},
		{
			name: "Санкт-Петербург — Сухум",
			dateTime: getDate(7, 21),
			ticketCode: "479А",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 48),
			ticketCode: "7961/7963",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 56),
			ticketCode: "7925",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(8, 5),
			ticketCode: "756А",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(8, 33),
			ticketCode: "6707",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(8, 51),
			ticketCode: "7204/7203",
		},
		{
			name: "Тверь — Угловка",
			dateTime: getDate(9, 2),
			ticketCode: "6772/6634",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(10, 3),
			ticketCode: "755А",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(10, 49),
			ticketCode: "762А",
		},
		{
			name: "Тверь — Лихославль",
			dateTime: getDate(10, 53),
			ticketCode: "6792",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 10),
			ticketCode: "7949",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 54),
			ticketCode: "7931",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(12, 6),
			ticketCode: "759А",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 18),
			ticketCode: "7935",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 23),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(14, 30),
			ticketCode: "6921",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 55),
			ticketCode: "7937",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(14, 58),
			ticketCode: "770А",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(15, 23),
			ticketCode: "7208/7207",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(15, 46),
			ticketCode: "6754/6753",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(16, 26),
			ticketCode: "767А",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(17, 13),
			ticketCode: "826Ч",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(17, 36),
			ticketCode: "6776",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(17, 58),
			ticketCode: "7212/7211",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(18, 6),
			ticketCode: "771А",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(18, 27),
			ticketCode: "6749/7939",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(18, 54),
			ticketCode: "778А",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 12),
			ticketCode: "7943",
		},
		{
			name: "Москва — Петрозаводск",
			dateTime: getDate(19, 16),
			ticketCode: "160В",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(19, 21),
			ticketCode: "6778",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(20, 1),
			ticketCode: "777А",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(20, 7),
			ticketCode: "725Ч",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 12),
			ticketCode: "6721",
		},
		{
			name: "Санкт-Петербург — Ижевск",
			dateTime: getDate(20, 30),
			ticketCode: "131Г",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(20, 37),
			ticketCode: "780А",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 40),
			ticketCode: "7945",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 49),
			ticketCode: "7947",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(20, 50),
			ticketCode: "7216/7215",
		},
		{
			name: "Москва (Ленинградский вокзал) — Бологое",
			dateTime: getDate(21, 10),
			ticketCode: "7960/7962",
		},
		{
			name: "Тверь — Бологое",
			dateTime: getDate(21, 14),
			ticketCode: "6780",
		},
		{
			name: "Санкт-Петербург — Севастополь",
			dateTime: getDate(21, 27),
			ticketCode: "007А",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 49),
			ticketCode: "6723",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(21, 56),
			ticketCode: "784А",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(22, 6),
			ticketCode: "779А",
		},
		{
			name: "Тверь — Торжок",
			dateTime: getDate(22, 7),
			ticketCode: "6756/6755",
		},
		{
			name: "Москва — Псков",
			dateTime: getDate(22, 40),
			ticketCode: "010А",
		},
		{
			name: "Санкт-Петербург — Брянск",
			dateTime: getDate(22, 48),
			ticketCode: "139М",
		},
		{
			name: "Москва — Петрозаводск",
			dateTime: getDate(22, 55),
			ticketCode: "018А",
		},
		{
			name: "Санкт-Петербург — Москва",
			dateTime: getDate(23, 46),
			ticketCode: "785А",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(23, 54),
			ticketCode: "026А",
		},
		{
			name: "Санкт-Петербург — Нижний Новгород",
			dateTime: getDate(23, 54),
			ticketCode: "059А",
		},
		{
			name: "Брянск — Санкт-Петербург",
			dateTime: getDate(0, 2),
			ticketCode: "140М",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(0, 29),
			ticketCode: "122А",
		},
		{
			name: "Москва — Великий Новгород",
			dateTime: getDate(0, 36),
			ticketCode: "042А",
		},
		{
			name: "Белгород — Санкт-Петербург",
			dateTime: getDate(0, 44),
			ticketCode: "120В",
		},
		{
			name: "Москва — Санкт-Петербург",
			dateTime: getDate(0, 52),
			ticketCode: "028А",
		},
		{
			name: "Москва — Выборг",
			dateTime: getDate(1, 5),
			ticketCode: "038А",
		},
		{
			name: "Оренбург — Санкт-Петербург",
			dateTime: getDate(1, 12),
			ticketCode: "105У",
		},
		{
			name: "Челябинск — Санкт-Петербург",
			dateTime: getDate(1, 24),
			ticketCode: "146У",
		},
	],
	"32": [
		{
			name: "Санкт-Петербург — Смоленск",
			dateTime: getDate(4, 12),
			ticketCode: "087А",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(6, 12),
			ticketCode: "6762/6761",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(6, 55),
			ticketCode: "7202/7201",
		},
		{
			name: "Торжок — Ржев-Балтийский",
			dateTime: getDate(9, 5),
			ticketCode: "6447",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(9, 20),
			ticketCode: "6764/6763",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(10, 36),
			ticketCode: "7206/7205",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(16, 43),
			ticketCode: "7210/7209",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(17, 26),
			ticketCode: "6766/6765",
		},
		{
			name: "Торжок — Тверь",
			dateTime: getDate(19, 14),
			ticketCode: "7214/7213",
		},
		{
			name: "Торжок — Ржев-Балтийский",
			dateTime: getDate(19, 50),
			ticketCode: "6451",
		},
	],
	"33": [
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 1),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 1),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 11),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 11),
			ticketCode: "7415/7416",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 16),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 21),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 26),
			ticketCode: "6620",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 31),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 41),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 46),
			ticketCode: "6390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 49),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 59),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 6),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 9),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 19),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 26),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 29),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 39),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 46),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 49),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 56),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 41),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 51),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 55),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 1),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 6),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 11),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 16),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 21),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 26),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 31),
			ticketCode: "7311/7312",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 36),
			ticketCode: "6505",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 41),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 46),
			ticketCode: "6305",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 51),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 57),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 1),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 6),
			ticketCode: "6801",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 11),
			ticketCode: "7319/7320",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 11),
			ticketCode: "6602",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(6, 16),
			ticketCode: "6504",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 16),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 21),
			ticketCode: "7321/7322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 21),
			ticketCode: "7201/7202",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 26),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 26),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 31),
			ticketCode: "7323/7324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 31),
			ticketCode: "7203/7204",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 36),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 41),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 41),
			ticketCode: "7325/7326",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 46),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 51),
			ticketCode: "7327/7328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 51),
			ticketCode: "7207/7208",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 56),
			ticketCode: "6511",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 1),
			ticketCode: "7329/7330",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 1),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 6),
			ticketCode: "6307",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 11),
			ticketCode: "7331/7332",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 11),
			ticketCode: "7211/7212",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 16),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 21),
			ticketCode: "7333/7334",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 21),
			ticketCode: "7213/7214",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 26),
			ticketCode: "6318",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 26),
			ticketCode: "6401",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 31),
			ticketCode: "7335/7336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 31),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 36),
			ticketCode: "6311",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 36),
			ticketCode: "6506",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 41),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 41),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 46),
			ticketCode: "6313",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 46),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 51),
			ticketCode: "7339/7340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 51),
			ticketCode: "7219/7220",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 56),
			ticketCode: "6306",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 56),
			ticketCode: "6513",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 1),
			ticketCode: "7341/7342",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 1),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 6),
			ticketCode: "6308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 11),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 11),
			ticketCode: "7223/7224",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(8, 16),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 21),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 21),
			ticketCode: "7225/7226",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 26),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 31),
			ticketCode: "7347/7348",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 31),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 36),
			ticketCode: "6315",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 36),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 41),
			ticketCode: "7349/7350",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 41),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 46),
			ticketCode: "6346",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 46),
			ticketCode: "6515",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 51),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 51),
			ticketCode: "7231/7232",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 56),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 1),
			ticketCode: "7353/7354",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 1),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 6),
			ticketCode: "6317",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 6),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 11),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 11),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 21),
			ticketCode: "7357/7358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 21),
			ticketCode: "7237/7238",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 26),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 26),
			ticketCode: "6403",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 31),
			ticketCode: "7359/7360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 31),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 36),
			ticketCode: "6391",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 36),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 41),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 41),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 51),
			ticketCode: "7363/7364",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 51),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 56),
			ticketCode: "6319",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 56),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 1),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 1),
			ticketCode: "7245/7246",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 6),
			ticketCode: "6519",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 11),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 11),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 21),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 21),
			ticketCode: "7249/7250",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 26),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 31),
			ticketCode: "7371/7372",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 31),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 36),
			ticketCode: "6321",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 36),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 41),
			ticketCode: "7373/7374",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 41),
			ticketCode: "7253/7254",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 45),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 51),
			ticketCode: "7375/7376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 51),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 56),
			ticketCode: "6113",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 1),
			ticketCode: "7377/7378",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 1),
			ticketCode: "7257/7258",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 6),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 11),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 11),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 21),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 21),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 26),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 31),
			ticketCode: "7383/7384",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 31),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 36),
			ticketCode: "6201",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 36),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 41),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 41),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 46),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 51),
			ticketCode: "7387/7388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 51),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 56),
			ticketCode: "6323",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 56),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 1),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 1),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 6),
			ticketCode: "6521",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 11),
			ticketCode: "7391/7392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 11),
			ticketCode: "7271/7272",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 15),
			ticketCode: "6709",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 16),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 21),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 21),
			ticketCode: "7273/7274",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 26),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 31),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 31),
			ticketCode: "7275/7276",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 36),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 41),
			ticketCode: "7397/7398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 41),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 46),
			ticketCode: "6325",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 51),
			ticketCode: "7399/7400",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 51),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 56),
			ticketCode: "6327",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 1),
			ticketCode: "7401/7402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 1),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 6),
			ticketCode: "6329",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 11),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 11),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 21),
			ticketCode: "7405/7406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 21),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 26),
			ticketCode: "6331",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 26),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 31),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 31),
			ticketCode: "7287/7288",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 36),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 41),
			ticketCode: "7409/7410",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 41),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 46),
			ticketCode: "6333",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 51),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 51),
			ticketCode: "7291/7292",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 56),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 1),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 1),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 11),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 11),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(14, 15),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 16),
			ticketCode: "6609",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 21),
			ticketCode: "7417/7418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 21),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 26),
			ticketCode: "6111",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 31),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 31),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 36),
			ticketCode: "6335",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 36),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 41),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 41),
			ticketCode: "7301/7302",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 46),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 51),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 51),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 56),
			ticketCode: "6339",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 56),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 1),
			ticketCode: "7425/7426",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 1),
			ticketCode: "7305/7306",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 6),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 6),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 11),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 11),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 16),
			ticketCode: "6341",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 21),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 21),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 26),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 26),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 31),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 31),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 36),
			ticketCode: "6343",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 41),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 41),
			ticketCode: "7313/7314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 46),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 46),
			ticketCode: "6345",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 51),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 51),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 1),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 1),
			ticketCode: "7317/7318",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 6),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 11),
			ticketCode: "7439/7440",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 11),
			ticketCode: "7319/7320",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 16),
			ticketCode: "6409",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 21),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 21),
			ticketCode: "7321/7322",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 26),
			ticketCode: "6713",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 31),
			ticketCode: "7443/7444",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 31),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 36),
			ticketCode: "6349",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 36),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 41),
			ticketCode: "7445/7446",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 41),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 46),
			ticketCode: "6351",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 46),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 51),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 51),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 1),
			ticketCode: "7449/7450",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 1),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 6),
			ticketCode: "6355",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 6),
			ticketCode: "6350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 11),
			ticketCode: "7451/7452",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 11),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 16),
			ticketCode: "6353",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 16),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 21),
			ticketCode: "7453/7454",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 21),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 26),
			ticketCode: "6357",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 26),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 31),
			ticketCode: "7455/7456",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 31),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 36),
			ticketCode: "6359",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 36),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 41),
			ticketCode: "7457/7458",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 41),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 46),
			ticketCode: "6361",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 46),
			ticketCode: "6358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 51),
			ticketCode: "7459/7460",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 51),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 56),
			ticketCode: "6612",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 56),
			ticketCode: "6529",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 1),
			ticketCode: "7461/7462",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 1),
			ticketCode: "7341/7342",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 6),
			ticketCode: "6411",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 11),
			ticketCode: "7463/7464",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 11),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 16),
			ticketCode: "6363",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 21),
			ticketCode: "7465/7466",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 21),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 26),
			ticketCode: "6365",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 26),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 31),
			ticketCode: "7467/7468",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 31),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 36),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 41),
			ticketCode: "7469/7470",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 41),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 46),
			ticketCode: "6367",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 46),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 51),
			ticketCode: "7471/7472",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 51),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 56),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 56),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 1),
			ticketCode: "7473/7474",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 1),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 6),
			ticketCode: "6371",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 6),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 11),
			ticketCode: "7475/7476",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 11),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 16),
			ticketCode: "6373",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(19, 16),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 21),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 21),
			ticketCode: "7357/7358",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 26),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 26),
			ticketCode: "6531",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 31),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 31),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 36),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 41),
			ticketCode: "7481/7482",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 41),
			ticketCode: "7361/7362",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 46),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 46),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 51),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 51),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 56),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 56),
			ticketCode: "6613",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 1),
			ticketCode: "7485/7486",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 1),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 6),
			ticketCode: "6533",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 6),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 11),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 11),
			ticketCode: "7367/7368",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(20, 16),
			ticketCode: "6614",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 16),
			ticketCode: "6717",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 21),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 21),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 31),
			ticketCode: "7491/7492",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 31),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 36),
			ticketCode: "6393",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 36),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 41),
			ticketCode: "7493/7494",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 41),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 46),
			ticketCode: "6375",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 46),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 51),
			ticketCode: "7495/7496",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 51),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 56),
			ticketCode: "6377",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 56),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 1),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 1),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 6),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 11),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 11),
			ticketCode: "7379/7380",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 16),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 16),
			ticketCode: "6415",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 21),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 21),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 26),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 31),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 31),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 41),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 41),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 46),
			ticketCode: "6522",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 46),
			ticketCode: "6535",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 51),
			ticketCode: "7207/7208",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 51),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 56),
			ticketCode: "6395",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 56),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 1),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 1),
			ticketCode: "7389/7390",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 6),
			ticketCode: "6386",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 6),
			ticketCode: "6721",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 11),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 11),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 21),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 21),
			ticketCode: "7393/7394",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 26),
			ticketCode: "6720",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 26),
			ticketCode: "6615",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 31),
			ticketCode: "7215/7216",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 31),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 36),
			ticketCode: "6337",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 41),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 41),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 46),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 51),
			ticketCode: "7219/7220",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 51),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 56),
			ticketCode: "6379",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 56),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 1),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 1),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 11),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 11),
			ticketCode: "7403/7404",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 16),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 21),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 21),
			ticketCode: "7405/7406",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 26),
			ticketCode: "6417",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 31),
			ticketCode: "7227/7228",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 31),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 36),
			ticketCode: "6381",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 36),
			ticketCode: "6388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 41),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 41),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 51),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 51),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 56),
			ticketCode: "6894",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 56),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 1),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 1),
			ticketCode: "7413/7414",
		},
	],
	"34": [
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 2),
			ticketCode: "6503",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 6),
			ticketCode: "6603",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 24),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 25),
			ticketCode: "6700",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 46),
			ticketCode: "6601",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 2),
			ticketCode: "6511",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 16),
			ticketCode: "6517",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 34),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 31),
			ticketCode: "6518",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 5),
			ticketCode: "6614",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 41),
			ticketCode: "6616",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 12),
			ticketCode: "6723",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(23, 33),
			ticketCode: "6618",
		},
	],
	"35": [
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 2),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 7),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 9),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 12),
			ticketCode: "7419/7420",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 14),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 19),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 22),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 27),
			ticketCode: "6390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 29),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 31),
			ticketCode: "7423/7424",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 34),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 41),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 47),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 51),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 1),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 7),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 11),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 21),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 27),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 31),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 37),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 40),
			ticketCode: "6301",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(4, 46),
			ticketCode: "6502",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 48),
			ticketCode: "6501",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(4, 59),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 9),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 13),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 19),
			ticketCode: "7305/7306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 19),
			ticketCode: "7922",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 24),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 29),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 34),
			ticketCode: "6303",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 39),
			ticketCode: "7309/7310",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 44),
			ticketCode: "6603",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 49),
			ticketCode: "7311/7312",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 52),
			ticketCode: "6602",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 54),
			ticketCode: "6505",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 57),
			ticketCode: "6504",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 59),
			ticketCode: "7313/7314",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 2),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 4),
			ticketCode: "6305",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 7),
			ticketCode: "6302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 9),
			ticketCode: "7315/7316",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 12),
			ticketCode: "7203/7204",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 14),
			ticketCode: "6507",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 19),
			ticketCode: "7317/7318",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 22),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 24),
			ticketCode: "6801",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 29),
			ticketCode: "7319/7320",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 32),
			ticketCode: "7207/7208",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 34),
			ticketCode: "7902",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 34),
			ticketCode: "6701",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 39),
			ticketCode: "7321/7322",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 40),
			ticketCode: "7532",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 42),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 44),
			ticketCode: "6509",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 49),
			ticketCode: "7323/7324",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 52),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 54),
			ticketCode: "7533",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 54),
			ticketCode: "6601",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 57),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 59),
			ticketCode: "7325/7326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 2),
			ticketCode: "7213/7214",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 4),
			ticketCode: "6703",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 7),
			ticketCode: "6318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 9),
			ticketCode: "7327/7328",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 12),
			ticketCode: "7215/7216",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 13),
			ticketCode: "7921",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 14),
			ticketCode: "6511",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 17),
			ticketCode: "6506",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 19),
			ticketCode: "7329/7330",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 22),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 24),
			ticketCode: "6307",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 27),
			ticketCode: "6402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 29),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 32),
			ticketCode: "7535",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 32),
			ticketCode: "7219/7220",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 37),
			ticketCode: "6306",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 39),
			ticketCode: "7536",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 39),
			ticketCode: "7333/7334",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 42),
			ticketCode: "7221/7222",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 44),
			ticketCode: "6401",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 45),
			ticketCode: "7951",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 47),
			ticketCode: "6308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 49),
			ticketCode: "7335/7336",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 52),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 54),
			ticketCode: "6311",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 57),
			ticketCode: "6704",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 59),
			ticketCode: "7337/7338",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 2),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 3),
			ticketCode: "7539",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 4),
			ticketCode: "6313",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 7),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 9),
			ticketCode: "7339/7340",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 12),
			ticketCode: "7227/7228",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 14),
			ticketCode: "6513",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 17),
			ticketCode: "6508",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 18),
			ticketCode: "7520",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 19),
			ticketCode: "7341/7342",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 19),
			ticketCode: "7905",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 22),
			ticketCode: "7229/7230",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 27),
			ticketCode: "6346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 29),
			ticketCode: "7343/7344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 32),
			ticketCode: "7231/7232",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 37),
			ticketCode: "6310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 39),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 42),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 47),
			ticketCode: "7541",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 47),
			ticketCode: "6312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 49),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 49),
			ticketCode: "7904",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 52),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 54),
			ticketCode: "6315",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 59),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(8, 59),
			ticketCode: "7928",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 2),
			ticketCode: "7237/7238",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 4),
			ticketCode: "6515",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 7),
			ticketCode: "6314",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 9),
			ticketCode: "7542",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 9),
			ticketCode: "7351/7352",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 12),
			ticketCode: "7239/7240",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 14),
			ticketCode: "6517",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 17),
			ticketCode: "6396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 19),
			ticketCode: "7353/7354",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 22),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 24),
			ticketCode: "6317",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 29),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 32),
			ticketCode: "7243/7244",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 37),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 39),
			ticketCode: "7357/7358",
		},
		{
			name: "Бологое — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 39),
			ticketCode: "7961/7963",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 42),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 44),
			ticketCode: "6403",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 49),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 49),
			ticketCode: "7903",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 52),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 54),
			ticketCode: "6391",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 55),
			ticketCode: "7925",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 59),
			ticketCode: "7361/7362",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 2),
			ticketCode: "7249/7250",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 7),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 9),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 10),
			ticketCode: "7545",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 12),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 14),
			ticketCode: "6319",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 16),
			ticketCode: "7930",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 17),
			ticketCode: "6510",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 19),
			ticketCode: "7365/7366",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 22),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 22),
			ticketCode: "7917",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 24),
			ticketCode: "6519",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 26),
			ticketCode: "6706",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 29),
			ticketCode: "7526",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 29),
			ticketCode: "7367/7368",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 32),
			ticketCode: "7255/7256",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 38),
			ticketCode: "7546",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 39),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 42),
			ticketCode: "7257/7258",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 44),
			ticketCode: "7548",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 47),
			ticketCode: "6322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 49),
			ticketCode: "7371/7372",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 52),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 54),
			ticketCode: "6321",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 59),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 59),
			ticketCode: "7906",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 2),
			ticketCode: "7261/7262",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 7),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 9),
			ticketCode: "7375/7376",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 12),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 14),
			ticketCode: "6113",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 17),
			ticketCode: "6326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 19),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(11, 19),
			ticketCode: "7932",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 22),
			ticketCode: "7265/7266",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 27),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 29),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 32),
			ticketCode: "7267/7268",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 37),
			ticketCode: "6708",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 39),
			ticketCode: "7381/7382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 42),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 48),
			ticketCode: "7549",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 49),
			ticketCode: "7383/7384",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 52),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 54),
			ticketCode: "6201",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 57),
			ticketCode: "6360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 59),
			ticketCode: "7385/7386",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 2),
			ticketCode: "7273/7274",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 7),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 9),
			ticketCode: "7387/7388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 12),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 14),
			ticketCode: "6323",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 17),
			ticketCode: "6406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 19),
			ticketCode: "7389/7390",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 22),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 24),
			ticketCode: "6521",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 29),
			ticketCode: "7391/7392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 32),
			ticketCode: "7279/7280",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 33),
			ticketCode: "6709",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 39),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 42),
			ticketCode: "7281/7282",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 48),
			ticketCode: "7934",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 48),
			ticketCode: "7101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 49),
			ticketCode: "7395/7396",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 52),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 59),
			ticketCode: "7397/7398",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 2),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 4),
			ticketCode: "6325",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 7),
			ticketCode: "6114",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 9),
			ticketCode: "7399/7400",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 12),
			ticketCode: "7287/7288",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(13, 13),
			ticketCode: "7102",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 14),
			ticketCode: "6327",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 17),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 19),
			ticketCode: "7401/7402",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 22),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 24),
			ticketCode: "6329",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 29),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 32),
			ticketCode: "7291/7292",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 37),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 39),
			ticketCode: "7405/7406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 42),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 44),
			ticketCode: "6331",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 49),
			ticketCode: "7407/7408",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 50),
			ticketCode: "7931",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 52),
			ticketCode: "7295/7296",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 56),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 59),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 1),
			ticketCode: "7149",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 2),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 4),
			ticketCode: "6333",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 9),
			ticketCode: "7411/7412",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 12),
			ticketCode: "7299/7300",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 17),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 19),
			ticketCode: "7413/7414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 22),
			ticketCode: "7301/7302",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 27),
			ticketCode: "6514",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 29),
			ticketCode: "7415/7416",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 32),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 34),
			ticketCode: "6609",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 37),
			ticketCode: "6408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 39),
			ticketCode: "7417/7418",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 42),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 44),
			ticketCode: "6111",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 47),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 49),
			ticketCode: "7419/7420",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 52),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 54),
			ticketCode: "6335",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 59),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 1),
			ticketCode: "7556",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 2),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 7),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 9),
			ticketCode: "7423/7424",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 12),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 14),
			ticketCode: "6339",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(15, 14),
			ticketCode: "7122",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 19),
			ticketCode: "7425/7426",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 22),
			ticketCode: "7313/7314",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 24),
			ticketCode: "6407",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 27),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 29),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 32),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 34),
			ticketCode: "6341",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 39),
			ticketCode: "7429/7430",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 42),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 44),
			ticketCode: "6527",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 45),
			ticketCode: "7551",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 47),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 49),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 52),
			ticketCode: "7319/7320",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 53),
			ticketCode: "7935",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 54),
			ticketCode: "6343",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 59),
			ticketCode: "7433/7434",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 2),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 4),
			ticketCode: "6345",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 8),
			ticketCode: "7103",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 9),
			ticketCode: "7435/7436",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 12),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 13),
			ticketCode: "7561",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 17),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 19),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 22),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 23),
			ticketCode: "7559",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 27),
			ticketCode: "6344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 29),
			ticketCode: "7439/7440",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 32),
			ticketCode: "7327/7328",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 33),
			ticketCode: "7558",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 34),
			ticketCode: "6409",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 34),
			ticketCode: "7937",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 39),
			ticketCode: "7441/7442",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 42),
			ticketCode: "7329/7330",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 44),
			ticketCode: "6713",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 47),
			ticketCode: "6350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 48),
			ticketCode: "7908",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 49),
			ticketCode: "7443/7444",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 52),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 54),
			ticketCode: "6349",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(16, 56),
			ticketCode: "7954",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 57),
			ticketCode: "6352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 59),
			ticketCode: "7445/7446",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(17, 1),
			ticketCode: "7942",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 2),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 4),
			ticketCode: "6351",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 7),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 9),
			ticketCode: "7447/7448",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 12),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 17),
			ticketCode: "6356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 17),
			ticketCode: "7560",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 19),
			ticketCode: "7449/7450",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 22),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 24),
			ticketCode: "6355",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 27),
			ticketCode: "6358",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 27),
			ticketCode: "7562",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 29),
			ticketCode: "7451/7452",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 32),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 34),
			ticketCode: "6353",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 37),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 39),
			ticketCode: "7453/7454",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 42),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 44),
			ticketCode: "6357",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 49),
			ticketCode: "7455/7456",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 51),
			ticketCode: "7565",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 52),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 54),
			ticketCode: "6359",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 59),
			ticketCode: "7457/7458",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 2),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 4),
			ticketCode: "6361",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 5),
			ticketCode: "7567",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(18, 7),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 9),
			ticketCode: "7459/7460",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 12),
			ticketCode: "7555",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 12),
			ticketCode: "7347/7348",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 14),
			ticketCode: "6529",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 17),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 19),
			ticketCode: "7461/7462",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 19),
			ticketCode: "7123",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 22),
			ticketCode: "7349/7350",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 24),
			ticketCode: "6411",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 27),
			ticketCode: "6362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 29),
			ticketCode: "7463/7464",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 30),
			ticketCode: "7569",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 32),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 34),
			ticketCode: "6363",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 37),
			ticketCode: "6364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 39),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(18, 39),
			ticketCode: "7914",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 42),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 44),
			ticketCode: "6365",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 47),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 49),
			ticketCode: "7467/7468",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(18, 49),
			ticketCode: "7944",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 52),
			ticketCode: "7355/7356",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 57),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 59),
			ticketCode: "7469/7470",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 2),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 4),
			ticketCode: "6367",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 7),
			ticketCode: "6414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 9),
			ticketCode: "7471/7472",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 12),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 14),
			ticketCode: "6369",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 17),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 19),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 22),
			ticketCode: "7568",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 22),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 24),
			ticketCode: "6371",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 27),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 29),
			ticketCode: "7475/7476",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 32),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 34),
			ticketCode: "6373",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 37),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 39),
			ticketCode: "7477/7478",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 42),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 44),
			ticketCode: "6531",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 47),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 49),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 52),
			ticketCode: "7367/7368",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 55),
			ticketCode: "7941",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 57),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 59),
			ticketCode: "7481/7482",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 2),
			ticketCode: "7369/7370",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 4),
			ticketCode: "6413",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(20, 7),
			ticketCode: "7946",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 9),
			ticketCode: "7483/7484",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 12),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(20, 13),
			ticketCode: "6520",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 14),
			ticketCode: "6613",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 17),
			ticketCode: "6416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 19),
			ticketCode: "7485/7486",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 22),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 24),
			ticketCode: "6533",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 27),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 29),
			ticketCode: "7487/7488",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 32),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 34),
			ticketCode: "7572",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 34),
			ticketCode: "7105",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 34),
			ticketCode: "6717",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 37),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 39),
			ticketCode: "7489/7490",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 42),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 47),
			ticketCode: "6380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 49),
			ticketCode: "7491/7492",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 52),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 54),
			ticketCode: "6393",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 57),
			ticketCode: "6382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 59),
			ticketCode: "7493/7494",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 2),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 4),
			ticketCode: "6375",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 7),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 9),
			ticketCode: "7495/7496",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 12),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 14),
			ticketCode: "6377",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 18),
			ticketCode: "7943",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 19),
			ticketCode: "7948",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 19),
			ticketCode: "7497/7498",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 22),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 27),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 29),
			ticketCode: "7499/7500",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 32),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 34),
			ticketCode: "6415",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 37),
			ticketCode: "6616",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 39),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 42),
			ticketCode: "7389/7390",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 47),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 49),
			ticketCode: "7203/7204",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 52),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 59),
			ticketCode: "7205/7206",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 2),
			ticketCode: "7393/7394",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 4),
			ticketCode: "6535",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 5),
			ticketCode: "7570",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(22, 7),
			ticketCode: "6720",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 9),
			ticketCode: "7207/7208",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 12),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 14),
			ticketCode: "6395",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 19),
			ticketCode: "7209/7210",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 22),
			ticketCode: "7397/7398",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 24),
			ticketCode: "6721",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 27),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 29),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 32),
			ticketCode: "7399/7400",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 34),
			ticketCode: "7945",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 37),
			ticketCode: "6418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 39),
			ticketCode: "7213/7214",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 42),
			ticketCode: "7401/7402",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 44),
			ticketCode: "6615",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 49),
			ticketCode: "7215/7216",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 52),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 54),
			ticketCode: "6337",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 57),
			ticketCode: "6524",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 59),
			ticketCode: "7217/7218",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 2),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 9),
			ticketCode: "7219/7220",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 12),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 14),
			ticketCode: "6379",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 17),
			ticketCode: "6388",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 19),
			ticketCode: "7578",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 19),
			ticketCode: "7221/7222",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 22),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 29),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 29),
			ticketCode: "7575",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 32),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 37),
			ticketCode: "6894",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 39),
			ticketCode: "7225/7226",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 42),
			ticketCode: "7413/7414",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 44),
			ticketCode: "6417",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 49),
			ticketCode: "7227/7228",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 52),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 54),
			ticketCode: "6381",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 59),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 2),
			ticketCode: "7417/7418",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(0, 7),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 9),
			ticketCode: "7231/7232",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 12),
			ticketCode: "7419/7420",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 14),
			ticketCode: "6723",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 19),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 22),
			ticketCode: "7421/7422",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 27),
			ticketCode: "6390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 29),
			ticketCode: "7235/7236",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 31),
			ticketCode: "7423/7424",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 34),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 41),
			ticketCode: "7425/7426",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 47),
			ticketCode: "6802",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 51),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 1),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 7),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 11),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 21),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 27),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 31),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 37),
			ticketCode: "6348",
		},
	],
	"36": [
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 2),
			ticketCode: "6381",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 4),
			ticketCode: "7419/7420",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 7),
			ticketCode: "7229/7230",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 14),
			ticketCode: "7421/7422",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 17),
			ticketCode: "7231/7232",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 19),
			ticketCode: "6390",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 22),
			ticketCode: "6723",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 23),
			ticketCode: "7423/7424",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 27),
			ticketCode: "7233/7234",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 33),
			ticketCode: "7425/7426",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(0, 37),
			ticketCode: "7235/7236",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 39),
			ticketCode: "6802",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 42),
			ticketCode: "6617",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 43),
			ticketCode: "7427/7428",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(0, 53),
			ticketCode: "7429/7430",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(0, 59),
			ticketCode: "6392",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 3),
			ticketCode: "7431/7432",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 13),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 19),
			ticketCode: "6394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(1, 23),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(1, 29),
			ticketCode: "6348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 7),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 17),
			ticketCode: "7303/7304",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 21),
			ticketCode: "6503",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 27),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 32),
			ticketCode: "6101",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 37),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 42),
			ticketCode: "6303",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 44),
			ticketCode: "6602",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 47),
			ticketCode: "7309/7310",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(5, 49),
			ticketCode: "6504",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 52),
			ticketCode: "6603",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(5, 54),
			ticketCode: "7201/7202",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(5, 57),
			ticketCode: "7311/7312",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(5, 59),
			ticketCode: "6302",
		},
		{
			name: "Решетниково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 2),
			ticketCode: "6505",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 4),
			ticketCode: "7203/7204",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 7),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 12),
			ticketCode: "6305",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 14),
			ticketCode: "7205/7206",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 17),
			ticketCode: "7315/7316",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 22),
			ticketCode: "6507",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 24),
			ticketCode: "7207/7208",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 27),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 32),
			ticketCode: "6801",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 34),
			ticketCode: "7209/7210",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 37),
			ticketCode: "7319/7320",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 42),
			ticketCode: "6701",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 44),
			ticketCode: "7211/7212",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 47),
			ticketCode: "7321/7322",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 49),
			ticketCode: "6304",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 52),
			ticketCode: "6509",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(6, 54),
			ticketCode: "7213/7214",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(6, 57),
			ticketCode: "7323/7324",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(6, 59),
			ticketCode: "6318",
		},
		{
			name: "Конаково ГРЭС — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 2),
			ticketCode: "6601",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 4),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 7),
			ticketCode: "7325/7326",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(7, 9),
			ticketCode: "6506",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 12),
			ticketCode: "6703",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 14),
			ticketCode: "7217/7218",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 17),
			ticketCode: "7327/7328",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 19),
			ticketCode: "6402",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 22),
			ticketCode: "6511",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 24),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 27),
			ticketCode: "7329/7330",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 29),
			ticketCode: "6306",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 32),
			ticketCode: "6307",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 34),
			ticketCode: "7221/7222",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 37),
			ticketCode: "7331/7332",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 39),
			ticketCode: "6308",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 44),
			ticketCode: "7223/7224",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 47),
			ticketCode: "7333/7334",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(7, 49),
			ticketCode: "6704",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(7, 52),
			ticketCode: "6401",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(7, 54),
			ticketCode: "7225/7226",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(7, 57),
			ticketCode: "7335/7336",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(7, 59),
			ticketCode: "6338",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 2),
			ticketCode: "6311",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 4),
			ticketCode: "7227/7228",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 7),
			ticketCode: "7337/7338",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 9),
			ticketCode: "6508",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 12),
			ticketCode: "6313",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 14),
			ticketCode: "7229/7230",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 17),
			ticketCode: "7339/7340",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 19),
			ticketCode: "6346",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(8, 22),
			ticketCode: "6513",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 24),
			ticketCode: "7231/7232",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 27),
			ticketCode: "7341/7342",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 29),
			ticketCode: "6310",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 34),
			ticketCode: "7233/7234",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 37),
			ticketCode: "7343/7344",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 39),
			ticketCode: "6312",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 44),
			ticketCode: "7235/7236",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 47),
			ticketCode: "7345/7346",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(8, 54),
			ticketCode: "7237/7238",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(8, 57),
			ticketCode: "7347/7348",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(8, 59),
			ticketCode: "6314",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 2),
			ticketCode: "6315",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 4),
			ticketCode: "7239/7240",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 7),
			ticketCode: "7349/7350",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 9),
			ticketCode: "6396",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 12),
			ticketCode: "6515",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 14),
			ticketCode: "7241/7242",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 17),
			ticketCode: "7351/7352",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 22),
			ticketCode: "6517",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 24),
			ticketCode: "7243/7244",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 27),
			ticketCode: "7353/7354",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 29),
			ticketCode: "6316",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 32),
			ticketCode: "6317",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 34),
			ticketCode: "7245/7246",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 37),
			ticketCode: "7355/7356",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 44),
			ticketCode: "7247/7248",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 47),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(9, 52),
			ticketCode: "6403",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(9, 54),
			ticketCode: "7249/7250",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(9, 57),
			ticketCode: "7359/7360",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(9, 59),
			ticketCode: "6606",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 2),
			ticketCode: "6391",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 4),
			ticketCode: "7251/7252",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 7),
			ticketCode: "7361/7362",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 9),
			ticketCode: "6510",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 14),
			ticketCode: "7253/7254",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 17),
			ticketCode: "7363/7364",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(10, 18),
			ticketCode: "6706",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 22),
			ticketCode: "6319",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 24),
			ticketCode: "7255/7256",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 27),
			ticketCode: "7365/7366",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(10, 32),
			ticketCode: "6519",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 34),
			ticketCode: "7257/7258",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 37),
			ticketCode: "7367/7368",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 39),
			ticketCode: "6322",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 44),
			ticketCode: "7259/7260",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 47),
			ticketCode: "7369/7370",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(10, 54),
			ticketCode: "7261/7262",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(10, 57),
			ticketCode: "7371/7372",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(10, 59),
			ticketCode: "6324",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 2),
			ticketCode: "6321",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 4),
			ticketCode: "7263/7264",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 7),
			ticketCode: "7373/7374",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 9),
			ticketCode: "6326",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 14),
			ticketCode: "7265/7266",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 17),
			ticketCode: "7375/7376",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 19),
			ticketCode: "6328",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(11, 22),
			ticketCode: "6113",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 24),
			ticketCode: "7267/7268",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 27),
			ticketCode: "7377/7378",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 29),
			ticketCode: "6708",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 34),
			ticketCode: "7269/7270",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 37),
			ticketCode: "7379/7380",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 44),
			ticketCode: "7271/7272",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 47),
			ticketCode: "7381/7382",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 49),
			ticketCode: "6360",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(11, 54),
			ticketCode: "7273/7274",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(11, 57),
			ticketCode: "7383/7384",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(11, 59),
			ticketCode: "6512",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 2),
			ticketCode: "6201",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 4),
			ticketCode: "7275/7276",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 7),
			ticketCode: "7385/7386",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(12, 9),
			ticketCode: "6406",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 14),
			ticketCode: "7277/7278",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 17),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 22),
			ticketCode: "6323",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 24),
			ticketCode: "7279/7280",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 27),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 32),
			ticketCode: "6521",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 34),
			ticketCode: "7281/7282",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 37),
			ticketCode: "7391/7392",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(12, 41),
			ticketCode: "6709",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 44),
			ticketCode: "7283/7284",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 47),
			ticketCode: "7393/7394",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(12, 54),
			ticketCode: "7285/7286",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(12, 57),
			ticketCode: "7395/7396",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(12, 59),
			ticketCode: "6114",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 4),
			ticketCode: "7287/7288",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 7),
			ticketCode: "7397/7398",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 9),
			ticketCode: "6202",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 12),
			ticketCode: "6325",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 14),
			ticketCode: "7289/7290",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 17),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 22),
			ticketCode: "6327",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 24),
			ticketCode: "7291/7292",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 27),
			ticketCode: "7401/7402",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(13, 29),
			ticketCode: "6336",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 32),
			ticketCode: "6329",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 34),
			ticketCode: "7293/7294",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 37),
			ticketCode: "7403/7404",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 44),
			ticketCode: "7295/7296",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 47),
			ticketCode: "7405/7406",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(13, 48),
			ticketCode: "6710",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(13, 52),
			ticketCode: "6331",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(13, 54),
			ticketCode: "7297/7298",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(13, 57),
			ticketCode: "7407/7408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 4),
			ticketCode: "7299/7300",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 7),
			ticketCode: "7409/7410",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 9),
			ticketCode: "6610",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 12),
			ticketCode: "6333",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 14),
			ticketCode: "7301/7302",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 17),
			ticketCode: "7411/7412",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(14, 19),
			ticketCode: "6514",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 24),
			ticketCode: "7303/7304",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 27),
			ticketCode: "7413/7414",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(14, 29),
			ticketCode: "6408",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 34),
			ticketCode: "7305/7306",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 37),
			ticketCode: "7415/7416",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 39),
			ticketCode: "6112",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 42),
			ticketCode: "6609",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 44),
			ticketCode: "7307/7308",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 47),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 52),
			ticketCode: "6111",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(14, 54),
			ticketCode: "7309/7310",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(14, 57),
			ticketCode: "7419/7420",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(14, 59),
			ticketCode: "6340",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 2),
			ticketCode: "6335",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 4),
			ticketCode: "7311/7312",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 7),
			ticketCode: "7421/7422",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 14),
			ticketCode: "7313/7314",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 17),
			ticketCode: "7423/7424",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 19),
			ticketCode: "6342",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 22),
			ticketCode: "6339",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 24),
			ticketCode: "7315/7316",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 27),
			ticketCode: "7425/7426",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 32),
			ticketCode: "6407",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 34),
			ticketCode: "7317/7318",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 37),
			ticketCode: "7427/7428",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(15, 39),
			ticketCode: "6398",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 42),
			ticketCode: "6341",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 44),
			ticketCode: "7319/7320",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 47),
			ticketCode: "7429/7430",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 52),
			ticketCode: "6527",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(15, 54),
			ticketCode: "7321/7322",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(15, 57),
			ticketCode: "7431/7432",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 2),
			ticketCode: "6343",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 4),
			ticketCode: "7323/7324",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 7),
			ticketCode: "7433/7434",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(16, 9),
			ticketCode: "6410",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 12),
			ticketCode: "6345",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 14),
			ticketCode: "7325/7326",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 17),
			ticketCode: "7435/7436",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 19),
			ticketCode: "6344",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 24),
			ticketCode: "7327/7328",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 27),
			ticketCode: "7437/7438",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 34),
			ticketCode: "7329/7330",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 37),
			ticketCode: "7439/7440",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 39),
			ticketCode: "6350",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 42),
			ticketCode: "6409",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 44),
			ticketCode: "7331/7332",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 47),
			ticketCode: "7441/7442",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 49),
			ticketCode: "6352",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(16, 52),
			ticketCode: "6713",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(16, 54),
			ticketCode: "7333/7334",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(16, 57),
			ticketCode: "7443/7444",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(16, 59),
			ticketCode: "6354",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 2),
			ticketCode: "6349",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 4),
			ticketCode: "7335/7336",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 7),
			ticketCode: "7445/7446",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 9),
			ticketCode: "6356",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 12),
			ticketCode: "6351",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 14),
			ticketCode: "7337/7338",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 17),
			ticketCode: "7447/7448",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(17, 19),
			ticketCode: "6358",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 24),
			ticketCode: "7339/7340",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 27),
			ticketCode: "7449/7450",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(17, 29),
			ticketCode: "6612",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 32),
			ticketCode: "6355",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 34),
			ticketCode: "7341/7342",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 37),
			ticketCode: "7451/7452",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 42),
			ticketCode: "6353",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 44),
			ticketCode: "7343/7344",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 47),
			ticketCode: "7453/7454",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(17, 52),
			ticketCode: "6357",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(17, 54),
			ticketCode: "7345/7346",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(17, 57),
			ticketCode: "7455/7456",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(17, 59),
			ticketCode: "6412",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 2),
			ticketCode: "6359",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 4),
			ticketCode: "7347/7348",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 7),
			ticketCode: "7457/7458",
		},
		{
			name: "Москва (Ленинградский вокзал) — Поваровка",
			dateTime: getDate(18, 9),
			ticketCode: "6716",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 12),
			ticketCode: "6361",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 14),
			ticketCode: "7349/7350",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 17),
			ticketCode: "7459/7460",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 19),
			ticketCode: "6362",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 22),
			ticketCode: "6529",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 24),
			ticketCode: "7351/7352",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 27),
			ticketCode: "7461/7462",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 29),
			ticketCode: "6364",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 32),
			ticketCode: "6411",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 34),
			ticketCode: "7353/7354",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 37),
			ticketCode: "7463/7464",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 39),
			ticketCode: "6366",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 42),
			ticketCode: "6363",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 44),
			ticketCode: "7355/7356",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 47),
			ticketCode: "7465/7466",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(18, 49),
			ticketCode: "6518",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(18, 52),
			ticketCode: "6365",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(18, 54),
			ticketCode: "7357/7358",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(18, 57),
			ticketCode: "7467/7468",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(18, 59),
			ticketCode: "6414",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 4),
			ticketCode: "7359/7360",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 7),
			ticketCode: "7469/7470",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 9),
			ticketCode: "6368",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 12),
			ticketCode: "6367",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 14),
			ticketCode: "7361/7362",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 17),
			ticketCode: "7471/7472",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 19),
			ticketCode: "6370",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 22),
			ticketCode: "6369",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 24),
			ticketCode: "7363/7364",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 27),
			ticketCode: "7473/7474",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 29),
			ticketCode: "6372",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 32),
			ticketCode: "6371",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 34),
			ticketCode: "7365/7366",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 37),
			ticketCode: "7475/7476",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(19, 39),
			ticketCode: "6374",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 42),
			ticketCode: "6373",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 44),
			ticketCode: "7367/7368",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 47),
			ticketCode: "7477/7478",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(19, 49),
			ticketCode: "6614",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(19, 52),
			ticketCode: "6531",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(19, 54),
			ticketCode: "7369/7370",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(19, 57),
			ticketCode: "7479/7480",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 4),
			ticketCode: "7371/7372",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 7),
			ticketCode: "7481/7482",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(20, 9),
			ticketCode: "6416",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 12),
			ticketCode: "6413",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 14),
			ticketCode: "7373/7374",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 17),
			ticketCode: "7483/7484",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 19),
			ticketCode: "6376",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 22),
			ticketCode: "6613",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 24),
			ticketCode: "7375/7376",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 27),
			ticketCode: "7485/7486",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 29),
			ticketCode: "6378",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 32),
			ticketCode: "6533",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 34),
			ticketCode: "7377/7378",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 37),
			ticketCode: "7487/7488",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 39),
			ticketCode: "6380",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 42),
			ticketCode: "6717",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 44),
			ticketCode: "7379/7380",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 47),
			ticketCode: "7489/7490",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 49),
			ticketCode: "6382",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(20, 54),
			ticketCode: "7381/7382",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(20, 57),
			ticketCode: "7491/7492",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(20, 59),
			ticketCode: "6384",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 2),
			ticketCode: "6393",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 4),
			ticketCode: "7383/7384",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 7),
			ticketCode: "7493/7494",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 12),
			ticketCode: "6375",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 14),
			ticketCode: "7385/7386",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 17),
			ticketCode: "7495/7496",
		},
		{
			name: "Москва (Ленинградский вокзал) — Клин",
			dateTime: getDate(21, 19),
			ticketCode: "6522",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 22),
			ticketCode: "6377",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 24),
			ticketCode: "7387/7388",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 27),
			ticketCode: "7497/7498",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(21, 29),
			ticketCode: "6616",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 34),
			ticketCode: "7389/7390",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 37),
			ticketCode: "7499/7500",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(21, 39),
			ticketCode: "6386",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 43),
			ticketCode: "6415",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 44),
			ticketCode: "7391/7392",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 47),
			ticketCode: "7201/7202",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(21, 54),
			ticketCode: "7393/7394",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(21, 57),
			ticketCode: "7203/7204",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(21, 59),
			ticketCode: "6720",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 4),
			ticketCode: "7395/7396",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 7),
			ticketCode: "7205/7206",
		},
		{
			name: "Клин — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 12),
			ticketCode: "6535",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 14),
			ticketCode: "7397/7398",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 17),
			ticketCode: "7207/7208",
		},
		{
			name: "Москва (Ленинградский вокзал) — Конаково ГРЭС",
			dateTime: getDate(22, 19),
			ticketCode: "6618",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 22),
			ticketCode: "6395",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 24),
			ticketCode: "7399/7400",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 27),
			ticketCode: "7209/7210",
		},
		{
			name: "Москва (Ленинградский вокзал) — Подсолнечная",
			dateTime: getDate(22, 29),
			ticketCode: "6418",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 32),
			ticketCode: "6721",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 34),
			ticketCode: "7401/7402",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 37),
			ticketCode: "7211/7212",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 44),
			ticketCode: "7403/7404",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 47),
			ticketCode: "7213/7214",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(22, 49),
			ticketCode: "6524",
		},
		{
			name: "Поваровка — Москва (Ленинградский вокзал)",
			dateTime: getDate(22, 52),
			ticketCode: "6615",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(22, 54),
			ticketCode: "7405/7406",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(22, 57),
			ticketCode: "7215/7216",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 2),
			ticketCode: "6337",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 4),
			ticketCode: "7407/7408",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 7),
			ticketCode: "7217/7218",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 9),
			ticketCode: "6388",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 14),
			ticketCode: "7409/7410",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 17),
			ticketCode: "7219/7220",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 22),
			ticketCode: "6379",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 24),
			ticketCode: "7411/7412",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 27),
			ticketCode: "7221/7222",
		},
		{
			name: "Москва (Ленинградский вокзал) — Зеленоград-Крюково",
			dateTime: getDate(23, 29),
			ticketCode: "6894",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 34),
			ticketCode: "7413/7414",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 37),
			ticketCode: "7223/7224",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 44),
			ticketCode: "7415/7416",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 47),
			ticketCode: "7225/7226",
		},
		{
			name: "Подсолнечная — Москва (Ленинградский вокзал)",
			dateTime: getDate(23, 52),
			ticketCode: "6417",
		},
		{
			name: "Ипподром — Зеленоград-Крюково",
			dateTime: getDate(23, 54),
			ticketCode: "7417/7418",
		},
		{
			name: "Зеленоград-Крюково — Ипподром",
			dateTime: getDate(23, 57),
			ticketCode: "7227/7228",
		},
		{
			name: "Москва (Ленинградский вокзал) — Решетниково",
			dateTime: getDate(23, 59),
			ticketCode: "6620",
		},
		{
			name: "Зеленоград-Крюково — Москва (Ленинградский вокзал)",
			dateTime: getDate(0, 2),
			ticketCode: "6381",
		},
	],
	"37": [
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 58),
			ticketCode: "6701",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(5, 30),
			ticketCode: "6703",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(5, 52),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(5, 58),
			ticketCode: "6702",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 9),
			ticketCode: "6782",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(9, 18),
			ticketCode: "6707",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(11, 55),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 3),
			ticketCode: "6706",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 5),
			ticketCode: "6922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(15, 7),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(15, 14),
			ticketCode: "6921",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 25),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(19, 11),
			ticketCode: "6749/7939",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(23, 38),
			ticketCode: "6720",
		},
	],
	"38": [
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 7),
			ticketCode: "6701",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(4, 56),
			ticketCode: "6703",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(6, 10),
			ticketCode: "7951",
		},
		{
			name: "Зеленоград-Крюково — Тверь",
			dateTime: getDate(6, 26),
			ticketCode: "6700",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 32),
			ticketCode: "6702",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(6, 39),
			ticketCode: "7922",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(7, 43),
			ticketCode: "6782",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(8, 44),
			ticketCode: "6707",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(12, 27),
			ticketCode: "6920",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(12, 35),
			ticketCode: "6706",
		},
		{
			name: "Решетниково — Тверь",
			dateTime: getDate(13, 40),
			ticketCode: "6922",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(14, 34),
			ticketCode: "6713",
		},
		{
			name: "Тверь — Решетниково",
			dateTime: getDate(14, 40),
			ticketCode: "6921",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(15, 59),
			ticketCode: "6710",
		},
		{
			name: "Тверь — Клин",
			dateTime: getDate(18, 37),
			ticketCode: "6749/7939",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 22),
			ticketCode: "6721",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(20, 57),
			ticketCode: "7947",
		},
		{
			name: "Тверь — Москва (Ленинградский вокзал)",
			dateTime: getDate(21, 59),
			ticketCode: "6723",
		},
		{
			name: "Москва (Ленинградский вокзал) — Тверь",
			dateTime: getDate(0, 12),
			ticketCode: "6720",
		},
	],
};

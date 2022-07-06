const approvedPlaces = [
	{
		id: 0,
		placeName: "Estação Savassi",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Savassi",
		type: "Bar",
		price: "2",
		img: "https://f.i.uol.com.br/fotografia/2021/08/25/162990890261266fa6b56c0_1629908902_3x2_xl.jpg",
	},
	{
		id: 1,
		placeName: "LAB BH",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Lab",
		type: "Boate",
		price: "2",
		img: "https://www.segs.com.br/media/k2/items/cache/ad7def329b4000f61aed99c355ac6ba9_XL.jpg",
	},
	{
		id: 2,
		placeName: "Pizzaria Porto",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Porto",
		type: "Restaurante",
		price: "2",
		img: "https://10619-2.s.cdn12.com/rests/original/103_508878595.jpg",
	},
	{
		id: 3,
		placeName: "Pizzaria Mustache",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Italia",
		type: "Restaurante",
		price: "2",
		img: "https://mustachehandpizza.com.br/wp-content/uploads/2017/04/Inaugur%C3%A7%C3%A3o-Mustache-e-Glaci%C3%AA-4.jpg",
	},
];

window.onload = () => {
	let places = localStorage.getItem("approvedPlaces");
	places = places
		? JSON.parse(places)
		: localStorage.setItem("approvedPlaces", JSON.stringify(approvedPlaces));
};

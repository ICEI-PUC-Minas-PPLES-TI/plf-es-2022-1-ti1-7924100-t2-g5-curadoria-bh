const approvedPlaces = [
	{
		id: 0,
		name: "Estação Savassi",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Savassi",
		type: "Bar",
		price: "2",
		img: "./img/124965178_431345291593776_1133127559976739421_n.jpg",
	},
	{
		id: 1,
		name: "LAB BH",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Lab",
		type: "Boate",
		price: "2",
		img: "./img/lab.jpg",
	},
	{
		id: 2,
		name: "Pizzaria Porto",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Porto",
		type: "Restaurante",
		price: "2",
		img: "./img/porto.jpg",
	},
	{
		id: 3,
		name: "Pizzaria Mustache",
		cnpj: "11111111111",
		phone: "3199999999",
		address: "Rua Italia",
		type: "Restaurante",
		price: "2",
		img: "./img/mustache.jpg",
	},
];

function loadProducts(data) {
	const div = document.createElement("div");

	div.setAttribute("id", data.id);
	div.classList.add("col-12");
	div.classList.add("col-sm-6");
	div.classList.add("col-lg-4");
	div.classList.add("framecardestab");

	div.innerHTML =
		'<div class="card" style="width: 100%;">' +
		'<img src="' +
		data.img +
		'" style="height: 300px;" class="card-img-top imgcardcupom" alt="' +
		data.name +
		'">' +
		'<div class="card-body">' +
		'<h5 class="card-title">' +
		data.name +
		"</h5>" +
		"</div>" +
		'<ul class="list-group list-group-flush">' +
		'<li class="list-group-item">' +
		data.type +
		"</li>" +
		"</ul>" +
		'<div class="d-grid gap-2">' +
		'<a href="#"><button type="button" class="btn btncolor w-100"><b>Veja mais</b></button></a>' +
		"</div>";

	const parent = document.getElementById("parent");
	parent.appendChild(div);
}

window.onload = () => {
	localStorage.setItem("approvedPlaces", JSON.stringify(approvedPlaces));
	const places = JSON.parse(localStorage.getItem("approvedPlaces"));
	places.forEach((i) => loadProducts(i));
};

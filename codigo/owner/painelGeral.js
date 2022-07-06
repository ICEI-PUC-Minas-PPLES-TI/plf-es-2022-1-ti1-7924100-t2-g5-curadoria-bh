var jsonObject = {
	products: [
		{
			id: 0,
			title: "10% OFF",
			validade: "11/01/2021",
			description:
				"10% de desconto em todos os produtos! Válido entre 30/05/2022 a 06/06/2022",
			image:
				"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
		{
			id: 1,
			title: "Open Food & Bar Aberto",
			validade: "13/12/2021",
			description: "Open Food & Bar Aberto | 18h às 00h",
			image:
				"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000464/img/basic/a0000464_main.jpg?20170412181618&q=80&rw=750&rh=536",
		},
		{
			id: 2,
			title: "Chopp 300ml gratuito",
			validade: "16/06/2021",
			description:
				"Chopp 300ml gratuito para primeira visita como assinante do Beagapp",
			image:
				"https://i0.wp.com/choppcuritiba.com.br/wp-content/uploads/2021/05/chopp-pilsen.jpg",
		},
		{
			id: 3,
			title: "Show: 'Hard and Heavy'",
			validade: "14/09/2021",
			description: "Show da banda Hard and Heavy | Dia 08/06/2022",
			image:
				"https://rockecia.com.br/site/wp-content/uploads/2019/03/perfil.jpg",
		},
	],
};

function loadProducts(data) {
	var li = document.createElement("li");

	li.setAttribute("id", data.id);

	li.innerHTML =
		'<div class="col-12 col-sm-12 col-md-6 col-xl-3 col-xxl-3">' +
		'<div class="card">' +
		'<img class="card-img-top" src="' +
		data.image +
		'" alt="Card image cap">' +
		'<div class="card-body">' +
		'<h5 class="card-title">' +
		data.title +
		"</h5>" +
		'<p class="card-text"><b>Validade:</b> ' +
		data.validade +
		"</p>" +
		'<p class="card-text">' +
		data.description +
		"</p>" +
		"</div>" +
		'<div class="btn-group" role="group">' +
		'<button class="btn btncolor w-50" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalToggle"><b>Editar</b></button>' +
		'<button class="btn btn-danger w-50" type="button" onclick="deleteProduct(this)"><b>Excluir</b></button>' +
		"</div>" +
		"</div>" +
		"</div>";

	//li.style.cssText = 'display: inline;'
	document.getElementById("home_product").appendChild(li);
}

function createProduct() {
	const registerBtn = document.getElementById("submit-place-btn");
	const titleInput = document.getElementById("titulo-input");
	const descInput = document.getElementById("desc-input");

	registerBtn.onclick = () => {
		const db = JSON.parse(localStorage.getItem("owners"));
		const cnpj = localStorage.getItem("logged");
		const thisOwner = db.find(({ place }) => place.cnpj === cnpj);
		let id = thisOwner.place.services.length;
		id += 1;

		const products = {
			id,
			title: titleInput.value,
			description: descInput.value,
		};
		thisOwner.place.services.push(products);
		const newDb = db.filter((owner) => owner.place.cnpj !== cnpj);
		newDb.push(thisOwner);
		localStorage.setItem("owners", JSON.stringify(newDb));
		thisOwner.place.services.forEach((i) => loadProducts(i));
	};
}

function deleteProduct(item) {
	const itemIndex = item.closest("li");
	const db = JSON.parse(localStorage.getItem("owners"));
	const cnpj = localStorage.getItem("logged");
	const thisOwner = db.find(({ place }) => place.cnpj === cnpj);
	const filteredServices = thisOwner.place.services.filter(
		({ id }) => id != itemIndex.id
	);
	thisOwner.place.services = filteredServices;
	const newDb = db.filter((owner) => owner.place.cnpj !== cnpj);
	newDb.push(thisOwner);
	localStorage.setItem("owners", JSON.stringify(newDb));
	itemIndex.remove();
}

function setStandardServices() {
	const db = JSON.parse(localStorage.getItem("owners"));
	const cnpj = localStorage.getItem("logged");
	const thisOwner = db.find(({ place }) => place.cnpj === cnpj);
	thisOwner.place.services = jsonObject.products;
	const newDb = db.filter((owner) => owner.place.cnpj !== cnpj);
	newDb.push(thisOwner);
	localStorage.setItem("owners", JSON.stringify(newDb));

	return { thisOwner };
}

$(document).ready(function () {
	const { thisOwner } = setStandardServices();
	thisOwner.place.services.forEach((i) => loadProducts(i));
	createProduct();
});

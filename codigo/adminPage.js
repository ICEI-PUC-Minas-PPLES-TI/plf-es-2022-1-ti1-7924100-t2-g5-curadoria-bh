function loadPlaces(db) {
	db.forEach(({ place }) => {
		var div = document.createElement("div");
		div.innerHTML =
			'<div class="card mb-3" style="max-width: 540px;">' +
			' <div class="row g-0">' +
			'<div class="col-md-4">' +
			'<img src="' +
			place.img +
			'" class="img-fluid rounded-start" alt="Imagem do estabelecimento">' +
			"</div>" +
			'<div class="col-md-6">' +
			'<div class="card-body">' +
			'<h5 class="card-title"' +
			">" +
			place.placeName +
			"</h5>" +
			'<p class="card-text">' +
			place.cnpj +
			"</p>" +
			'<p class="card-text">' +
			place.phone +
			"</p>" +
			'<p class="card-text">' +
			place.address +
			"</p>" +
			//                   '<p class="card-text">' + tag-restaurant / tag-bar / tag-nightclub + '</p>' ainda nao foram enviados
			//                   '<p class="card-text">' + $ / $$ / $$$ + '</p>'
			"</div>" +
			"</div>" +
			'<div class="col-md-2">' +
			"<button class=approve-btn " +
			"id =" +
			place.id +
			'><i class="fa-solid fa-check"></i></button>' +
			"<button class=delete-btn " +
			"id =" +
			place.id +
			'><i class="fa-solid fa-x"></i></button>' +
			"</div>" +
			"</div>" +
			"</div>";
		document.getElementById("bloco").appendChild(div);
	});
}

window.onload = () => {
	const db = JSON.parse(localStorage.getItem("owners")); // Nome da chave: owners
	console.log(db);
	loadPlaces(db);

	const approveBtns = document.querySelectorAll(".approve-btn");
	approveBtns.forEach((btn) =>
		btn.addEventListener("click", (event) => {
			const approvedPlaces = JSON.parse(localStorage.getItem("approvedPlaces"));
			const id = event.target.id.slice(0, 1);
			console.log(id);
			const thisPlace = db.find(({ place }) => place.id == parseInt(id)).place;
			approvedPlaces.push(thisPlace);
			localStorage.setItem("approvedPlaces", JSON.stringify(approvedPlaces));
		})
	);

	const deleteBtns = document.querySelectorAll(".delete-btn");
	deleteBtns.forEach((btn) =>
		btn.addEventListener("click", (event) => {
			const approvedPlaces = JSON.parse(localStorage.getItem("approvedPlaces"));
			const id = event.target.id;
			const filteredApprovedPlaces = approvedPlaces.filter(
				(place) => place.id !== parseInt(id)
			);
			localStorage.setItem(
				"approvedPlaces",
				JSON.stringify(filteredApprovedPlaces)
			);
		})
	);
};

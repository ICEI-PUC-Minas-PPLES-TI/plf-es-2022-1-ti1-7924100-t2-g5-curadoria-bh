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
		data.placeName +
		'">' +
		'<div class="card-body">' +
		'<h5 class="card-title">' +
		data.placeName +
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
	const places = JSON.parse(localStorage.getItem("approvedPlaces"));
	places.forEach((i) => loadProducts(i));
	gi;
};

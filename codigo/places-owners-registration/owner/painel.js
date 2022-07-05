window.onload = () => {
	const db = JSON.parse(localStorage.getItem("owners"));
	const cnpj = localStorage.getItem("logged");
	const place = db.find(({ place }) => place.cnpj === cnpj).place;

	const placeName = document.getElementById("place-name");
	placeName.innerText = place.placeName;
	const placeCnpj = document.getElementById("place-cnpj");
	placeCnpj.innerText = cnpj;
	const placePhone = document.getElementById("place-phone");
	placePhone.innerText = place.phone;
	const placeType = document.getElementById("place-type");
	placeType.innerText = place.type;
};

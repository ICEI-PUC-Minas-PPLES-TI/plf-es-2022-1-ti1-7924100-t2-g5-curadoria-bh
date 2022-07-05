function getCheckboxValue() {
	const checkboxes = document.querySelectorAll("input[type=checkbox]");
	const checkedBox = Array.from(checkboxes).find((box) => box.checked);

	if (checkedBox === undefined) {
		return "";
	}
	return checkedBox.name;
}

function getDropdownValue() {
	const dropdown = document.getElementById("dropdown");

	if (dropdown.value === undefined) {
		return "";
	}
	return dropdown.value;
}

function setPlace(newPlace) {
	const approvedPlaces = JSON.parse(localStorage.getItem("approvedPlaces"));
	const id = 1 + approvedPlaces.length;
	newPlace.id = id;
	approvedPlaces.push(newPlace);
	localStorage.setItem("approvedPlaces", JSON.stringify(approvedPlaces));
}

window.onload = () => {
	const owners = JSON.parse(localStorage.getItem("owners"));
	const lastOwner = owners[owners.length - 1];

	const submitPlaceBtn = document.getElementById("submit-place-btn");
	const nameInput = document.getElementById("place-name-input");
	const cnpjInput = document.getElementById("cnpj-input");
	const phoneInput = document.getElementById("phone-input");
	const addressInput = document.getElementById("address-input");
	const imgInput = document.getElementById("img-input");

	submitPlaceBtn.onclick = () => {
		const jsonPlace = {
			placeName: nameInput.value,
			cnpj: cnpjInput.value,
			phone: phoneInput.value,
			address: addressInput.value,
			type: getCheckboxValue(),
			price: getDropdownValue(),
			img: imgInput.value,
		};

		setPlace(jsonPlace);

		lastOwner["place"] = jsonPlace;
		owners[owners.length - 1] = lastOwner;
		localStorage.setItem("owners", JSON.stringify(owners));

		window.location.replace("../../login/login.html");
	};
};

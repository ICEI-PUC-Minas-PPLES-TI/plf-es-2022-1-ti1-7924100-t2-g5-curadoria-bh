function getRadioValue() {
	const radiosInput = document.getElementsByName("gender");
	const checkedRadio = Array.from(radiosInput).find((radio) => radio.checked);

	if (checkedRadio === undefined) {
		return "";
	}
	return checkedRadio.value;
}

window.onload = () => {
	let users = localStorage.getItem("users");
	users = users ? JSON.parse(users) : [];

	const nameInput = document.getElementById("name-input");
	const emailInput = document.getElementById("email-input");
	const cpfInput = document.getElementById("cpf-input");
	const passwordInput = document.getElementById("password-input");
	const submitBtn = document.getElementById("submit-btn");

	submitBtn.onclick = () => {
		const jsonOwner = {
			name: nameInput.value,
			email: emailInput.value,
			cpf: cpfInput.value,
			password: passwordInput.value,
			gender: getRadioValue(),
		};
		users.push(jsonOwner);

		localStorage.setItem("users", JSON.stringify(users));
	};
};

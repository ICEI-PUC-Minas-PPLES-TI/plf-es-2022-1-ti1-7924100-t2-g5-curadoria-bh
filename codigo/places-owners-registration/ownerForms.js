// todo gerar o jsonOwner
// todo salvar no localStorage o jsonOwner
// todo modularizar para conseguir criar testes unitários
// todo criar validações para os campos

function getRadioValue() {
	const radiosInput = document.getElementsByName("gender");
	const checkedRadio = Array.from(radiosInput).find((radio) => radio.checked);

	if (checkedRadio === undefined) {
		return "";
	}
	return checkedRadio.value;
}

window.onload = () => {
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

		console.log(jsonOwner);
	};
};
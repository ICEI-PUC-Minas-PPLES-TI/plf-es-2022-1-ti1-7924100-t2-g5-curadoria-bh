// todo gerar o jsonOwner
// todo salvar no localStorage o jsonOwner
// todo modularizar para conseguir criar testes unitários

window.onload = () => {
	const nameInput = document.getElementById("name-input");
	const submitBtn = document.getElementById("submit-btn");

	submitBtn.onclick = () => {
		const jsonOwner = {
			name: nameInput.value,
		};

		console.log(jsonOwner);
	};
};

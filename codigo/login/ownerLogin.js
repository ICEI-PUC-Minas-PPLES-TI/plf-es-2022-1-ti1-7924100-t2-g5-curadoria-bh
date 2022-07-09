window.onload = () => {
	const owners = JSON.parse(localStorage.getItem("owners"));
	const loginBtn = document.getElementById("login-btn");

	loginBtn.onclick = () => {
		const email = document.getElementById("email-input").value;
		const password = document.getElementById("password-input").value;
		const isValid = owners.some(
			(owner) => owner.email === email && owner.password === password
		);

		if (email === "admin" && password === "admin") {
			window.location.replace("../adminPage.html");
		} else if (!isValid) {
			alert("Email ou senha incorreto(s)!");
		} else {
			const cnpj = owners.find(
				(owner) => owner.email === email && owner.password === password
			).place.cnpj;
			localStorage.setItem("logged", cnpj);
			window.location.replace("../owner/painel.html");
		}
	};
};

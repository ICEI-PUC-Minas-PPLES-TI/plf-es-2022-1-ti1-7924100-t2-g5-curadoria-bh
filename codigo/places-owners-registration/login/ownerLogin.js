window.onload = () => {
	const owners = JSON.parse(localStorage.getItem("owners"));
	const loginBtn = document.getElementById("login-btn");

	loginBtn.onclick = () => {
		const email = document.getElementById("email-input").value;
		const password = document.getElementById("password-input").value;
		const isValid = owners.some(
			(owner) => owner.email === email && owner.password === password
		);

		if (!isValid) {
			alert("Email ou senha incorreto(s)!");
		} else {
			window.location.replace("../owner/painel.html");
		}
	};
};

window.onload = () => {
	const users = JSON.parse(localStorage.getItem("users"));
	const loginBtn = document.getElementById("login-btn");

	loginBtn.onclick = () => {
		const email = document.getElementById("email-input").value;
		const password = document.getElementById("password-input").value;
		const isValid = users.some(
			(user) => user.email === email && user.password === password
		);

		if (email === "admin" && password === "admin") {
			window.location.replace("../adminPage.html");
		} else if (!isValid) {
			alert("Email ou senha incorreto(s)!");
		} else {
			const cpf = users.find(
				(user) => user.email === email && user.password === password
			).cpf;
			console.log(cpf);
			localStorage.setItem("logged", cpf);
			window.location.replace("../user/feed.html");
		}
	};
};

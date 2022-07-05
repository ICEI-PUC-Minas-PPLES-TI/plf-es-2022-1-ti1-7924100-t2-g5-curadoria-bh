window.onload = () => {
	const users = JSON.parse(localStorage.getItem("users"));
	const loginBtn = document.getElementById("login-btn");

	loginBtn.onclick = () => {
		const email = document.getElementById("email-input").value;
		const password = document.getElementById("password-input").value;
		const isValid = users.some(
			(owner) => owner.email === email && owner.password === password
		);

		if (!isValid) {
			alert("Email ou senha incorreto(s)!");
		} else {
			window.location.replace("../feed.html");
		}
	};
};

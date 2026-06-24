document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (email !== "" && senha !== "") {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    }else {
        alert("Preencha todos os campos!");
    }
});
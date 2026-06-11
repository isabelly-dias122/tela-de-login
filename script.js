document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Usuário e senha de teste
    const emailCorreto = "admin@email.com";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");

        // Redireciona para outra página
        window.location.href = "home.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
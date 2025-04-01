document.body.innerHTML = `
    <div class="container">
        <h1>Prova Invalsi</h1>
        <p>Benvenuto nel test.</p>

        <form id="loginForm">
            <label>Email:</label>
            <input type="email" id="email" placeholder="Enter email">

            <label>Password:</label>
            <input type="password" id="password" placeholder="Password">

            <button type="submit">Accedi</button>
        </form>

        <div id="message"></div>
    </div>
`;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").innerHTML = "<p>Login effettuato con successo!</p>";
});

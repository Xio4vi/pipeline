let ejecuciones = 0;

function ejecutarPipeline(){

    ejecuciones++;

    document.getElementById("contador").innerHTML =
    ejecuciones;

    const terminal = document.getElementById("terminal");

    terminal.innerHTML += `
    
    <br>> Initializing pipeline...
    <br>> Checking repository...
    <br>> Running automated tests...
    <br>> Validating deployment...
    <br>> Pipeline executed successfully ✅
    
    `;

    terminal.scrollTop = terminal.scrollHeight;
}
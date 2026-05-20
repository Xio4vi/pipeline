let contador = 0;

function ejecutarValidacion(){

    contador++;

    document.getElementById("contador").innerHTML =
    contador;

    const terminal = document.getElementById("terminal");

    terminal.innerHTML += `

    <br>> Iniciando validación...
    <br>> Verificando repositorio...
    <br>> Ejecutando pruebas automáticas...
    <br>> Validando despliegue web...
    <br>> Validación completada correctamente ✅

    `;

    terminal.scrollTop = terminal.scrollHeight;
}
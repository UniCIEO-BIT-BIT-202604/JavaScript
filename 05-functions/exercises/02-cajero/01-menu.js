/**
 * Ejemplo de un Menú Interactivo en la Terminal usando do-while
 * 
 * En Node.js, para capturar datos por terminal usamos el módulo 'readline'.
 * El ciclo do-while es perfecto para menús porque asegura que el menú
 * se muestre al menos una vez antes de evaluar si el usuario quiere salir.
 */

const readline = require('readline');

// Configuramos la interfaz para leer de la entrada estándar (teclado)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función auxiliar para usar promesas con rl.question (facilita el flujo)
const prompt = (pregunta) => new Promise((resolve, reject) => rl.question(pregunta, resolve));

async function ejecutarMenu() {
    let opcion;

    console.log("=== BIENVENIDO AL SISTEMA ===");

    do {
        // 1. Mostrar opciones
        console.log("\n--- MENÚ PRINCIPAL ---");
        console.log("1. Consultar Saldo");
        console.log("2. Realizar Depósito");
        console.log("3. Retirar Efectivo");
        console.log("4. Salir");

        // 2. Capturar la opción del usuario
        // Usamos await para esperar a que el usuario escriba algo
        opcion = await prompt("Seleccione una opción (1-4): ");

        // 3. Evaluar la opción (Lógica del menú)
        switch (opcion) {
            case '1':
                consultarSaldo();
                break;
            case '2':
                realizarDeposito();
                break;
            case '3':
                retirarEfectivo();
                break;
            case '4':
                salirSistema();
                break;
            default:
                console.log(">> [!] Opción no válida. Intente de nuevo.");
                break;
        }

        // 4. Condición de salida: el ciclo se repite MIENTRAS la opción NO sea '4'
    } while (opcion !== '4');

    // Cerramos la interfaz al terminar
    rl.close();
    process.exit(0);
}



function consultarSaldo() {
    console.log(">> Su saldo actual es: $1,000.00");
}

function realizarDeposito() {
    console.log(">> Depósito realizado con éxito.");
}

function retirarEfectivo() {
    console.log(">> Por favor, retire su dinero.");
}

function salirSistema() {
    console.log(">> Saliendo del sistema... ¡Gracias!");
}


// Iniciar la ejecución
ejecutarMenu();

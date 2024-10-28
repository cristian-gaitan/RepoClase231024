import promptSync from 'prompt-sync';
import { renderUser } from "./controllers/userRender.controller";
import { renderPost } from "./controllers/postRender.controller";

const prompt = promptSync();

async function mainMenu() {
    let option: string;

    do {
        console.log("\n--- Menú Principal ---");
        console.log("1. Ejecutar renderUser");
        console.log("2. Ejecutar renderPost");
        console.log("0. Salir");

        option = prompt("Seleccione una opción: ");

        switch (option) {
            case "1":
                console.time("user");
                await renderUser();
                console.timeEnd("user");
                break;

            case "2":
                console.time("post");
                await renderPost();
                console.timeEnd("post");
                break;

            case "0":
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción no válida, intente nuevamente.");
        }
    } while (option !== "0");
}

mainMenu();
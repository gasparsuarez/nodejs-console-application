import { yarg } from "./config/plugins/yargs.plugins";
import { ServerApp } from "./presentation/server-app";

// Función anónima auto-invocada asíncrona
(async () => {
    await main();
})();

async function main() {

    const {
        b: base,
        l: limit,
        s: showTable,
        d: destination,
        n: fileName
    } = yarg;

    ServerApp.run({
        base,
        limit,
        showTable,
        destination,
        fileName,
    });

}
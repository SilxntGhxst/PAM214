function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
        const res = await simularPeticionAPI();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

obtenerDatos();

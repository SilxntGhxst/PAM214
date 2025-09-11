
let contraseña = "admin123";
if (contraseña == "admin123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

switch (contraseña) {
    case "admin123":
        console.log("Acceso como administrador");
        break;
    case "user123":
        console.log("Acceso como usuario");
        break;
    default:
        console.log("Acceso denegado");
        break;
}



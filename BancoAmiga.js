let saldo = 500000;
let opcion = 0;
let pinSeguridad = 0;

while (opcion !== 5) {
  console.log("\n=== Cajero automatico - banca amiga ===");
  console.log("1. Consignar dinero");
  console.log("2. Retirar dinero");
  console.log("3. Consultar saldo");
  console.log("4. Opcion de seguridad (validacion de pin)");
  console.log("5. Salir");

  opcion = Number(prompt("Seleccione una opcion: "));

  if (opcion === 1) {
    let montoConsignar = Number(prompt("digite el monto a consignar: "));
    if (montoConsignar > 0) {
      saldo = saldo + montoConsignar;
      console.log("Consignacion exitosa, ingrese su nuevo saldo: $" + saldo);
    } else {
      console.log("monto invalido, debe ser mayor que 0");
    }

  } else if (opcion === 2) {
    let montoRetiro = Number(prompt("ingrese el monto a retirar: "));
    if (montoRetiro <= 0) {
      console.log("Su monto no es valido, el monto debe ser mayor que 0");
    } else if (montoRetiro > saldo) {
      console.log("fondos insuficientes, su saldo actual es: $" + saldo);
    } else {
      saldo = saldo - montoRetiro;
      console.log("retiro exitoso su nuevo saldo es: $" + saldo);
    }

  } else if (opcion === 3) {
    console.log("Su saldo actual es: $" + saldo);

  } else if (opcion === 4) {
    pinSeguridad = Number(prompt("Ingrese su PIN de seguridad: "));
    if (pinSeguridad === 1234) {
      console.log("acceso de seguridad aprobado");
    } else if (pinSeguridad === 9999) {
      console.log("PIN bloqueado, contacte a la entidad");
    } else {
      console.log("PIN incorrecto");
    }

  } else if (opcion === 5) {
    console.log("gracias por usar banca amiga");
  } else {
    console.log("opción invalida, Intente nuevamente");
  }
}

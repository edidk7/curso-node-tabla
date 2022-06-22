const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    describe: 'Muestra la tabla en consola',
    default: false,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Este es el nmero hasta donde quieres la tabla',
  })  
  .check((argv, options) => {
    // console.log('yargs', argv);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;

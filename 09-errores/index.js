const winston =  require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });


const miFuncionSuma = (val1, val2) => {
    if (typeof val1 === "number" && typeof val2 === "number"){
        return val1 + val2;
    } 
    throw new Error("El valor no es de tipo numerico");
}

try {
    const suma = miFuncionSuma('hola',3);
    console.log(suma);
} catch (e){
    logger.error(e);
}
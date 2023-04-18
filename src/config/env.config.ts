
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7, // tener en cuenta que todo valor que viene de las variables de entorno,
    // viene por defecto como un string. IMPORTANTE!
})

// const envFn = () => {
//     return {

//     }
// }

// la función de arriba, es la misma sintaxis que la función comentada
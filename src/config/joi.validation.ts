import * as Joi from 'joi'

export const JoiValidationSchma = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6) // esto crea y añade en las ENV dicha variable de entorno, si no existe
})
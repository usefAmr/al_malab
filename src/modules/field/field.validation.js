import joi from 'joi';

export const addField={
    body:joi.object({
        number:joi.number().required()
    }).required(),
}

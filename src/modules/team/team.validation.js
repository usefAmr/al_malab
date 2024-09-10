import joi from 'joi';

export const addTeam={
    body:joi.object({
        Date:joi.date().required(),
        fromHour:joi.number().required(),
        toHour:joi.number().required()
    }).required(),
}

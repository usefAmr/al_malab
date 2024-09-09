import joi from 'joi';

export const addBooking={
    body:joi.object({
        fieldId:joi.string().required(),
        Date:joi.date().required(),
        fromHour:joi.number().required(),
        toHour:joi.number().required()
    }).required(),
}

import joi from 'joi';

export const updateUser={
    body:joi.object({
        name:joi.string().alphanum(),
        phoneNumber:joi.string()
    }).required(),
}

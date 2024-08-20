import joi from 'joi'
const dataMethods = ['body', 'params', 'query'];
export const generalFields={
    password:joi.string().pattern(/^[a-zA-Z0-9]{3,}$/).required(),
    email:joi.string().email({minDomainSegments:2,maxDomainSegments:3,tlds:{allow:['com','yahoo','net']}}).required(),
    cPassword:joi.string().required(),
    id:joi.string().max(24).min(24).required()
}

export const validation = (schema) => {
    return (req, res, next) => {
        const validationArr = [];
        dataMethods.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false })
                if (validationResult?.error) {
                    validationArr.push(validationResult.error)
                }
            }
        })
        if (validationArr.length > 0) {
            console.log(validationArr);
            return res.json({ message: "Validation Error", validationArr })
        } else {
           return next()
        }
    }
}

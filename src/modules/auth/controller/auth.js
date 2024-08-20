
import userModel from '../../../../DB/model/User.model.js'
import { asyncHandler } from '../../../utils/errorHandling.js';
import {generateToken,verifyToken } from '../../../utils/generate&verifyToken.js';
import { compare, hash } from '../../../utils/hash&compare.js';
import generator from 'generate-password';
import nodemailer from"nodemailer";
import {sendEmail} from '../../../utils/sendEmail.js'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "usef.amr5240@gmail.com",
      pass: "jxzg ccaw gjtk wmqn",
    },
  });

async function sendmail(email,subject,html) {
    const info = await transporter.sendMail({
      from: {address: "usef.amr5240@gmail.com"}, // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      html: html,
    //   context: {${randomPassword}} // html body
    });
  }

export const signUp =asyncHandler (
async(req,res,next)=>{

    const {name,email,password,cPassword,phoneNumber}=req.body
    console.log({name,email,password,cPassword,phoneNumber});

    const checkUser =  await userModel.findOne({email})
    if(checkUser){
        return next(new Error('Email Exist' , {cause:409}))
    }
    const hashPassword = hash({
        plainText :password
    })
    const payload = {
        email: email
      };
    const expiresIn = 60 * 5
    const token = `${generateToken({ payload })}`;
    
    const link = `http://localhost:5000/confirmEmail/${token}`
    const rfToken = generateToken({ payload:  {email} , expiresIn: 60 * 60 * 24 * 30 })
    const rfLink = `http://localhost:5000/requestNewEmail/${rfToken}`

    const html = `<a href= "${link}">Click me to confirm your email</a> <br>`
    const subject = "confirmation email"
    sendmail(email,subject,html)
    
    const user =  await userModel.create({name,email,password:hashPassword,phoneNumber})
    return res.status(201).json({message : "Done",user : user._id})
})

export const confirmEmail = asyncHandler( async (req, res, next) => {

    const {token} = req.params
    console.log(token)
    const decoded = verifyToken({ token })
    console.log(decoded.email)
  
    await userModel.updateOne(
        { email: decoded.email },
        { $set: { ConfirmEmail: true } }
      );
    return res.status (200).json({ message: "Done",  })
    })

export const login =asyncHandler(
async(req,res,next)=>{

    const {email,password}=req.body
    console.log({email,password});
    const checkUser =  await userModel.findOne({email})
    if(!checkUser){
        res.status(409) 
        return next(new Error('Email not Exist' , {cause:404}))
    }

    const matchPassword = compare({
        plainText :password,
        hashValue : checkUser.password
    })
    if(!matchPassword){
        return next(new Error('In-valid Password' , {cause:400}))

    }
    console.log(process.env.TOKEN_SIGNATURE)
    const token = generateToken({
        payload : {id : checkUser._id , name :checkUser.name,email:checkUser.email},
        signature: process.env.TOKEN_SIGNATURE,
        expiresIn :60*60
    })
    checkUser.status = 'online'
    checkUser.save()
    return res.status(201).json({message : "Done",token})
})

export const forgetPassword = asyncHandler( async(req,res)=>{

    const randomPassword = generator.generate({
        length: 10,
        numbers: true,
        symbols : true , exclude : `"`});

    try {
        if(!req.body.email)
        {
            return  res.send('Email is Required')
        }
        const {email}= req.body;
        const subject = "Reset password ✔"

        const checkUser =  await userModel.findOne({email})
        if(!checkUser){
            return res.json({message : "Email not Exist"})
        }
        const hashPassword = hash({
            plainText :randomPassword
        })
        await userModel.updateOne(
            { email: email },
            { $set: { password: hashPassword } }
          );
          const html = `<b>Your new password is: ${randomPassword}</b>`

        sendEmail(email ,subject,html)
        return res.json({message: 'Password sent successfully'})
        }
    catch (error) {
        console.log(error)
        }
})

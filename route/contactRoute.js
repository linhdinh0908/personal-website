const router = require("express").Router();
const res = require("express/lib/response");
const nodemailer = require("nodemailer");

router.post('/contact',(req,res) => {
    let data = req.body
    if (data.name.length === 0 || data.organization.length === 0  || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "please fill all the fields"})
    }
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: "linhd.official@gmail.com",
                pass: "Idontknow1997@"
            }
        })

        let mailOptions = {
            from: data.email,
            to:'linhd.official@gmail.com',
            subject: `message from ${data.name}`,
            html:`
            
            <h3>Info</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Organization: ${data.organization}</li>
                <li>Email: ${data.email}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>

            `
        }

        smtpTransporter.sendMail(mailOptions,(error)=>{
            try{
                if(error) return res.status(400).json({mgs: "Please fill all the fields"})  
                res.status(200).json({mgs: "Thank you for contacting Linh!"})          
            } catch (error) {
                if(error)return res.status(500).json({mgs: "There is server error"})
            }
        })
})

module.exports=router
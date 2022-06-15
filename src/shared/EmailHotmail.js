import nodemailer from 'nodemailer';
class EmailHotmail {
    enviar(para, asunto, cuerpoMensaje, pathArchivoAdjunto) {
        return new Promise((resolve, reject) => {
            var transporter = nodemailer.createTransport({
                host: 'smtp.mail.yahoo.com',
                port: 465,
                service: 'yahoo',
                secure: false,
                auth: {
                    user: 'angelstylear@yahoo.com.ar',
                    pass: 'LE4558763'
                },
                debug: false,
                logger: true
            });
            const mailOptions = {
                from: 'angelstylear@yahoo.com.ar',
                to: para,
                subject: asunto,
                text: cuerpoMensaje,
                attachments: [{ path: pathArchivoAdjunto }]
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    throw err;
                }
                else {
                    console.log(info);
                }
            });
        });
    }
}
export { EmailHotmail };

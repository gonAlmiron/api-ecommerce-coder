import { transporter } from "../services/notifications/notifications";


export const gmailController = async (req, res) => {
    const { dest } = req.body;
    const mailOptions = {
        from: process.env.EMAIL,
        to: dest,
        subject: '¡Bienvenido a la comisión 32155!',
        // text: 'Hola, te damos la bienvenida a nuestra comisión de backend.'
        html: '<h1>Hola, te damos la bienvenida a nuestra comisión de backend.</h1>'
    };
    try {
        const response = await transporter.sendMail(mailOptions);
        logger.info('Email enviado!');
        res.json(response);
    } catch (error) {
        logger.info(error);
    }
}
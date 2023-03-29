import { saveMessage, getAllMessages, deleteMessage } from "../services/chat.services"
import logger from "../logs/logger";

export const saveMessageController = async (req, res) => {
    try {
        const message = req.body;
        const from = req.body;
        const msg = await saveMessage(message, from)
        logger.info(msg)
        res.send(msg)
    } catch (err) {
        res.send(err.stack)
    }
}


export const getMessagesController = async (req, res) => {
    try {
        const messages = await getAllMessages()
        return res.send(messages)
    } catch(error) {
        return res.send({
            message: "Error al extraer los datos"
    })
        }
    }

export const deleteMessageController = async (req, res) => {
    try {
        const {id} = req.params
        const messageDelete = await deleteMessage(id)
        return res.send("Mensaje Eliminado:" + messageDelete)
    } catch(err) {
        return res.send({
            message: "Error al eliminar mensaje" + err.message + err.stack
        })
        
    }
}
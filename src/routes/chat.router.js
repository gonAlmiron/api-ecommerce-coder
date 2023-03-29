import {Router} from 'express'
import { saveMessageController, getMessagesController, deleteMessageController } from '../controllers/chat.controller'

const router = Router()

router.post('/save', saveMessageController)
router.get('/messages', getMessagesController)
router.delete('/messages/:id', deleteMessageController)

export default router
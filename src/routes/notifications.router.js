import {gmailController} from '../controllers/notifications.controller'

import {Router} from 'express'

const router = Router()

router.post('/gmail', gmailController)

export default router
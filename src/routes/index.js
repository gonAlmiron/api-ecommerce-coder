import {Router} from 'express';
import AuthRouter from './users.router'
import NotificationRouter from './notifications.router'
import ProductsRouter from './products.router'
import ChatRouter from './chat.router'
import CategoryRouter from './category.router'
import CartRouter from './cart.router'

const router = Router();

router.get('/', (req, res) => {
     res.json({
        message: "Petición desde el SERVIDOR -> ROUTER"
    })
})

router.use('/auth', AuthRouter)

router.use('/notifications', NotificationRouter)

router.use('/products', ProductsRouter)

router.use('/chat', ChatRouter)

router.use('/categories', CategoryRouter)

router.use('/cart', CartRouter)


export default router;
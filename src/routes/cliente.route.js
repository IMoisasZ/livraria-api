import { Router } from 'express'
import ClienteController from '../controllers/cliente.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'
const router = Router()

router.post('/', authPrivate, ClienteController.createCliente)
router.put('/', authPublic, ClienteController.updateCliente)
router.delete('/:id', authPrivate, ClienteController.deleteCliente)
router.get('/', authPrivate, ClienteController.getClientes)
router.get('/:id', authPrivate, ClienteController.getCliente)

export default router

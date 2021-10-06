import express from 'express'
import ClienteController from '../controllers/cliente.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'
const router = express.Router()

router.post('/', authPrivate, ClienteController.createCliente)
router.put('/', authPublic, ClienteController.updateCliente)
router.delete('/:cliente_id', authPrivate, ClienteController.deleteCliente)
router.get('/', authPrivate, ClienteController.getClientes)
router.get('/:cliente_id', authPrivate, ClienteController.getCliente)

export default router
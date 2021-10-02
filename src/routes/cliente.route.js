import express from 'express'
import ClienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.post('/', ClienteController.createCliente)
router.put('/', ClienteController.updateCliente)
router.delete('/:cliente_id', ClienteController.deleteCliente)
router.get('/', ClienteController.getClientes)
router.get('/:cliente_id', ClienteController.getCliente)

export default router
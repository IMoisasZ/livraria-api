import { Router } from 'express'
import VendaController from '../controllers/venda.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'

const router = Router()

router.post('/', authPublic, VendaController.createVenda)
router.get('/:id', authPrivate, VendaController.getVenda)
router.get('/', authPublic, VendaController.getVendas)

export default router

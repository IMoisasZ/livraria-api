import express from 'express'
import VendaController from '../controllers/venda.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'

const router = express.Router()

router.post('/', authPublic, VendaController.createVenda)
router.get('/:venda_id', authPrivate, VendaController.getVenda)
router.get('/', authPublic, VendaController.getVendas)
router.get('/?cliente_id', authPublic, VendaController.getVendas)
router.get('/?livro_id', authPrivate, VendaController.getVendas)
router.get('/?autor_id', authPrivate, VendaController.getVendas)

export default router
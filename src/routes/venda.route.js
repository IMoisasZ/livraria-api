import express from 'express'
import VendaController from '../controllers/venda.controller.js'

const router = express.Router()

router.post('/', VendaController.createVenda)
router.get('/:venda_id', VendaController.getVenda)
router.get('/', VendaController.getVendas)
router.get('/?cliente_id', VendaController.getVendas)
router.get('/?livro_id', VendaController.getVendas)
router.get('/?autor_id', VendaController.getVendas)

export default router
import express from 'express'
import AutorController from '../controllers/autor.controller.js'
<<<<<<< HEAD
import author from '../middlewares/auth.js'

const router = express.Router()

router.post('/', AutorController.createAutor)
router.put('/', AutorController.updateAutor)
router.delete('/:autor_id', AutorController.deleteAutor)
router.get('/',AutorController.getAutores)
router.get('/:autor_id', AutorController.getAutor)
=======
import authPrivate from '../middlewares/authPrivate.js'

const router = express.Router()

router.post('/', authPrivate, AutorController.createAutor)
router.put('/', authPrivate, AutorController.updateAutor)
router.delete('/:autor_id', authPrivate, AutorController.deleteAutor)
router.get('/', authPrivate, AutorController.getAutores)
router.get('/:autor_id', authPrivate, AutorController.getAutor)
>>>>>>> 005ec20c1dc0d4ca15d3ae4d7378b945b4ee4ee3

export default router
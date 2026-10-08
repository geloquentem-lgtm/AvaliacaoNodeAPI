import express from "express"
import ControllerFilme from "../controller/controllerfilme.js"

const router = express.Router()

router.get('/Buscar', ControllerFilme.Buscar)
router.get('/BuscarUm/:id', ControllerFilme.BuscarUm)
router.get('/BuscarNome/:nome', ControllerFilme.BuscarNome)
router.post('/Criar', ControllerFilme.Criar)
router.put('/Atualizar/:id', ControllerFilme.Atualizar)
router.put('/AtualizarTitulo/:id', ControllerFilme.AtualizarTitulo)
router.put('/AtualizarClassificacao/:id', ControllerFilme.AtualizarClassificacao)
router.put('/AtualizarDescricao/:id', ControllerFilme.AtualizarDescricao)
router.put('/AtualizarLancamento/:id', ControllerFilme.AtualizarLancamento)
router.delete('/Deletar/:id', ControllerFilme.Deletar)

export default router

import ServiceFilme from "../service/servicefilme.js"



class ControllerFilme {
    Buscar(req, res) {
        try {
            const resultado = ServiceFilme.Buscar()

            res.send({ message: resultado})
        } catch (e) {
            res.send ({ error: e.message})
        }
    }
    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const filme = ServiceFilme.BuscarUm(id)
            res.send({ filme })
        } catch (e) {
            res.send({ error: e.message})
        }
    }
    BuscarNome(req,res) {
        try {
            const nome = req.params.nome
            const filmes = ServiceFilme.BuscarNome(nome)
            res.send({ message: filmes})
        } catch (e) {
            res.send({ error: e.message})
        }
    }
    Criar(req, res) {
        try {
            const Titulo = req.body.Titulo
            const Classificacao = req.body.Classificacao
            const Descricao = req.body.Descricao
            const Lancamento = req.body.Lancamento
            
            ServiceFilme.Criar(Titulo, Classificacao, Descricao, Lancamento)
        } catch (e) {
            res.send({ error: e.message})
        }
    }

    Atualizar(req, res) {
        try {
            const id = req.params.id
            const Titulo = req.body.Titulo
            const Classificacao = req.body.Classificacao
            const Descricao = req.body.Descricao
            const Lancamento = req.body.Lancamento

            ServiceFilme.Atualizar(id, Titulo, Classificacao, Descricao, Lancamento)

            res.send({ message: "Informações atualizadas com sucesso: Titulo" + Titulo + " Classificação " + Classificacao + " Descrição " + Descricao + " Lançamento " + Lancamento})
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    AtualizarTitulo(req, res) {
        try {
            const id = req.params.id
            const Titulo = req.body.Titulo
            
            ServiceFilme.AtualizarTitulo(id, Titulo)

            res.send({ message: "Atualizado Titulo: " + Titulo + " " + id})
        } catch (e) {
            res.send({ message: e.message})
        }
    } 

    AtualizarClassificacao(req, res) {
        try {
            const id = req.params.id
            const Classificacao = req.body.Classificacao
            
            ServiceFilme.AtualizarClassificacao(id, Classificacao)

            res.send({ message: "Atualizado Classificação: " + Classificacao + " " + id})
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    AtualizarDescricao(req, res) {
        try {
            const id = req.params.id
            const Descricao = req.body.Descricao
            
            ServiceFilme.AtualizarDescricao(id, Descricao)

            res.send({ message: "Atualizado Descrição: " + Descricao + " " + id})
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    AtualizarLancamento(req, res) {
        try {
            const id = req.params.id
            const Lancamento = req.body.Lancamento
            
            ServiceFilme.AtualizarLancamento(id, Lancamento)

            res.send({ message: "Atualizado Lançamento: " + Lancamento + " " + id})
        } catch (e) {
            res.send({ message: e.message})
        }
    }
    
    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceFilme.Deletar(id)

            res.se,d({ message: "Deletado com sucesso"})
        } catch (e) {
            res.send({ message: e.message})
        }
    }
}

export default new ControllerFilme()
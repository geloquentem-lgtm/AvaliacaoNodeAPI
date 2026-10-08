import ModelFilme from "../model/modelfilme.js"



class ServiceFilme {
    Buscar() {
        return ModelFilme.Buscar()
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error ("Id invalida ou inexistente")
        }
        return ModelFilme.BuscarUm(id)
    }

    BuscarNome(nome) {
        if (!nome) {
            throw new Erro ("nome invalido ou inexistente")
        } 
        return ModelFilme.BuscarNome(nome)
    }

    Criar(Titulo, Classificacao, Descricao, Lancamento) {
        if (!Titulo || !Classificacao || !Descricao || !Lancamento) {
            throw new Error("não pode haver informações vazias")
        }
        ModelFilme.Criar(Titulo, Classificacao, Descricao, Lancamento)
    }

    Atualizar(id, Titulo, Classificacao, Descricao, Lancamento) {
        if (isNaN(id)) {
            throw new Error("Id invalida ou inexistente")
        }
        if (!Titulo || !Classificacao || !Descricao || !Lancamento) {
            throw new Error("Informações faltando")
        }
        ModelFilme.Atualizar(Titulo, Classificacao, Descricao, Lancamento)
    }

    AtualizarTitulo(id, Titulo) {
        if (isNaN(id)) {
            throw new Error("Id invalida ou inexistente")
        }
        if (!Titulo) {
            throw new Error("Titulo vazio")
        }
        ModelFilme.AtualizarTitulo(Titulo)
    }

    AtualizarClassificacao(id, Classificacao) {
        if (isNaN(id)) {
            throw new Error("Id invalida ou inexistente")
        }
        if (!Classificacao) {
            throw new Error("Classificação vazia")
        }
        ModelFilme.AtualizarClassificacao(Classificacao)
    }

    AtualizarDescricao(id, Descricao) {
        if (isNaN(id)) {
            throw new Error("Id invalida ou inexistente")
        }
        if (!Descricao) {
            throw new Error("Descrição vazia")
        }
        ModelFilme.AtualizarDescricao(Descricao)
    }

    AtualizarLancamento(id, Lancamento) {
        if (isNaN(id)) {
            throw new Error("Id invalida ou inexistente")
        }
        if (!Lancamento) {
            throw new Error("Lancamento vazio")
        }
        ModelFilme.AtualizarLancamento(Lancamento)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error ("id invalida ou inexistente")
        }

        ModelFilme.Deletar(id)
    }
    
}

export default new ServiceFilme()


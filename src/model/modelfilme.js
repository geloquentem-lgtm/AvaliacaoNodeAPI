const filmes = new Array (
    {
        Titulo:'Sexta feira 13', 
        Classificacao:18, 
        Descricao:'Um filme do genero slasher que extreia a famosa franquia Sexta feira 13 do Assassino em série Jason.', 
        Lancamento:'9 de maio de 1980'
    },
    {
        Titulo:'Vingadores: Guerra Civil', 
        Classificacao:12, 
        Descricao:'A continuação da história dos vingadores: Era de Ultron, a história gira em torno da divisão da equipe gerado pelo conflito de interesses politicos entre Capitão América e Homem de Ferro', 
        Lancamento:'28 de abril de 2016'
    },
    {
        Titulo:'Homem Aranha: Sem volta pra casa',
        Classificacao:12, 
        Descricao:'A continuação direta de Homem aranha: De volta pra casa, no filme Parker pede ajuda de Dr Estranho para tornar sua identidade secreta novamente, após ser exposto por Quentin Beck', 
        Lancamento:'13 de dezembro de 2021'
    }
)

class ModelFilme {
    Buscar() {
        return filmes
    }

    BuscarUm(id) {
        return filmes[id]
    }

    BuscarNome(nome){
        return filmes[{Titulo:nome}]
    }
    BuscarClassificacao(Classificacao) {
        return filmes[Classificacao]
    }

    Criar(Titulo, Classificacao, Descricao, Lancamento) {
        filmes.push({Titulo, Classificacao, Descricao, Lancamento})
    }

    Atualizar(id, Titulo, Classificacao, Descricao, Lancamento) {
        filmes[id].Titulo = Titulo
        filmes[id].Classificacao = Classificacao
        filmes[id].Descricao = Descricao
        filmes[id].Lancamento = Lancamento
        

    }

    AtualizarTitulo(id, Titulo) {
        filmes[id].Titulo = Titulo
    }

    AtualizarClassificacao(id, Classificacao) {
        filmes[id].Classificacao = Classificacao
    }

    AtualizarDescricao(id, Descricao) {
        filmes[id].Descricao = Descricao
    }

    AtualizarLancamento(id, Lancamento) {
        filmes[id].Lancamento = Lancamento
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }
}

export default new ModelFilme()
// Inicializa as dependencias 
const repositorio = new ProdutoRepository()

// Cria as ligações da tela com o js
const viewProduto = new FormularioProduto(repositorio)

viewProduto.atualizarTable()
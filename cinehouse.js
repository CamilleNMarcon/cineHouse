const catalogo = require('./database/catalogo.json')
console.log(catalogo)

//Adicionar Filme a Lista
var filme = {
  codigo:3,
  nomeFilme:"Mamma Mia!",
  duracao: 1.48,
  anoDeLancamento:2008,
  atores:["Meryl Streep", "Lily James", "Amanda Seyfried", "Christine Baranski", "Julie Walters", "Pierce Brosnan", "Colin Firth", "Stellan Skarsgård", "Dominic Cooper", "Cher"],
  emCartaz:false
}    

function adicionarFilme(filme)
{
  catalogo.push(filme);
  return catalogo 
};
console.log(adicionarFilme(filme));

//Buscar Filme
const buscarFilme = cod => catalogo.find( X => X.codigo === cod);
console.log(buscarFilme(0002));

//Alterar Status 
const alterarStatusEmCartaz = (codigo) => {
  for (let i = 0; i < catalogo.length; i++) {
      catalogo[i].codigo == codigo ? catalogo[i].emCartaz =! catalogo[i].emCartaz : '';
  }
}
console.log(alterarStatusEmCartaz(3), catalogo);

//Lista de Todos os Filmes
const listarTodosOsFilmes = () => {
  for (let i = 0; i < catalogo.length; i++) {
      return catalogo
  }
}
console.log(listarTodosOsFilmes(catalogo));

// Lista de Filmes Em Cartaz
const listarFilmesEmCartaz = () => {
  for(let i=0; i<catalogo.length; i++){
    return catalogo.filter(catalogo => catalogo.emCartaz == true);
  }
}
console.log(listarFilmesEmCartaz());



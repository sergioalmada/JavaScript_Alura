function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if(!campoPesquisa) {
        section.innerHTML = "<p>Vish você não pesquisou nada!!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">    
              <h2>
                <a href="#"> ${dado.titulo} </a>
             </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank"> Saber mais</a>
            </div>
            `;
        }
        
    }

    if (!resultados){
        resultados = "<p>Vish não tem esse personagem, nada encontrado</p>"
    }

    section.innerHTML = resultados
}

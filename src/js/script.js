const form = document.getElementById("formPrincipal")
const lista = document.getElementById("lista")
const apagar = document.getElementById("apagar")

let listaCheck = []

const livro = {
    nome: document.getElementById("nome"),
    genero: document.getElementById("genero")
}

const datas = {
    dataColeta: document.getElementById("data"),
    dataDevolucao: document.getElementById("dataRetorno"),
}



const aluno = {
    nomeAluno: document.getElementById("nomeAluno"),
    serie: document.getElementById("serie"),
    turma: document.getElementById("turma"),
    
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (
        livro.nome.value === "" ||
        aluno.nomeAluno.value === "" ||
        datas.dataColeta.value === "" ||
        datas.dataDevolucao.value === ""
    ) {
        alert("Forneça todas as informações para enviar.")
        return
    }

    if (listaCheck.includes(aluno.nomeAluno.value)) {
        alert("esse aluno ja está na lista")
        return
    }

    listaCheck.push(aluno.nomeAluno.value)

    const item = document.createElement("li")
    item.classList.add("itemLista")

    const check = document.createElement("input")
    check.type = "checkbox"
    check.classList.add("checkItem")

    item.appendChild(check)

    item.innerHTML +=
        " Livro: " + livro.nome.value +
        "<br>" +
        "  Aluno: " + aluno.nomeAluno.value +
        "<br>" +
        "  Retirado: " + new Date(datas.dataColeta.value).toLocaleDateString("pt-BR") +
        "<br>" +
        "  Devolução: " + new Date(datas.dataDevolucao.value).toLocaleDateString("pt-BR")

    lista.appendChild(item)

    form.reset()
})

apagar.addEventListener("click", () => {
    const checkBoxes = lista.querySelectorAll(".checkItem")
    const itens = lista.querySelectorAll("li")

    for (let i = checkBoxes.length - 1; i >= 0; i--) {
        if (checkBoxes[i].checked) {
            itens[i].remove()
            listaCheck.splice(i, 1)
        }
    }
})

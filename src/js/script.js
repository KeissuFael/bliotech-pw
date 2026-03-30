const form = document.getElementById("formPrincipal")
const lista = document.getElementById("lista")
const apagar = document.getElementById("apagar")

let listaCheck = []

const livro = {
    nome: document.getElementById("nome"),
    genero: document.getElementById("genero")
}

const aluno = {
    nomeAluno: document.getElementById("nomeAluno"),
    serie: document.getElementById("serie"),
    turma: document.getElementById("turma"),
    dataColeta: document.getElementById("data"),
    dataDevolucao: document.getElementById("dataRetorno")
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (
        livro.nome.value === "" ||
        aluno.nomeAluno.value === "" ||
        aluno.dataColeta.value === "" ||
        aluno.dataDevolucao.value === ""
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

    const turmaSel = aluno.turma.options[aluno.turma.selectedIndex].value

    item.appendChild(check)

    item.innerHTML +=
        " Livro: " + livro.nome.value +
        "  Aluno: " + aluno.nomeAluno.value + aluno.serie.value + turmaSel +
        "  Retirado: " + aluno.dataColeta.value +
        "  Devolução: " + aluno.dataDevolucao.value 

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

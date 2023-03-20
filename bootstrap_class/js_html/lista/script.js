// const lista = Array.from(document.getElementById('lista').children)   Pode ser assim também
const lista = [...document.getElementById('lista').children]

lista.forEach((item) => {
    item.onclick = concluir
})

function concluir(evento) {
    evento.target.classList.toggle('concluido')
}
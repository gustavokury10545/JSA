const btnSalvar = document.getElementById('btnSalvar')

btnSalvar.addEventListener('click', () => {
    var inputHotel = document.getElementById('hotel')
    if(inputHotel.value === ''){
        alert('o hotel deve ser informado')
        inputHotel.focus()
        return
    }

    const hospede = {
        hotel: inputHotel.value,
        numero: document.getElementById('numero').value
    }

    const hospedes = JSON.parse(localStorage.getItem('hospedes')) || []
    hospedes.push(hospede)
    localStorage.setItem('hospedes',JSON.stringify(hospedes))
    limparCampos()
    carregaHospedes()
})

const btnCancelar = document.getElementsByClassName('btn-outline-secondary')[0]
btnCancelar.addEventListener('click', () => {
    limparCampos()
})



function limparCampos(){
    document.getElementById('hotel').value = ''
    document.getElementById('hotel').focus()
    document.getElementById('numero').value = ''

}

function carregaHospedes(){
const hospedes = JSON.parse(localStorage.getItem('hospedes')) || []
let linhas = ''
for(let i = 0; i < hospedes.length; i++){
    linhas += `<tr><td>${hospedes[i].Hotel}</td><td>${hospedes[i].numero}</td>
    <td><button onclick=excluir('${hospedes[i].numero}')>Excluir</button></td></tr>`
}
document.getElementsByTagName('tbody')[0].innerHTML = linhas
}

function excluir(numero){
    console.log(numero)
    const hospedes = JSON.parse(localStorage.getItem('hospedes')) || []
    for(let i = 0; i < hospedes.length; i++){
        if(hospedes[i].numero == numero){
            hospedes.splice(i,1)
        }
    }
    localStorage.setItem('hospedes',JSON.stringify(hospedes))
    carregaHospedes()
}

document.addEventListener('DOMContentLoaded',() => {
    carregaHospedes()
})
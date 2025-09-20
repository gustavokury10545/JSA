const btnSalvar = document.getElementById('btnSalvar')

btnSalvar.addEventListener('click', () => {
    var inputHotel = document.getElementById('hotel')
    if (inputHotel === '') {
        alert('Nome do Hotel Obrigatorio')
        inputHotel.focus()
        return
    }

    const reserva = {
        hotel: inputHotel.value
        numero: document.getElementById('numeroDaReserva').value
    }

    const reservas = JSON.parse(localStorage.getItem(hoteis))
    reservas.push(reserva)
    localStorage.setItem('hoteis', JSON stringify(hoteis))
})

const btnCancelar = document.getElementByClassname('btn-outline-secondary')[0]
btnCancelar.addEventListener('click', () => {
    limparCampos()
})

function carregaHoteis() {
    const reservas = JSON.parse(localStorage.getItem('reservas')) || []
    let linhas = ''
    for (let i = 0; i < reservas.length; i++) {
        linhas += `<tr><td>${hospedes[i].hotel}</td><td>`
    }
}

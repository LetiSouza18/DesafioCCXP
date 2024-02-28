const dias = document.getElementById('dia')
const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const lancamento = "01 mar 2024"

function countDown(){
    const dataLanc = new Date(lancamento)
    const dataHoje = new Date()

    const contagemTotal = (dataLanc - dataHoje)/1000

    const finalDias = Math.floor(contagemTotal/60/60/24);
    const finalHoras = Math.floor(contagemTotal/60/60)%24;
    const finalMinutos = Math.floor(contagemTotal/60)%60;
    const finalSegundos = Math.floor(contagemTotal)%60;

    dias.innerHTML = formatoTempo(finalDias)+'D'
    horas.innerHTML = formatoTempo(finalHoras)+'H'
    minutos.innerHTML = formatoTempo(finalMinutos)+'M'
    segundos.innerHTML = formatoTempo(finalSegundos)+'S'
}

function formatoTempo(tempo){
    return tempo < 10? `0`&{tempo} : tempo
}

countDown()
setInterval(countDown, 1000);

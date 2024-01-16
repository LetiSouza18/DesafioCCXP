const ingressos = [];

function addRedBorder(id){
    element = document.querySelector(`#${id}`)
    element.style.border = "5px solid red"
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        
        alert(`Tecla Pressionada: ${name}\r\n Key Code: ${code}`)
    }, false);
}

function highlightCard(selector){
    element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;

        if(code == 'Digit1' || code == 'Numpad1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit2' || code == 'Numpad2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit3' || code == 'Numpad3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit4' || code == 'Numpad4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

showSelectedCards = () => {
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();
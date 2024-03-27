const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('Quebrada') > -1
}

function lampOn () {
    if (!isLampBroken () ) {
    lamp.src = './img/Ligada.jpg';
    }
}
function lampOff (){
    if (!isLampBroken () ) {
    lamp.src = './img/Desligada.jpg';
}
}
function lampBroken () {
    lamp.src = './img/Quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
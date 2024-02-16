let saudacao = document.getElementById('saudacao');
let hora = new Date().getHours();
let minuto = new Date().getMinutes();


if (hora < 12 && hora >= 0 ) {
    saudacao.innerHTML = 'Bom Dia';
    
}
else if (hora >= 12 && hora < 18 ) {
    saudacao.innerHTML = 'Boa Tarde';
 
}
else {
    saudacao.innerHTML = 'Boa Noite';
 
}



let horario = document.getElementById('horario');

horario.innerHTML = String(hora) + ':' + String(minuto)



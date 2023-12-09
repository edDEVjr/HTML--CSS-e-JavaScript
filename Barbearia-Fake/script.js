let saudacao = document.getElementById('saudacao');
let hora = new Date().getHours();
let minuto = new Date().getMinutes();
let segundo = new Date().getSeconds();


if (hora < 12 && hora > 4 ) {
    saudacao.innerHTML = 'Bom Dia';
    
}
else if (hora < 5 && hora > 17 ) {
    saudacao.innerHTML = 'Boa Noite';
 
}
else {
    saudacao.innerHTML = 'Boa Tarde';
 
}



let horario = document.getElementById('horario');

horario.innerHTML = String(hora) + ':' + String(minuto)



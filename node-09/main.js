/*======= INTRODUÇÃO AOS MÓDULOS BUILTIN DO NODE (main.js) =======*/

const os = require('os');

//console.log(os);

//identifica o sistema operacional instalado (win32)
//console.log(os.platform());

//identifica a versão do sistema operacional instalado (windows 10 pro)
//console.log(os.version());

//identifica a cpu utilizada (Objeto com as configurações)
//console.log(os.cpus());

//console.log(os.cpus()[0]);
//console.log(os.cpus()[0].speed);


/*======= another examples =======*/

//devolve o caminho (c:\Users\Daniel_oliveira)
//console.log(os.homedir());

//devolve a memoria disponivel no sistema (7904284672)
//console.log(os.freemem());

//devolve informações sobre a maquina (configurações) f
//console.log(os.machine());

//devolve a memoria total do sistema (17009004544)
console.log(os.totalmem());



/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/

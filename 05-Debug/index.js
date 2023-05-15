/**
 * Debbuger
 * 
 * Ayuda a visualizar en la parte de inspeccionar del navegador, el scope del codigo
 */


var a = 'Hello';

function hello(){
    let b = 'Hello world';
    const c = 'Hello world ..!';

    if(true){
        let d = 'Hello world ..!';
        debugger
    }
}

hello();
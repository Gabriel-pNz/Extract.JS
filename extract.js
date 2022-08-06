let str = "Samaritana";

function join (txt) {
    let res = "";
    for (let i = 0; i < txt.length; i++) {
        //res += txt.shift();
        res += txt[i];
    }
    return console.log(res);
}

function extrair (frase) {

    var array = frase.split("");
    var x = [];
    x = array.splice(array.length - 3, 3);
    
    join(x); 
    
}

console.log(extrair(str));
